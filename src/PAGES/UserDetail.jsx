import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from './components/Layout';

export function UserDetail() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/users/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Falha ao buscar usuário');
        return res.json();
      })
      .then(setUser)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <Layout>
      <div class="bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold mb-4">{user.name}</h1>
        <div class="space-y-2">
          <p><strong class="font-medium">Email:</strong> {user.email}</p>
          <p><strong class="font-medium">Telefone:</strong> {user.phone}</p>
          <p><strong class="font-medium">Endereço:</strong> {user.address}</p>
        </div>
      </div>
    </Layout>
  );
}
