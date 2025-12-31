# Next.js - Complete Educational Guide

Uma aplicação educacional e explicativa que demonstra todos os recursos e conceitos do Next.js, focando no App Router e nas funcionalidades modernas.

## 🚀 Recursos Demonstrados

### Routing
- File-based routing (roteamento baseado em arquivos)
- Páginas e layouts
- Rotas dinâmicas
- Navegação com Link
- Rotas de grupo
- Rotas paralelas

### Server Components
- Server Components vs Client Components
- Quando usar cada um
- Composição de Server e Client Components
- Streaming e Suspense

### Data Fetching
- Fetch em Server Components
- Opções de cache
- Server Actions
- use() hook
- Loading states
- Error handling

### Metadata & SEO
- Metadata estático
- Metadata dinâmico
- Open Graph e Twitter Cards
- Robots e Sitemap
- Viewport e Icons

### Middleware
- Autenticação e proteção de rotas
- Headers customizados
- Rewrite e Redirect
- Internacionalização (i18n)
- Matcher config

### API Routes
- Route Handlers básico
- Métodos HTTP
- Parâmetros dinâmicos
- Request e Response
- Streaming e Edge Runtime
- CORS e headers customizados

### Optimization
- Image optimization
- Font optimization
- Script optimization
- Dynamic imports
- Bundle analysis
- Performance best practices

### Advanced Features
- Caching e revalidação
- Streaming e Suspense
- Error boundaries
- Route groups e parallel routes
- Intercepting routes
- Server Actions avançadas
- Configurações avançadas

## 🛠️ Tecnologias

- **Next.js 14+** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **React 18** - Biblioteca UI
- **Tailwind CSS v4** - Framework CSS utility-first

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

## 📁 Estrutura do Projeto

```
next-concepts-tester/
├── app/                    # App Router (Next.js 13+)
│   ├── routing/           # Página de roteamento
│   ├── server-components/ # Página de Server Components
│   ├── data-fetching/     # Página de data fetching
│   ├── metadata/          # Página de metadata
│   ├── middleware/        # Página de middleware
│   ├── api-routes/        # Página de API routes
│   ├── optimization/      # Página de otimização
│   ├── advanced/          # Página de recursos avançados
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Navigation.tsx     # Navegação principal
│   ├── ExampleCard.tsx    # Card para exemplos
│   └── CodeBlock.tsx      # Componente para exibir código
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.ts
```

## 🎨 Estilização

A aplicação usa Tailwind CSS v4 com o mesmo estilo visual da aplicação Vue, incluindo:
- Suporte a dark mode
- Cores consistentes (zinc, blue, etc.)
- Layout responsivo
- Componentes com bordas e sombras sutis

## 📚 Navegação

A aplicação está organizada em seções educacionais:

1. **Home** - Visão geral e índice
2. **Routing** - Roteamento baseado em arquivos
3. **Server Components** - Server vs Client Components
4. **Data Fetching** - Estratégias de busca de dados
5. **Metadata & SEO** - Configuração de metadata e SEO
6. **Middleware** - Interceptação de requisições
7. **API Routes** - Route Handlers
8. **Optimization** - Otimizações de performance
9. **Advanced** - Recursos avançados

## 💡 Uso Educacional

Esta aplicação foi criada para:
- Aprender Next.js do zero
- Entender conceitos do App Router
- Ver exemplos práticos de cada conceito
- Experimentar com código interativo
- Referência rápida para recursos do Next.js

Cada seção contém:
- Explicações claras
- Exemplos de código
- Demonstrações interativas quando aplicável
- Boas práticas

## 📝 Licença

Este projeto é educacional e pode ser usado livremente para aprendizado.


