import { useState, useEffect } from 'react'
import TradeForm from './components/TradeForm'
import TradeList from './components/TradeList'
import TradeStats from './components/TradeStats'

function App() {
  const [trades, setTrades] = useState([])

  // Carregar trades do localStorage ao montar o componente
  useEffect(() => {
    const savedTrades = localStorage.getItem('trades')
    if (savedTrades) {
      setTrades(JSON.parse(savedTrades))
    }
  }, [])

  // Salvar trades no localStorage sempre que houver mudança
  useEffect(() => {
    localStorage.setItem('trades', JSON.stringify(trades))
  }, [trades])

  const handleAddTrade = (trade) => {
    const newTrade = {
      ...trade,
      id: Date.now(),
      createdAt: new Date().toISOString()
    }
    setTrades([...trades, newTrade])
  }

  const handleDeleteTrade = (id) => {
    setTrades(trades.filter(trade => trade.id !== id))
  }

  const handleEditTrade = (id, updatedTrade) => {
    setTrades(trades.map(trade => trade.id === id ? { ...updatedTrade, id } : trade))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-2">
            🎮 TradeTrack
          </h1>
          <p className="text-purple-300 text-lg">
            Gerencie seus trades de skins do CS2
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário de Cadastro */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Novo Trade
              </h2>
              <TradeForm onSubmit={handleAddTrade} />
            </div>
          </div>

          {/* Lista de Trades e Estatísticas */}
          <div className="lg:col-span-2 space-y-6">
            <TradeStats trades={trades} />
            <TradeList 
              trades={trades} 
              onDelete={handleDeleteTrade}
              onEdit={handleEditTrade}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
