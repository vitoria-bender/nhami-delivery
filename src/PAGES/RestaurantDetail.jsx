import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from './components/Layout';

export function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/restaurants/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Falha ao buscar restaurante');
        return res.json();
      })
      .then(setRestaurant)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!restaurant) {
    return <div>Carregando...</div>;
  }

  return (
    <Layout>
      <div class="bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold mb-4">{restaurant.name}</h1>
        <div class="space-y-2">
          <p><strong class="font-medium">Cozinha:</strong> {restaurant.cuisine}</p>
          <p><strong class="font-medium">Endereço:</strong> {restaurant.address}</p>
          <p><strong class="font-medium">Avaliação:</strong> {restaurant.rating}/5</p>
          <p><strong class="font-medium">Tempo de Entrega:</strong> {restaurant.deliveryTime} minutos</p>
        </div>
      </div>
    </Layout>
  );
}
