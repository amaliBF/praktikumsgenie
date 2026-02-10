'use client';

import React from 'react';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';
import { ForgotPasswordModal } from './ForgotPasswordModal';

interface AuthModalsProps {
  activeModal: 'login' | 'register' | 'forgot-password' | null;
}

export function AuthModals({ activeModal }: AuthModalsProps) {
  if (!activeModal) return null;

  switch (activeModal) {
    case 'login':
      return <LoginModal />;
    case 'register':
      return <RegisterModal />;
    case 'forgot-password':
      return <ForgotPasswordModal />;
    default:
      return null;
  }
}
