'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import ExampleCard from '@/components/ExampleCard'
import CodeBlock from '@/components/CodeBlock'

export default function ServerComponentsPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Server Components vs Client Components</h1>

        <ExampleCard
          title="1. Server Components (Padrão)"
          description="Por padrão, todos os componentes no App Router são Server Components. Eles são renderizados no servidor."
        >
          <CodeBlock
            code={`// app/products/page.tsx (Server Component)
// Não precisa de 'use client'
import { db } from '@/lib/db'

export default async function ProductsPage() {
  // Pode fazer fetch diretamente no servidor
  const products = await db.products.findMany()
  
  return (
    &lt;div&gt;
      {products.map(product => (
        &lt;div key={product.id}&gt;{product.name}&lt;/div&gt;
      ))}
    &lt;/div&gt;
  )
}`}
            description="Server Components podem fazer fetch de dados diretamente, sem useEffect ou API routes"
          />
        </ExampleCard>

        <ExampleCard
          title="2. Client Components"
          description="Use 'use client' quando precisar de interatividade, hooks do React, ou APIs do browser"
        >
          <div className="space-y-4">
            <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded">
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Contador: {count}
              </button>
            </div>
            <CodeBlock
              code={`'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    &lt;button onClick={() => setCount(count + 1)}&gt;
      Contador: {count}
    &lt;/button&gt;
  )
}`}
              description="Client Components podem usar hooks, event handlers e APIs do browser"
            />
          </div>
        </ExampleCard>

        <ExampleCard
          title="3. Quando Usar Cada Um"
          description="Server Components: dados, acesso a recursos do servidor. Client Components: interatividade, hooks, eventos"
        >
          <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <strong>Server Components:</strong>
              <ul className="list-disc list-inside mt-1 ml-4">
                <li>Fetch de dados</li>
                <li>Acesso a backends e databases</li>
                <li>Manter informações sensíveis no servidor</li>
                <li>Reduzir bundle size do cliente</li>
              </ul>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <strong>Client Components:</strong>
              <ul className="list-disc list-inside mt-1 ml-4">
                <li>Interatividade (onClick, onChange, etc.)</li>
                <li>Hooks do React (useState, useEffect, etc.)</li>
                <li>APIs do browser (localStorage, window, etc.)</li>
                <li>Componentes de terceiros que precisam de client</li>
              </ul>
            </div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="4. Composição de Server e Client Components"
          description="Você pode usar Client Components dentro de Server Components, mas não o contrário"
        >
          <CodeBlock
            code={`// app/page.tsx (Server Component)
import { db } from '@/lib/db'
import Counter from '@/components/Counter' // Client Component

export default async function HomePage() {
  const data = await db.getData() // Server-side fetch
  
  return (
    &lt;div&gt;
      &lt;h1&gt;{data.title}&lt;/h1&gt;
      &lt;Counter /&gt; {/* Client Component */}
    &lt;/div&gt;
  )
}

// components/Counter.tsx (Client Component)
'use client'
export default function Counter() {
  const [count, setCount] = useState(0)
  return &lt;button onClick={() => setCount(count + 1)}&gt;{count}&lt;/button&gt;
}`}
            description="Server Components podem importar e usar Client Components, mas não podem passar funções como props"
          />
        </ExampleCard>

        <ExampleCard
          title="5. Streaming e Suspense"
          description="Server Components podem usar Suspense para streaming de dados"
        >
          <CodeBlock
            code={`import { Suspense } from 'react'

export default function Page() {
  return (
    &lt;div&gt;
      &lt;Suspense fallback={&lt;p&gt;Loading...&lt;/p&gt;}&gt;
        &lt;SlowComponent /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  )
}

async function SlowComponent() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return &lt;p&gt;Loaded!&lt;/p&gt;
}`}
            description="Suspense permite mostrar conteúdo progressivamente enquanto dados são carregados"
          />
        </ExampleCard>
      </main>
    </div>
  )
}


