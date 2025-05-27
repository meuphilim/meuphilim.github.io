#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Iniciando deploy para GitHub Pages..."

# Build do projeto
echo "📦 Construindo o projeto..."
npm run build

# Deploy para GitHub Pages
echo "🌐 Fazendo deploy para GitHub Pages..."
npm run deploy

echo "✅ Deploy concluído! Site disponível em: https://meuphilim.github.io"