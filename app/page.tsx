import Link from 'next/link'
import Navigation from '@/components/Navigation'

const sections = [
  {
    path: '/routing',
    title: 'Routing',
    description: 'Learn Next.js App Router: file-based routing, dynamic routes, and navigation'
  },
  {
    path: '/server-components',
    title: 'Server Components',
    description: 'Understand Server Components vs Client Components and when to use each'
  },
  {
    path: '/data-fetching',
    title: 'Data Fetching',
    description: 'Server Actions, fetch API, and different data fetching strategies in Next.js'
  },
  {
    path: '/metadata',
    title: 'Metadata & SEO',
    description: 'Configure metadata, SEO optimization, and dynamic metadata generation'
  },
  {
    path: '/middleware',
    title: 'Middleware',
    description: 'Request interception, authentication, and route protection with middleware'
  },
  {
    path: '/api-routes',
    title: 'API Routes',
    description: 'Create API endpoints using Route Handlers in the App Router'
  },
  {
    path: '/optimization',
    title: 'Optimization',
    description: 'Image optimization, font optimization, and performance best practices'
  },
  {
    path: '/advanced',
    title: 'Advanced Features',
    description: 'Caching, streaming, error handling, and other advanced Next.js features'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Next.js - Complete Educational Guide
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Learn all Next.js concepts and features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.path}
              href={section.path}
              className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-foreground">
                {section.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {section.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Sobre Este Guia
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            Este guia foi criado para demonstrar todos os recursos e conceitos do Next.js.
            Cada seção contém exemplos práticos e interativos que você pode experimentar.
          </p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
            <li>Roteamento baseado em arquivos (App Router)</li>
            <li>Server Components e Client Components</li>
            <li>Estratégias de busca de dados</li>
            <li>Metadata e otimização SEO</li>
            <li>Middleware e interceptação de requisições</li>
            <li>API Routes e Route Handlers</li>
            <li>Otimização de imagens e fontes</li>
            <li>Recursos avançados e melhores práticas</li>
          </ul>
        </div>
      </main>
    </div>
  )
}


