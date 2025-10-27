import { useState } from 'react'
import TradeItem from './TradeItem'

function TradeList({ trades, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null)

  if (trades.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <p className="text-gray-300 text-lg">
            Nenhum trade cadastrado ainda
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Adicione seu primeiro trade para começar!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Meus Trades ({trades.length})
      </h2>
      <div className="space-y-3">
        {trades.map((trade, index) => (
          <TradeItem
            key={trade.id}
            trade={trade}
            index={index}
            isEditing={editingId === trade.id}
            onEdit={onEdit}
            onDelete={onDelete}
            onStartEdit={() => setEditingId(trade.id)}
            onCancelEdit={() => setEditingId(null)}
            onFinishEdit={() => setEditingId(null)}
          />
        ))}
      </div>
    </div>
  )
}

export default TradeList

