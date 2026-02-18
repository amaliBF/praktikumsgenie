'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, RotateCcw, TrendingUp, Briefcase, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '@/lib/genie-auth';

const API_BASE = 'https://api.genieportal.de/v1/ai';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  quickReplies?: string[];
}

interface SuggestedProfession {
  id: string | null;
  name: string;
  matchPercent: number;
  shortDescription: string | null;
  salaryYear1: number | null;
  salaryYear2: number | null;
  salaryYear3: number | null;
  reason: string;
}

interface BerufsinderChatProps {
  portal: string;
  accentColor?: string;
  accentBg?: string;
  accentHover?: string;
  gradientFrom?: string;
  gradientTo?: string;
  buttonTextColor?: string;
}

export default function BerufsinderChat({
  portal,
  accentColor = 'text-cyan-600',
  accentBg = 'bg-cyan-600',
  accentHover = 'hover:bg-cyan-700',
  gradientFrom = 'from-cyan-500',
  gradientTo = 'to-teal-600',
  buttonTextColor = 'text-white',
}: BerufsinderChatProps) {
  const { isLoggedIn, isLoading: authLoading, openLoginModal, openRegisterModal } = useAuth();
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [suggestedProfessions, setSuggestedProfessions] = useState<SuggestedProfession[] | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const startConversation = async () => {
    setIsLoading(true);
    setHasStarted(true);
    try {
      const res = await fetch(`${API_BASE}/conversation/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ portal }),
      });
      const data = await res.json();
      setConversationId(data.conversationId);
      setMessages([{
        role: 'assistant',
        content: data.response.message,
        quickReplies: data.response.quickReplies,
      }]);
    } catch {
      setMessages([{
        role: 'assistant',
        content: 'Ups, da ist etwas schiefgelaufen. Bitte versuche es erneut.',
      }]);
    }
    setIsLoading(false);
  };

  const sendMessage = async (message: string) => {
    if (!conversationId || isLoading || !message.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: message.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ conversationId, message: message.trim() }),
      });
      const data = await res.json();

      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: data.response.message,
        quickReplies: data.response.quickReplies,
      }]);

      if (data.suggestedProfessions) {
        setSuggestedProfessions(data.suggestedProfessions);
      }
      if (data.isComplete) {
        setIsComplete(true);
      }
    } catch {
      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: 'Da ist leider ein Fehler aufgetreten. Versuche es nochmal!',
      }]);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const resetChat = () => {
    setConversationId(null);
    setMessages([]);
    setIsComplete(false);
    setSuggestedProfessions(null);
    setInputValue('');
    setHasStarted(false);
  };

  // Auth loading state
  if (authLoading) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">Wird geladen...</p>
      </div>
    );
  }

  // Auth gate — require login
  if (!isLoggedIn) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white mb-6`}>
          <Sparkles className="h-10 w-10" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          KI-Berufsfinder
        </h3>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Erstelle ein kostenloses Konto oder melde dich an, um den KI-Berufsfinder zu nutzen.
          So können wir deine Ergebnisse speichern und dir passende Stellen vorschlagen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openRegisterModal}
            className={`inline-flex items-center justify-center gap-2 rounded-full ${accentBg} ${accentHover} px-8 py-4 text-base font-semibold ${buttonTextColor} transition-colors shadow-lg`}
          >
            <UserPlus className="h-5 w-5" />
            Kostenlos registrieren
          </button>
          <button
            onClick={openLoginModal}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-base font-semibold text-gray-700 transition-colors"
          >
            <LogIn className="h-5 w-5" />
            Anmelden
          </button>
        </div>
      </div>
    );
  }

  // Start screen
  if (!hasStarted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white mb-6`}>
          <Sparkles className="h-10 w-10" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Bereit? Finde deinen Traumberuf!
        </h3>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Beantworte ein paar kurze Fragen und unsere KI empfiehlt dir passende Berufe – basierend auf deinen Interessen und Stärken.
        </p>
        <button
          onClick={startConversation}
          className={`inline-flex items-center gap-2 rounded-full ${accentBg} ${accentHover} px-8 py-4 text-base font-semibold ${buttonTextColor} transition-colors shadow-lg`}
        >
          <Sparkles className="h-5 w-5" />
          Jetzt KI-Berufsfinder starten
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Chat messages */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} px-6 py-4 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">KI-Berufsfinder</h3>
              <p className="text-white/70 text-sm">Dein persönlicher Berufsberater</p>
            </div>
          </div>
          {hasStarted && (
            <button
              onClick={resetChat}
              className="text-white/70 hover:text-white transition-colors p-2"
              title="Neu starten"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="h-[400px] sm:h-[480px] overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index}>
              <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white`
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>

              {/* Quick replies - only show for last assistant message */}
              {msg.role === 'assistant' && msg.quickReplies && index === messages.length - 1 && !isComplete && (
                <div className="flex flex-wrap gap-2 mt-3 ml-1">
                  {msg.quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      disabled={isLoading}
                      className={`text-sm px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        {!isComplete && (
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Oder schreib deine Antwort..."
              disabled={isLoading || !conversationId}
              className="flex-1 rounded-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim() || !conversationId}
              className={`rounded-full ${accentBg} ${accentHover} p-3 ${buttonTextColor} transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        )}
      </div>

      {/* Profession Results */}
      {suggestedProfessions && suggestedProfessions.length > 0 && (
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <TrendingUp className={`h-5 w-5 ${accentColor}`} />
            Deine Berufsempfehlungen
          </h3>
          <div className="grid gap-4">
            {suggestedProfessions.map((prof, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white font-bold text-sm`}>
                      #{index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{prof.name}</h4>
                      {prof.shortDescription && (
                        <p className="text-sm text-gray-500">{prof.shortDescription}</p>
                      )}
                    </div>
                  </div>
                  <div className={`text-lg font-bold bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                    {prof.matchPercent}%
                  </div>
                </div>

                {/* Match bar */}
                <div className="mb-3">
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} transition-all duration-700`}
                      style={{ width: `${prof.matchPercent}%` }}
                    />
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-3">{prof.reason}</p>

                {(prof.salaryYear1 || prof.salaryYear2 || prof.salaryYear3) && (
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <Briefcase className="h-4 w-4 flex-shrink-0" />
                    <span>
                      Gehalt: {prof.salaryYear1 ? `${prof.salaryYear1.toLocaleString('de-DE')} €` : '–'} /
                      {prof.salaryYear2 ? ` ${prof.salaryYear2.toLocaleString('de-DE')} €` : ' –'} /
                      {prof.salaryYear3 ? ` ${prof.salaryYear3.toLocaleString('de-DE')} €` : ' –'}
                      <span className="text-gray-400 ml-1">(1./2./3. Jahr)</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={resetChat}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Nochmal von vorne starten
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
