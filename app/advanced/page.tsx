import Navigation from '@/components/Navigation'
import ExampleCard from '@/components/ExampleCard'
import CodeBlock from '@/components/CodeBlock'

export default function AdvancedPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Recursos Avançados</h1>

        <ExampleCard
          title="1. Caching e Revalidação"
          description="Next.js oferece múltiplas estratégias de cache e revalidação"
        >
          <CodeBlock
            code={`// Request Memoization (cache automático)
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

// Mesma função chamada múltiplas vezes = cache
const data1 = await getData() // Fetch
const data2 = await getData() // Cache

// Data Cache (fetch cache)
const res = await fetch('https://api.example.com/data', {
  next: { revalidate: 3600 } // Revalida a cada hora
})

// Full Route Cache
export const revalidate = 3600 // Revalida toda a rota

// Revalidação sob demanda
import { revalidatePath, revalidateTag } from 'next/cache'
revalidatePath('/products')
revalidateTag('products')`}
            description="Diferentes níveis de cache para diferentes necessidades de dados"
          />
        </ExampleCard>

        <ExampleCard
          title="2. Streaming e Suspense"
          description="Streaming permite enviar conteúdo progressivamente para melhorar UX"
        >
          <CodeBlock
            code={`import { Suspense } from 'react'

export default function Page() {
  return (
    &lt;div&gt;
      &lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;
        &lt;SlowComponent /&gt;
      &lt;/Suspense&gt;
      &lt;FastContent /&gt; {/* Renderiza imediatamente */}
    &lt;/div&gt;
  )
}

async function SlowComponent() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return &lt;div&gt;Loaded!&lt;/div&gt;
}

function FastContent() {
  return &lt;div&gt;Fast content&lt;/div&gt;
}`}
            description="Suspense permite que partes rápidas da página renderizem enquanto partes lentas carregam"
          />
        </ExampleCard>

        <ExampleCard
          title="3. Error Boundaries"
          description="Trate erros de forma elegante com error.tsx e try-catch"
        >
          <CodeBlock
            code={`// app/products/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    &lt;div&gt;
      &lt;h2&gt;Something went wrong!&lt;/h2&gt;
      &lt;button onClick={() => reset()}&gt;Try again&lt;/button&gt;
    &lt;/div&gt;
  )
}

// Em Server Components
async function Component() {
  try {
    const data = await fetchData()
    return &lt;div&gt;{data}&lt;/div&gt;
  } catch (error) {
    // Trata erro ou deixa error.tsx capturar
    throw error
  }
}`}
            description="error.tsx cria Error Boundaries automáticos. Use try-catch para tratamento específico"
          />
        </ExampleCard>

        <ExampleCard
          title="4. Route Groups e Parallel Routes"
          description="Organize rotas com grupos e renderize múltiplas páginas em paralelo"
        >
          <CodeBlock
            code={`// Route Groups (não afetam URL)
app/
  (marketing)/
    about/
      page.tsx      → /about
    contact/
      page.tsx      → /contact
  (shop)/
    products/
      page.tsx      → /products

// Parallel Routes (@folder)
app/
  dashboard/
    @analytics/
      page.tsx      // Renderiza em paralelo
    @team/
      page.tsx      // Renderiza em paralelo
    layout.tsx      // Recebe ambos como props`}
            description="Grupos organizam sem mudar URLs. Parallel routes renderizam múltiplas páginas simultaneamente"
          />
        </ExampleCard>

        <ExampleCard
          title="5. Intercepting Routes"
          description="Intercepte rotas para mostrar modals ou overlays mantendo a URL"
        >
          <CodeBlock
            code={`// Intercepta /photo/123 e mostra modal
// app/@modal/(.)photo/[id]/page.tsx
export default function PhotoModal({ params }: { params: { id: string } }) {
  return (
    &lt;Modal&gt;
      &lt;Photo id={params.id} /&gt;
    &lt;/Modal&gt;
  )
}

// Rota real ainda existe
// app/photo/[id]/page.tsx
export default function PhotoPage({ params }: { params: { id: string } }) {
  return &lt;Photo id={params.id} /&gt;
}

// Padrões: (.) mesmo nível, (..) um nível acima, (..)(..) dois níveis`}
            description="Intercepting routes permitem modals e overlays mantendo navegação normal"
          />
        </ExampleCard>

        <ExampleCard
          title="6. Server Actions Avançadas"
          description="Use Server Actions para mutações complexas e progressive enhancement"
        >
          <CodeBlock
            code={`'use server'

// Server Action com validação
export async function createUser(formData: FormData) {
  const name = formData.get('name')
  
  // Validação
  if (!name || typeof name !== 'string') {
    return { error: 'Name is required' }
  }
  
  // Criação
  const user = await db.user.create({ data: { name } })
  
  // Revalidação
  revalidatePath('/users')
  
  return { success: true, user }
}

// Client Component
'use client'
import { createUser } from './actions'

export default function Form() {
  return (
    &lt;form action={createUser}&gt;
      &lt;input name="name" /&gt;
      &lt;button type="submit"&gt;Create&lt;/button&gt;
    &lt;/form&gt;
  )
}`}
            description="Server Actions funcionam mesmo com JavaScript desabilitado (progressive enhancement)"
          />
        </ExampleCard>

        <ExampleCard
          title="7. Configurações Avançadas"
          description="Configure runtime, segment config, e outras opções avançadas"
        >
          <CodeBlock
            code={`// Runtime (Edge ou Node.js)
export const runtime = 'edge' // ou 'nodejs'

// Segment Config
export const dynamic = 'force-dynamic' // ou 'force-static', 'auto'
export const dynamicParams = true // ou false
export const revalidate = 3600 // ou false
export const fetchCache = 'force-no-store' // ou 'default', 'only-cache'
export const preferredRegion = 'auto' // ou 'iad1', 'sfo1', etc.

// Metadata
export const metadata = {
  // ...
}

// Generate Static Params
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}`}
            description="Segment config permite controle fino sobre comportamento de cada rota"
          />
        </ExampleCard>
      </main>
    </div>
  )
}


