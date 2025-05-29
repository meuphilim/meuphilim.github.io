# 🚀 Portfólio Pessoal - Celso L. Cavalheiro

[![Deploy to GitHub Pages](https://github.com/meuphilim/meuphilim.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/meuphilim/meuphilim.github.io/actions/workflows/deploy.yml)
[![Website Status](https://img.shields.io/website?url=https%3A//meuphilim.github.io)](https://meuphilim.github.io)

> Portfólio profissional moderno desenvolvido em React com animações 3D e design responsivo.

## 🌐 [Ver Site Ao Vivo](https://meuphilim.github.io)

---

## 🌟 Características

- **🎨 Design Moderno**: Interface limpa com gradientes sutis e animações suaves
- **🚀 React 19**: Última versão do React com performance otimizada
- **🎭 Elementos 3D**: Animações Three.js para experiência imersiva
- **📱 100% Responsivo**: Funciona perfeitamente em todos os dispositivos
- **⚡ Performance**: Carregamento rápido e animações a 60fps
- **🔍 SEO Otimizado**: Meta tags e estrutura otimizada para buscadores
- **🤖 CI/CD**: Deploy automático via GitHub Actions

## 🛠️ Tecnologias

### Frontend
- **React 19** - Framework principal
- **Three.js** - Animações e elementos 3D
- **GSAP** - Animações baseadas em scroll
- **Tailwind CSS** - Framework de estilização
- **Framer Motion** - Animações componentes

### Deploy & CI/CD
- **GitHub Pages** - Hospedagem
- **GitHub Actions** - Pipeline de deploy automático
- **NPM** - Gerenciamento de dependências

## 📂 Estrutura do Projeto

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── index.html             # Template HTML principal
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # SEO robots
│   └── .nojekyll             # GitHub Pages config
├── src/
│   ├── App.js                # Componente principal
│   ├── App.css               # Estilos globais
│   └── index.js              # Entry point
├── package.json              # Dependências e scripts
├── tailwind.config.js        # Configuração Tailwind
└── postcss.config.js         # Configuração PostCSS
```

## 🚀 Como Usar

### 1. Clone o Repositório
```bash
git clone https://github.com/meuphilim/meuphilim.github.io.git
cd meuphilim.github.io
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Execute Localmente
```bash
npm start
```
O site estará disponível em `http://localhost:3000`

### 4. Build para Produção
```bash
npm run build
```

## 🔄 Deploy Automático

### GitHub Actions
O projeto está configurado com GitHub Actions para deploy automático:

1. **Push para `main`** → Trigger automático do workflow
2. **Build do projeto** → `npm ci && npm run build`
3. **Deploy para GitHub Pages** → Upload automático dos arquivos

### Deploy Manual (Opcional)
```bash
npm run deploy
```

## 🎯 Seções do Site

### 🏠 **Hero Section**
- Apresentação pessoal com elementos 3D animados
- Call-to-actions para projetos e contato
- Background com geometrias Three.js flutuantes

### 💼 **Skills Section**
- 4 principais habilidades técnicas
- Barras de progresso animadas
- Cards com efeitos 3D no hover

### 🚀 **Projetos Section**
- 3 projetos principais com modais detalhados
- Informações completas: tecnologias, desafios, resultados
- Link direto para GitHub com todos os repositórios

### 💬 **Depoimentos Section**
- 3 depoimentos de clientes e parceiros
- Avaliações com estrelas e fotos reais
- Efeito glass nos cards

### 📞 **Contato Section**
- Formulário de contato funcional
- Informações de contato diretas
- Links para redes sociais

## 🎨 Personalização

### Cores do Tema
```css
/* Gradiente principal: Azul para Roxo */
background: linear-gradient(45deg, #3b82f6, #8b5cf6);

/* Cores das categorias */
.categoria-web { background: #3b82f6; }      /* Azul */
.categoria-dashboard { background: #8b5cf6; } /* Roxo */
.categoria-fintech { background: #10b981; }   /* Verde */
```

### Adicionando Novos Projetos
Edite o array `projectsData` em `src/App.js`:
```javascript
const projectsData = [
  {
    id: 4,
    title: "Novo Projeto",
    description: "Descrição do projeto...",
    technologies: ["React", "Node.js", "MongoDB"],
    // ... outras propriedades
  }
];
```

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Configuração Avançada

### Environment Variables
Crie um arquivo `.env.local` para variáveis de ambiente:
```env
REACT_APP_CONTACT_EMAIL=seu@email.com
REACT_APP_ANALYTICS_ID=GA_TRACKING_ID
```

### Customização do Workflow
Edite `.github/workflows/deploy.yml` para modificar o processo de deploy.

## 🐛 Troubleshooting

### Erro de Build
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro no Deploy
1. Verifique se GitHub Pages está habilitado
2. Confirme que a branch `gh-pages` existe
3. Verifique as permissões do repositório

## 📈 Analytics & SEO

### Meta Tags Otimizadas
- Open Graph para redes sociais
- Twitter Cards
- Schema.org markup

### Sitemap Automático
O build gera automaticamente:
- `sitemap.xml`
- `robots.txt`
- `manifest.json`

## 🤝 Contribuições

Embora seja um portfólio pessoal, sugestões são sempre bem-vindas!

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: celso@exemplo.com
- **WhatsApp**: [+55 (67) 99262-4818](https://wa.me/5567992624818)
- **GitHub**: [@meuphilim](https://github.com/meuphilim)
- **Instagram**: [@meuphilim](https://instagram.com/meuphilim)

---

⭐ **Se este projeto te ajudou, considere dar uma estrela no repositório!**

**Desenvolvido com ❤️ por [Celso L. Cavalheiro](https://github.com/meuphilim)**