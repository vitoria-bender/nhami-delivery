import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://apifakedelivery.vercel.app/users')
      .then(res => {
        if (!res.ok) throw new Error('Falha ao buscar usuários');
        return res.json();
      })
      .then(setUsers)
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <Layout>
      <div class="space-y-6">
        <h1 class="text-2xl font-bold">Usuários</h1>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id} class="block">
              <div class="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow">
                <h2 class="text-xl font-semibold mb-2">{user.name}</h2>
                <p class="text-sm text-gray-600">{user.email}</p>
                <p class="text-sm text-gray-600">{user.phone}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
