#!/bin/bash

# Scripts de desenvolvimento para o portfólio

case "$1" in
  "dev")
    echo "🚀 Iniciando ambiente de desenvolvimento..."
    npm start
    ;;
  "build")
    echo "📦 Construindo projeto para produção..."
    npm run build
    ;;
  "deploy")
    echo "🌐 Fazendo deploy para GitHub Pages..."
    npm run build
    npm run deploy
    ;;
  "test")
    echo "🧪 Executando testes..."
    npm test
    ;;
  "lint")
    echo "🔍 Verificando qualidade do código..."
    npx eslint src/
    ;;
  "format")
    echo "✨ Formatando código..."
    npx prettier --write src/
    ;;
  "analyze")
    echo "📊 Analisando bundle..."
    npm run build
    npx source-map-explorer 'build/static/js/*.js'
    ;;
  *)
    echo "📋 Scripts disponíveis:"
    echo "  ./scripts.sh dev      - Iniciar desenvolvimento"
    echo "  ./scripts.sh build    - Build para produção"
    echo "  ./scripts.sh deploy   - Deploy para GitHub Pages"
    echo "  ./scripts.sh test     - Executar testes"
    echo "  ./scripts.sh lint     - Verificar código"
    echo "  ./scripts.sh format   - Formatar código"
    echo "  ./scripts.sh analyze  - Analisar bundle"
    ;;
esac