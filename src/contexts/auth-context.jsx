import React, { createContext, useContext, useState, useEffect } from 'react';

// Contexto de autenticação
const AuthContext = createContext(undefined);

// Provedor de contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Verifica se há um usuário armazenado no localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Função de login
  const login = async (email, password) => {
    try {
      const response = await fetch('https://apifakedelivery.vercel.app/users');
      const users = await response.json();
      const foundUser = users.find((u) => u.email === email);
      
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('user', JSON.stringify(foundUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};