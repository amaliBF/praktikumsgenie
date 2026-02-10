export interface GenieUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string | null;
  avatarUrl: string | null;
  lifePhase: string | null;
  interests: string[] | null;
  activeDomains: string[] | null;
  emailVerified: boolean;
}

export interface AuthState {
  user: GenieUser | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface GenieAuthConfig {
  domain: string;
  name: string;
  primaryColor: string;
  authServerUrl: string;
}
