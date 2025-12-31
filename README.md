# Next.js - Complete Educational Guide

An educational and explanatory application that demonstrates all Next.js features and concepts, focusing on the App Router and modern functionalities.

## 🚀 Demonstrated Features

### Routing
- File-based routing
- Pages and layouts
- Dynamic routes
- Navigation with Link
- Route groups
- Parallel routes

### Server Components
- Server Components vs Client Components
- When to use each one
- Composition of Server and Client Components
- Streaming and Suspense

### Data Fetching
- Fetch in Server Components
- Cache options
- Server Actions
- use() hook
- Loading states
- Error handling

### Metadata & SEO
- Static metadata
- Dynamic metadata
- Open Graph and Twitter Cards
- Robots and Sitemap
- Viewport and Icons

### Middleware
- Authentication and route protection
- Custom headers
- Rewrite and Redirect
- Internationalization (i18n)
- Matcher config

### API Routes
- Basic Route Handlers
- HTTP methods
- Dynamic parameters
- Request and Response
- Streaming and Edge Runtime
- CORS and custom headers

### Optimization
- Image optimization
- Font optimization
- Script optimization
- Dynamic imports
- Bundle analysis
- Performance best practices

### Advanced Features
- Caching and revalidation
- Streaming and Suspense
- Error boundaries
- Route groups and parallel routes
- Intercepting routes
- Advanced Server Actions
- Advanced configurations

## 🛠️ Technologies

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Static typing
- **React 18** - UI library
- **Tailwind CSS v4** - Utility-first CSS framework

## 📦 Installation

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

## 📁 Project Structure

```
next-concepts-tester/
├── app/                    # App Router (Next.js 13+)
│   ├── routing/           # Routing page
│   ├── server-components/ # Server Components page
│   ├── data-fetching/     # Data fetching page
│   ├── metadata/          # Metadata page
│   ├── middleware/        # Middleware page
│   ├── api-routes/        # API routes page
│   ├── optimization/      # Optimization page
│   ├── advanced/          # Advanced features page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── ExampleCard.tsx    # Example card
│   └── CodeBlock.tsx      # Component to display code
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.ts
```

## 🎨 Styling

The application uses Tailwind CSS v4 with the same visual style as the Vue application, including:
- Dark mode support
- Consistent colors (zinc, blue, etc.)
- Responsive layout
- Components with subtle borders and shadows

## 📚 Navigation

The application is organized into educational sections:

1. **Home** - Overview and index
2. **Routing** - File-based routing
3. **Server Components** - Server vs Client Components
4. **Data Fetching** - Data fetching strategies
5. **Metadata & SEO** - Metadata and SEO configuration
6. **Middleware** - Request interception
7. **API Routes** - Route Handlers
8. **Optimization** - Performance optimizations
9. **Advanced** - Advanced features

## 💡 Educational Use

This application was created to:
- Learn Next.js from scratch
- Understand App Router concepts
- See practical examples of each concept
- Experiment with interactive code
- Quick reference for Next.js features

Each section contains:
- Clear explanations
- Code examples
- Interactive demonstrations when applicable
- Best practices

## 📝 License

This project is educational and can be freely used for learning.


