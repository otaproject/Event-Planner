import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Shield, Calendar, Users, Settings, Home } from 'lucide-react'

// Componenti delle pagine
const Dashboard = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Eventi Attivi</h3>
        <p className="text-3xl font-bold text-green-600">12</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Operatori in Servizio</h3>
        <p className="text-3xl font-bold text-blue-600">28</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Turni Oggi</h3>
        <p className="text-3xl font-bold text-orange-600">15</p>
      </div>
    </div>
  </div>
)

const Eventi = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Gestione Eventi</h1>
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Lista Eventi</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-green-600 pl-4 py-2">
          <h3 className="font-semibold">Concerto Arena</h3>
          <p className="text-gray-600">Data: 15 Gennaio 2025 - Operatori: 8</p>
        </div>
        <div className="border-l-4 border-blue-600 pl-4 py-2">
          <h3 className="font-semibold">Fiera del Libro</h3>
          <p className="text-gray-600">Data: 20 Gennaio 2025 - Operatori: 5</p>
        </div>
      </div>
    </div>
  </div>
)

const Turni = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Pianificazione Turni</h1>
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Turni della Settimana</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold text-green-700">Turno Mattina</h3>
          <p className="text-gray-600">06:00 - 14:00</p>
          <p className="text-sm text-gray-500">Operatori assegnati: 6</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold text-blue-700">Turno Sera</h3>
          <p className="text-gray-600">14:00 - 22:00</p>
          <p className="text-sm text-gray-500">Operatori assegnati: 8</p>
        </div>
      </div>
    </div>
  </div>
)

const Operatori = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Gestione Operatori</h1>
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Lista Operatori</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <h3 className="font-semibold">Mario Rossi</h3>
            <p className="text-gray-600">Operatore Senior - Disponibile</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Attivo</span>
        </div>
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <h3 className="font-semibold">Giulia Bianchi</h3>
            <p className="text-gray-600">Operatore Junior - In servizio</p>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">In Servizio</span>
        </div>
      </div>
    </div>
  </div>
)

const Impostazioni = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Impostazioni</h1>
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Configurazione Sistema</h2>
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-semibold mb-2">Notifiche</h3>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            <span>Abilita notifiche email</span>
          </label>
        </div>
        <div className="border-b pb-4">
          <h3 className="font-semibold mb-2">Orari di Lavoro</h3>
          <p className="text-gray-600">Configura gli orari standard dei turni</p>
        </div>
      </div>
    </div>
  </div>
)

// Componente Sidebar
const Sidebar = () => {
  const location = useLocation()
  
  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/eventi', icon: Calendar, label: 'Eventi' },
    { path: '/turni', icon: Shield, label: 'Turni' },
    { path: '/operatori', icon: Users, label: 'Operatori' },
    { path: '/impostazioni', icon: Settings, label: 'Impostazioni' },
  ]

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-green-400">SecurManager</h2>
        <p className="text-gray-400 text-sm">Gestionale Sicurezza</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/eventi" element={<Eventi />} />
            <Route path="/turni" element={<Turni />} />
            <Route path="/operatori" element={<Operatori />} />
            <Route path="/impostazioni" element={<Impostazioni />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App