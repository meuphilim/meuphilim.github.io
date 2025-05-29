#!/bin/bash

echo "🚀 Criando pacote completo para GitHub Pages..."

# Criar diretório de trabalho
mkdir -p /app/portfolio-complete

echo "📂 Copiando arquivos do projeto..."

# Copiar estrutura básica do React
cp -r /app/frontend/* /app/portfolio-complete/

# Verificar se os arquivos principais existem
echo "✅ Verificando arquivos principais..."

if [ -f "/app/portfolio-complete/package.json" ]; then
    echo "   ✓ package.json encontrado"
else
    echo "   ❌ package.json não encontrado"
fi

if [ -f "/app/portfolio-complete/src/App.js" ]; then
    echo "   ✓ App.js encontrado"
else
    echo "   ❌ App.js não encontrado"
fi

if [ -f "/app/portfolio-complete/public/index.html" ]; then
    echo "   ✓ index.html encontrado"
else
    echo "   ❌ index.html não encontrado"
fi

if [ -f "/app/portfolio-complete/public/CNAME" ]; then
    echo "   ✓ CNAME encontrado"
else
    echo "   ❌ CNAME não encontrado"
fi

echo "📋 Estrutura do projeto criada em: /app/portfolio-complete"
echo ""
echo "📦 Para usar no seu repositório GitHub Pages:"
echo "1. Copie todos os arquivos de /app/portfolio-complete para seu repositório meuphilim.github.io"
echo "2. Execute: npm install"
echo "3. Execute: npm run deploy"
echo ""
echo "🎯 Listando estrutura criada..."
ls -la /app/portfolio-complete