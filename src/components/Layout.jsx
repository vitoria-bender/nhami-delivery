import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

export function Layout({ children }) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div class="min-h-screen bg-gray-100">
      <header class="bg-white shadow">
        <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <Link 
                to="/"
                class="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600"
              >
                <span class="font-bold text-xl">Nhami</span>
              </Link>
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/users"
                  class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Usuários
                </Link>
                <Link
                  to="/restaurants" 
                  class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Restaurantes
                </Link>
                <Link
                  to="/foods"
                  class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Comidas
                </Link>
              </div>
            </div>
            <div class="flex items-center">
              {user ? (
                <div class="flex items-center space-x-4">
                  <span class="text-sm font-medium text-gray-900">Bem-vindo, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    class="px-3 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  class="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Entrar
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main class="container mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
