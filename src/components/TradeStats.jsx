function TradeStats({ trades }) {
  const totalInvested = trades.reduce((sum, trade) => sum + trade.buyPrice, 0)
  const totalProfit = trades.reduce((sum, trade) => sum + (trade.sellPrice - trade.buyPrice), 0)
  const totalProfitPercent = totalInvested > 0 ? ((totalProfit / totalInvested) * 100).toFixed(2) : 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-300 text-sm mb-1">Total Investido</p>
            <p className="text-2xl font-bold text-white">R$ {totalInvested.toFixed(2)}</p>
          </div>
          <div className="text-4xl">💰</div>
        </div>
      </div>

      <div className={`bg-gradient-to-br ${totalProfit >= 0 ? 'from-green-500/20 to-green-600/20' : 'from-red-500/20 to-red-600/20'} backdrop-blur-lg rounded-xl p-6 border ${totalProfit >= 0 ? 'border-green-500/30' : 'border-red-500/30'}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-300 text-sm mb-1">Total de Lucro</p>
            <p className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              R$ {totalProfit.toFixed(2)}
            </p>
          </div>
          <div className="text-4xl">{totalProfit >= 0 ? '📈' : '📉'}</div>
        </div>
      </div>

      <div className={`bg-gradient-to-br ${totalProfitPercent >= 0 ? 'from-purple-500/20 to-purple-600/20' : 'from-orange-500/20 to-orange-600/20'} backdrop-blur-lg rounded-xl p-6 border ${totalProfitPercent >= 0 ? 'border-purple-500/30' : 'border-orange-500/30'}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-300 text-sm mb-1">% de Lucro</p>
            <p className={`text-2xl font-bold ${totalProfitPercent >= 0 ? 'text-purple-400' : 'text-orange-400'}`}>
              {totalProfitPercent >= 0 ? '+' : ''}{totalProfitPercent}%
            </p>
          </div>
          <div className="text-4xl">📊</div>
        </div>
      </div>
    </div>
  )
}

export default TradeStats

