import { useState, useEffect } from 'react'

function TradeItem({ trade, index, isEditing, onEdit, onDelete, onStartEdit, onCancelEdit, onFinishEdit }) {
  const [editData, setEditData] = useState(trade)

  useEffect(() => {
    setEditData(trade)
  }, [trade])

  const profit = trade.sellPrice - trade.buyPrice
  const profitPercent = ((profit / trade.buyPrice) * 100).toFixed(2)
  const isPositive = profit >= 0

  const handleSave = () => {
    onEdit(trade.id, editData)
    onFinishEdit()
  }

  if (isEditing) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 space-y-3">
        <input
          type="text"
          value={editData.itemName}
          onChange={(e) => setEditData({ ...editData, itemName: e.target.value })}
          className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Nome do item"
        />
        <div className="grid grid-cols-3 gap-2">
          <input
            type="number"
            value={editData.marketPrice}
            onChange={(e) => setEditData({ ...editData, marketPrice: parseFloat(e.target.value) })}
            className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Mercado"
          />
          <input
            type="number"
            value={editData.buyPrice}
            onChange={(e) => setEditData({ ...editData, buyPrice: parseFloat(e.target.value) })}
            className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Comprado"
          />
          <input
            type="number"
            value={editData.sellPrice}
            onChange={(e) => setEditData({ ...editData, sellPrice: parseFloat(e.target.value) })}
            className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Vendido"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Salvar
          </button>
          <button
            onClick={onCancelEdit}
            className="flex-1 py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Cancelar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border transition-all duration-200 hover:bg-white/10 ${
      isPositive ? 'border-green-500/30 hover:border-green-500/50' : 'border-red-500/30 hover:border-red-500/50'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
            isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            #{index + 1}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{trade.itemName}</h3>
            <p className="text-gray-400 text-sm">
              {new Date(trade.createdAt).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onStartEdit}
            className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition"
          >
            ✏️ Editar
          </button>
          <button
            onClick={() => onDelete(trade.id)}
            className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition"
          >
            🗑️
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-gray-400 text-xs mb-1">Mercado</p>
          <p className="text-white font-semibold">R$ {trade.marketPrice.toFixed(2)}</p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-gray-400 text-xs mb-1">Comprado</p>
          <p className="text-white font-semibold">R$ {trade.buyPrice.toFixed(2)}</p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-gray-400 text-xs mb-1">Vendido</p>
          <p className="text-white font-semibold">R$ {trade.sellPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/10">
        <div>
          <p className="text-gray-400 text-xs mb-1">Lucro</p>
          <p className={`font-bold text-lg ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}>
            {isPositive ? '+' : ''}R$ {profit.toFixed(2)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-xs mb-1">Porcentagem</p>
          <p className={`font-bold text-lg ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}>
            {isPositive ? '+' : ''}{profitPercent}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default TradeItem

