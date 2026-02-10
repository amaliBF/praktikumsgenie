'use client';

import { useAuthContext } from './GenieAuthProvider';
import { ssoUpdateProfile, ssoDeleteAccount } from './api';

export function useUser() {
  const ctx = useAuthContext();

  const updateProfile = async (data: {
    firstName?: string;
    lastName?: string;
    lifePhase?: string;
    interests?: string[];
  }) => {
    const updated = await ssoUpdateProfile(data);
    // Force re-render by triggering state update in provider
    window.location.reload();
    return updated;
  };

  const deleteAccount = async () => {
    await ssoDeleteAccount();
    window.location.reload();
  };

  return {
    user: ctx.user,
    updateProfile,
    deleteAccount,
  };
}
