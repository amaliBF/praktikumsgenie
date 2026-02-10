import { config } from './config';
import { GenieUser } from './types';

const BASE = `${config.authServerUrl}/v1/sso`;

async function authFetch<T = any>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE}${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Fehler ${res.status}`);
  }

  // Handle 204 No Content
  if (res.status === 204) return {} as T;

  return res.json();
}

export async function ssoRegister(data: {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  newsletterConsent?: boolean;
}): Promise<{ user: GenieUser }> {
  return authFetch('/register', {
    method: 'POST',
    body: JSON.stringify({ ...data, domain: config.domain }),
  });
}

export async function ssoLogin(data: {
  email: string;
  password: string;
}): Promise<{ user: GenieUser }> {
  return authFetch('/login', {
    method: 'POST',
    body: JSON.stringify({ ...data, domain: config.domain }),
  });
}

export async function ssoLogout(): Promise<void> {
  await authFetch('/logout', { method: 'POST' });
}

export async function ssoRefresh(): Promise<{ user: GenieUser }> {
  return authFetch('/refresh', { method: 'POST' });
}

export async function ssoGetMe(): Promise<GenieUser> {
  return authFetch('/me');
}

export async function ssoUpdateProfile(data: {
  firstName?: string;
  lastName?: string;
  lifePhase?: string;
  interests?: string[];
}): Promise<GenieUser> {
  return authFetch('/me', {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function ssoDeleteAccount(): Promise<void> {
  await authFetch('/me', { method: 'DELETE' });
}

export async function ssoForgotPassword(email: string): Promise<void> {
  await authFetch('/forgot-password', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

export async function ssoResetPassword(
  token: string,
  newPassword: string,
): Promise<void> {
  await authFetch('/reset-password', {
    method: 'POST',
    body: JSON.stringify({ token, newPassword }),
  });
}
