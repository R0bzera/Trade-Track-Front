import { useState } from 'react'

function TradeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    itemName: '',
    marketPrice: '',
    buyPrice: '',
    sellPrice: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const trade = {
      itemName: formData.itemName,
      marketPrice: parseFloat(formData.marketPrice),
      buyPrice: parseFloat(formData.buyPrice),
      sellPrice: parseFloat(formData.sellPrice)
    }

    onSubmit(trade)
    
    // Reset form
    setFormData({
      itemName: '',
      marketPrice: '',
      buyPrice: '',
      sellPrice: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="itemName" className="block text-sm font-medium text-gray-200 mb-2">
          Nome do Item
        </label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="Ex: AK-47 Redline"
        />
      </div>

      <div>
        <label htmlFor="marketPrice" className="block text-sm font-medium text-gray-200 mb-2">
          Preço de Mercado (R$)
        </label>
        <input
          type="number"
          id="marketPrice"
          name="marketPrice"
          value={formData.marketPrice}
          onChange={handleChange}
          required
          step="0.01"
          min="0"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="0.00"
        />
      </div>

      <div>
        <label htmlFor="buyPrice" className="block text-sm font-medium text-gray-200 mb-2">
          Preço que Paguei (R$)
        </label>
        <input
          type="number"
          id="buyPrice"
          name="buyPrice"
          value={formData.buyPrice}
          onChange={handleChange}
          required
          step="0.01"
          min="0"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="0.00"
        />
      </div>

      <div>
        <label htmlFor="sellPrice" className="block text-sm font-medium text-gray-200 mb-2">
          Preço que Foi Vendido (R$)
        </label>
        <input
          type="number"
          id="sellPrice"
          name="sellPrice"
          value={formData.sellPrice}
          onChange={handleChange}
          required
          step="0.01"
          min="0"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="0.00"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Adicionar Trade
      </button>
    </form>
  )
}

export default TradeForm

