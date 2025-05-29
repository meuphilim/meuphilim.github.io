# Portfólio Pessoal - Celso L. Cavalheiro

Este é o repositório do meu portfólio pessoal, desenvolvido em React com animações 3D e design moderno.

## 🌟 Características

- **Design Moderno**: Interface limpa e profissional com gradientes sutis
- **Elementos 3D**: Animações Three.js para um toque contemporâneo
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos GSAP baseados em scroll
- **Modais Interativos**: Detalhes completos dos projetos
- **Performance Otimizada**: Carregamento rápido e animações fluidas

## 🚀 Tecnologias Utilizadas

- **React 18**: Framework principal
- **Three.js**: Animações e elementos 3D
- **GSAP**: Animações baseadas em scroll
- **Tailwind CSS**: Estilização moderna
- **Font Awesome**: Ícones profissionais

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/meuphilim/meuphilim.github.io.git

# Navegue para o diretório
cd meuphilim.github.io

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm start
```

## 🌐 Deploy para GitHub Pages

### Configuração Inicial

1. Certifique-se de que o repositório esteja configurado como `meuphilim.github.io`
2. O arquivo `package.json` já está configurado com:
   ```json
   {
     "homepage": "https://meuphilim.github.io",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

### Deploy Automático

```bash
# Opção 1: Usando o script de deploy
./deploy.sh

# Opção 2: Comando manual
npm run deploy
```

### Deploy Manual

```bash
# 1. Build do projeto
npm run build

# 2. Deploy para GitHub Pages
npm run deploy
```

## 📂 Estrutura do Projeto

```
src/
├── App.js          # Componente principal
├── App.css         # Estilos globais
└── index.js        # Ponto de entrada

public/
├── index.html      # Template HTML
├── CNAME          # Configuração de domínio
└── .nojekyll      # Evita processamento Jekyll
```

## 🎯 Funcionalidades

### Seções do Site

1. **Header**: Navegação fixa com menu responsivo
2. **Hero**: Apresentação com elementos 3D animados
3. **Skills**: Habilidades técnicas com barras de progresso
4. **Projetos**: Showcase com modais detalhados
5. **Depoimentos**: Feedback de clientes e parceiros
6. **Contato**: Formulário e informações de contato
7. **Footer**: Links úteis e redes sociais

### Modais de Projetos

Cada projeto possui informações detalhadas:
- Tecnologias utilizadas
- Principais funcionalidades
- Desafios e soluções
- Resultados alcançados
- Duração e função no projeto

## 🔧 Configurações

### GitHub Pages

O site está configurado para deploy automático no GitHub Pages:
- **URL**: https://meuphilim.github.io
- **Branch**: gh-pages (criado automaticamente)
- **Build**: Automático via GitHub Actions

### Domínio Personalizado (Opcional)

Para usar um domínio personalizado:
1. Edite o arquivo `public/CNAME` com seu domínio
2. Configure o DNS do seu domínio para apontar para GitHub Pages

## 📱 Responsividade

O site é totalmente responsivo e testado em:
- **Desktop**: 1920x1080+
- **Tablet**: 768x1024
- **Mobile**: 390x844

## 🎨 Personalização

### Cores e Tema

As cores principais estão definidas no CSS:
```css
/* Gradiente principal */
background: linear-gradient(45deg, #3b82f6, #8b5cf6);

/* Cores das categorias */
.bg-blue-500    /* Projetos web */
.bg-purple-500  /* Dashboards */
.bg-green-500   /* FinTech */
```

### Projetos

Para adicionar novos projetos, edite o array `projectsData` em `App.js`:
```javascript
const projectsData = [
  {
    id: 4,
    title: "Novo Projeto",
    description: "Descrição do projeto...",
    // ... outras propriedades
  }
];
```

## 📈 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **3D Animations**: 60fps em dispositivos modernos

## 🤝 Contato

- **Email**: celso@exemplo.com
- **WhatsApp**: +55 (67) 99262-4818
- **GitHub**: [@meuphilim](https://github.com/meuphilim)
- **Instagram**: [@meuphilim](https://instagram.com/meuphilim)

## 📄 Licença

Este projeto é pessoal e está disponível como portfólio. Sinta-se livre para se inspirar, mas por favor, não copie diretamente o conteúdo pessoal.

---

**Desenvolvido com ❤️ por Celso L. Cavalheiro**

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
