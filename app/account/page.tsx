"use client";

import { useState, useEffect } from "react";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";

// Types pour les données
interface Subscription {
  id: string;
  userId: string;
  userEmail: string;
  planName: string;
  status: 'active' | 'canceled' | 'past_due' | 'incomplete';
  currentPeriodEnd: string;
  amount: number;
  currency: string;
  createdAt: string;
}

interface Stats {
  totalSubscriptions: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
  churnRate: number;
}

export default function AdminDashboard() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalSubscriptions: 0,
    activeSubscriptions: 0,
    monthlyRevenue: 0,
    churnRate: 0
  });
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Données mockées pour la démonstration
  useEffect(() => {
    // Simulation de chargement
    setTimeout(() => {
      setSubscriptions([
        {
          id: 'sub_1',
          userId: 'user_1',
          userEmail: 'leo.martin@email.com',
          planName: 'Pack Essentiel',
          status: 'active',
          currentPeriodEnd: '2024-02-15',
          amount: 197,
          currency: 'EUR',
          createdAt: '2023-11-15'
        },
        {
          id: 'sub_2',
          userId: 'user_2',
          userEmail: 'nadia.etienne@email.com',
          planName: 'Pack Zen',
          status: 'active',
          currentPeriodEnd: '2024-02-20',
          amount: 397,
          currency: 'EUR',
          createdAt: '2023-12-01'
        },
        {
          id: 'sub_3',
          userId: 'user_3',
          userEmail: 'sonia.toure@email.com',
          planName: 'Pack Starter',
          status: 'active',
          currentPeriodEnd: '2024-01-30',
          amount: 97,
          currency: 'EUR',
          createdAt: '2024-01-01'
        },
        {
          id: 'sub_4',
          userId: 'user_4',
          userEmail: 'client.canceled@email.com',
          planName: 'Pack Essentiel',
          status: 'canceled',
          currentPeriodEnd: '2024-01-15',
          amount: 197,
          currency: 'EUR',
          createdAt: '2023-10-15'
        }
      ]);

      setStats({
        totalSubscriptions: 4,
        activeSubscriptions: 3,
        monthlyRevenue: 691,
        churnRate: 12.5
      });

      setLoading(false);
    }, 1000);
  }, []);

  const filteredSubscriptions = subscriptions.filter(sub => 
    filterStatus === 'all' || sub.status === filterStatus
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'canceled': return 'bg-red-100 text-red-800';
      case 'past_due': return 'bg-yellow-100 text-yellow-800';
      case 'incomplete': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Actif';
      case 'canceled': return 'Annulé';
      case 'past_due': return 'En retard';
      case 'incomplete': return 'Incomplet';
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <PageBanner 
          title="Dashboard Admin"
          subtitle="Gestion des abonnements et analyse des performances"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des données...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Dashboard Admin"
        subtitle="Gestion des abonnements et analyse des performances"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Abonnements</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalSubscriptions}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Abonnements Actifs</p>
                <p className="text-2xl font-bold text-green-600">{stats.activeSubscriptions}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenus Mensuels</p>
                <p className="text-2xl font-bold text-blue-600">{stats.monthlyRevenue} €</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Taux de Désabonnement</p>
                <p className="text-2xl font-bold text-red-600">{stats.churnRate}%</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres et Actions */}
        <div className="bg-white p-6 rounded-lg shadow-lg border mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('all')}
                className="text-sm"
              >
                Tous ({subscriptions.length})
              </Button>
              <Button 
                variant={filterStatus === 'active' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('active')}
                className="text-sm"
              >
                Actifs ({subscriptions.filter(s => s.status === 'active').length})
              </Button>
              <Button 
                variant={filterStatus === 'canceled' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('canceled')}
                className="text-sm"
              >
                Annulés ({subscriptions.filter(s => s.status === 'canceled').length})
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" className="text-sm">
                📊 Exporter
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm">
                🔄 Actualiser
              </Button>
            </div>
          </div>
        </div>

        {/* Tableau des abonnements */}
        <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Montant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fin de période
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSubscriptions.map((subscription) => (
                  <tr key={subscription.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {subscription.userEmail}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {subscription.userId}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{subscription.planName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(subscription.status)}`}>
                        {getStatusText(subscription.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {subscription.amount} {subscription.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(subscription.currentPeriodEnd).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          👁️ Voir
                        </Button>
                        <Button variant="outline" size="sm">
                          ✏️ Modifier
                        </Button>
                        {subscription.status === 'active' && (
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            ❌ Annuler
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Message si aucun abonnement */}
        {filteredSubscriptions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              Aucun abonnement trouvé pour ce filtre
            </div>
          </div>
        )}
      </div>
    </div>
  );
}