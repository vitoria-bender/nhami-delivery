import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Layout } from './components/Layout';

export function Home() {
  const { user } = useAuth();

  return (
    <Layout>
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Bem-vindo ao Nhami</h1>
        {user ? (
          <p class="text-xl">Olá, {user.name}! Pronto para pedir comida?</p>
        ) : (
          <p class="text-xl">Por favor, faça login para começar a pedir no Nhami.</p>
        )}
      </div>
    </Layout>
  );
}
