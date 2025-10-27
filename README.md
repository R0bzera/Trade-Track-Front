# 🎮 TradeTrack

Uma aplicação moderna para gerenciar seus trades de skins do CS2. Acompanhe seus investimentos, lucros e porcentagens de lucro por trade.

## ✨ Funcionalidades

- 📝 **Cadastro de Trades**: Registre todos os seus trades com informações detalhadas
- 💰 **Cálculo Automático**: Lucro e porcentagem calculados automaticamente
- 📊 **Estatísticas**: Acompanhe total investido, total de lucro e percentual geral
- 🎨 **Interface Moderna**: Design clean e atrativo com gradientes e animações
- 💾 **Persistência Local**: Todos os dados salvos no localStorage
- ✏️ **Edição**: Edite seus trades facilmente
- 🗑️ **Exclusão**: Remova trades que não deseja mais

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

## 📋 Campos do Formulário

- **Nome do Item**: Nome da skin/item (ex: AK-47 Redline)
- **Preço de Mercado**: Preço atual no mercado
- **Preço que Paguei**: Valor que você pagou pelo item
- **Preço que Foi Vendido**: Valor que você vendeu o item

## 📊 Dados Calculados Automaticamente

- **Lucro por Trade**: Diferença entre vendido e comprado
- **Porcentagem de Lucro**: Porcentagem de lucro por trade
- **Total Investido**: Soma de todos os valores comprados
- **Total de Lucro**: Soma de todos os lucros
- **Porcentagem Geral**: Percentual de lucro geral

## 🛠️ Tecnologias

- **React**: Framework JavaScript
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework CSS utility-first
- **LocalStorage**: Persistência de dados local

## 📝 Próximos Passos

- [ ] Integração com banco de dados
- [ ] Gráficos de evolução de lucro
- [ ] Exportar dados para CSV/Excel
- [ ] Histórico de preços
- [ ] Análise de melhores trades

## 🎨 Características Visuais

- Gradientes modernos (slate-900 → purple-900)
- Glassmorphism com backdrop-blur
- Animações suaves de transição
- Design responsivo
- Cores que indicam lucro (verde) ou prejuízo (vermelho)
- Cards com hover effects
