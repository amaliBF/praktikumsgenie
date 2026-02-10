'use client';

import { useAuthContext } from './GenieAuthProvider';

export function useAuth() {
  const ctx = useAuthContext();
  return {
    isLoggedIn: ctx.isLoggedIn,
    isLoading: ctx.isLoading,
    error: ctx.error,
    login: ctx.login,
    register: ctx.register,
    logout: ctx.logout,
    openLoginModal: ctx.openLoginModal,
    openRegisterModal: ctx.openRegisterModal,
  };
}
