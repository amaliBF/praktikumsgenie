'use client';

import React from 'react';
import { useAuthContext } from './GenieAuthProvider';
import { config } from './config';

export function LoginButton() {
  const { openLoginModal, openRegisterModal } = useAuthContext();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={openLoginModal}
        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
      >
        Anmelden
      </button>
      <button
        onClick={openRegisterModal}
        className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: config.primaryColor }}
      >
        Registrieren
      </button>
    </div>
  );
}
