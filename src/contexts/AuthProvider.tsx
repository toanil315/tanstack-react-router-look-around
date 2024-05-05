import { ACCESS_TOKEN, ACTIONS_ENUM, REFRESH_TOKEN } from '@/constants';
import { useLoginMutation } from '@/hooks/apis/useLoginMutation';
import { User } from '@/interfaces';
import { Subjects, ability, buildUserAbility } from '@/lib/ability';
import * as React from 'react';

export interface AuthContext {
  isAuthenticated: boolean;
  login: (username: string) => Promise<void>;
  logout: () => void;
  checkPermissions: (action: ACTIONS_ENUM, subject: Subjects) => boolean;
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

  const login = async (username: string) => {
    setStoredUser(username);
    setUser(username);
    await loginMutate();
    setIsAuthenticated(true);
    buildUserAbility({ id: Number(username) } as User);
  };

  const checkPermissions = (action: ACTIONS_ENUM, subject: Subjects) => {
    return ability.can(action, subject);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, checkPermissions }}>
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
