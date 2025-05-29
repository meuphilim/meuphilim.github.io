#!/bin/bash

echo "🔍 VERIFICAÇÃO FINAL - ESTRUTURA GITHUB PAGES"
echo "=============================================="

# Diretório do projeto
PROJECT_DIR="/app/github-pages-structure"

echo ""
echo "📂 Verificando estrutura de arquivos..."

# Arquivos obrigatórios
FILES=(
    "package.json"
    "src/App.js"
    "src/App.css"
    "src/index.js"
    "public/index.html"
    "public/manifest.json"
    "public/robots.txt"
    ".github/workflows/deploy.yml"
    ".gitignore"
    "README.md"
    "tailwind.config.js"
    "postcss.config.js"
)

for file in "${FILES[@]}"; do
    if [ -f "$PROJECT_DIR/$file" ]; then
        echo "   ✅ $file"
    else
        echo "   ❌ $file - FALTANDO"
    fi
done

echo ""
echo "🔧 Verificando configurações..."

# Verificar package.json
if grep -q "homepage.*meuphilim.github.io" "$PROJECT_DIR/package.json"; then
    echo "   ✅ Homepage configurada corretamente"
else
    echo "   ❌ Homepage não configurada"
fi

if grep -q "deploy.*gh-pages" "$PROJECT_DIR/package.json"; then
    echo "   ✅ Script de deploy configurado"
else
    echo "   ❌ Script de deploy não configurado"
fi

# Verificar workflow
if [ -f "$PROJECT_DIR/.github/workflows/deploy.yml" ]; then
    echo "   ✅ GitHub Actions workflow configurado"
else
    echo "   ❌ GitHub Actions workflow não encontrado"
fi

echo ""
echo "📦 Testando build..."
cd "$PROJECT_DIR"

if npm run build > /dev/null 2>&1; then
    echo "   ✅ Build executado com sucesso"
    
    # Verificar se pasta build foi criada
    if [ -d "build" ]; then
        echo "   ✅ Pasta build criada"
        
        # Verificar arquivos essenciais no build
        if [ -f "build/index.html" ] && [ -f "build/static/js/main."*.js ] && [ -f "build/static/css/main."*.css ]; then
            echo "   ✅ Arquivos essenciais no build presentes"
        else
            echo "   ⚠️  Alguns arquivos podem estar faltando no build"
        fi
    else
        echo "   ❌ Pasta build não foi criada"
    fi
else
    echo "   ❌ Erro no build"
fi

echo ""
echo "📊 Estatísticas do projeto..."
echo "   📁 Linhas de código: $(find src -name "*.js" -o -name "*.css" | xargs wc -l | tail -1)"
echo "   📦 Dependências: $(grep -c '"' package.json | head -1)"
echo "   🗂️  Tamanho da pasta build: $(du -sh build 2>/dev/null | cut -f1 || echo 'N/A')"

echo ""
echo "🎯 RESUMO DA VERIFICAÇÃO"
echo "======================="

if [ -f "$PROJECT_DIR/package.json" ] && [ -f "$PROJECT_DIR/.github/workflows/deploy.yml" ] && [ -d "$PROJECT_DIR/build" ]; then
    echo "✅ PROJETO PRONTO PARA GITHUB PAGES!"
    echo ""
    echo "📋 PRÓXIMOS PASSOS:"
    echo "1. Copie todos os arquivos de $PROJECT_DIR para seu repositório meuphilim.github.io"
    echo "2. Faça push para o GitHub"
    echo "3. Ative GitHub Pages nas configurações do repositório"
    echo "4. O deploy será automático via GitHub Actions"
    echo ""
    echo "🌐 Seu site estará disponível em: https://meuphilim.github.io"
else
    echo "❌ Projeto precisa de ajustes antes do deploy"
fi

echo ""
echo "📦 Criando arquivo tar.gz para download..."
cd /app
tar -czf portfolio-github-pages-final.tar.gz -C github-pages-structure .
echo "✅ Arquivo criado: /app/portfolio-github-pages-final.tar.gz"