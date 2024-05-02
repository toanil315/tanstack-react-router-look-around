import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants';
import { useLoginMutation } from '@/hooks/apis/useLoginMutation';
import * as React from 'react';

export interface AuthContext {
  isAuthenticated: boolean;
  login: (username: string) => Promise<void>;
  logout: () => void;
  user: string | null;
}

const AuthContext = React.createContext<AuthContext | null>(null);

const key = 'tanstack.auth.user';

function getStoredUser() {
  return localStorage.getItem(key);
}

function setStoredUser(user: string | null) {
  if (user) {
    localStorage.setItem(key, user);
  } else {
    localStorage.removeItem(key);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(getStoredUser());
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(
    Boolean(localStorage.getItem(ACCESS_TOKEN)),
  );
  const { login: loginMutate } = useLoginMutation();

  const logout = React.useCallback(() => {
    setStoredUser(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }, []);

  const login = React.useCallback(
    async (username: string) => {
      setStoredUser(username);
      setUser(username);
      await loginMutate();
      setIsAuthenticated(true);
    },
    [loginMutate],
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
