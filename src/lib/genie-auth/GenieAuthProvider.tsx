'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { GenieUser, AuthState } from './types';
import { ssoGetMe, ssoRefresh, ssoLogin, ssoLogout, ssoRegister } from './api';
import { AuthModals } from './AuthModals';

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName?: string;
    newsletterConsent?: boolean;
  }) => Promise<void>;
  logout: () => Promise<void>;
  openLoginModal: () => void;
  openRegisterModal: () => void;
  openForgotPasswordModal: () => void;
  closeModals: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext must be inside GenieAuthProvider');
  return ctx;
}

type ModalType = 'login' | 'register' | 'forgot-password' | null;

export function GenieAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<GenieUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const isLoggedIn = !!user;

  // Check login status on mount
  useEffect(() => {
    const checkAuth = async () => {
      // Check localStorage flag (works cross-domain, unlike cookies)
      const hasSession =
        typeof window !== 'undefined' &&
        (localStorage.getItem('genie_logged_in') === '1' ||
          document.cookie.includes('genie_logged_in=1'));

      if (!hasSession) {
        setIsLoading(false);
        return;
      }

      try {
        const me = await ssoGetMe();
        setUser(me);
      } catch {
        // Access token expired, try refresh
        try {
          const result = await ssoRefresh();
          setUser(result.user);
        } catch {
          // Not logged in — clear stale flag
          setUser(null);
          try { localStorage.removeItem('genie_logged_in'); } catch {}
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setError(null);
    const result = await ssoLogin({ email, password });
    setUser(result.user);
    try { localStorage.setItem('genie_logged_in', '1'); } catch {}
    setActiveModal(null);
  }, []);

  const register = useCallback(
    async (data: {
      email: string;
      password: string;
      firstName: string;
      lastName?: string;
      newsletterConsent?: boolean;
    }) => {
      setError(null);
      const result = await ssoRegister(data);
      setUser(result.user);
      try { localStorage.setItem('genie_logged_in', '1'); } catch {}
      // Don't close modal here — let RegisterModal show success message
    },
    [],
  );

  const logout = useCallback(async () => {
    try {
      await ssoLogout();
    } catch {
      // Ignore errors
    }
    setUser(null);
    try { localStorage.removeItem('genie_logged_in'); } catch {}
  }, []);

  const openLoginModal = useCallback(() => setActiveModal('login'), []);
  const openRegisterModal = useCallback(() => setActiveModal('register'), []);
  const openForgotPasswordModal = useCallback(
    () => setActiveModal('forgot-password'),
    [],
  );
  const closeModals = useCallback(() => setActiveModal(null), []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isLoading,
        error,
        login,
        register,
        logout,
        openLoginModal,
        openRegisterModal,
        openForgotPasswordModal,
        closeModals,
      }}
    >
      {children}
      <AuthModals activeModal={activeModal} />
    </AuthContext.Provider>
  );
}
