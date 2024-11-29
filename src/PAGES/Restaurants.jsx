import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout';

export function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://apifakedelivery.vercel.app/restaurants')
      .then(res => {
        if (!res.ok) throw new Error('Falha ao buscar restaurantes');
        return res.json();
      })
      .then(setRestaurants)
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <Layout>
      <div class="space-y-6">
        <h1 class="text-2xl font-bold">Restaurantes</h1>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} class="block">
              <div class="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow">
                <h2 class="text-xl font-semibold mb-2">{restaurant.name}</h2>
                <p class="text-sm text-gray-600">{restaurant.cuisine}</p>
                <p class="text-sm text-gray-600">{restaurant.address}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
