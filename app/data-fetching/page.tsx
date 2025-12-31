import Navigation from '@/components/Navigation'
import ExampleCard from '@/components/ExampleCard'
import CodeBlock from '@/components/CodeBlock'

export default function DataFetchingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Data Fetching no Next.js</h1>

        <ExampleCard
          title="1. Fetch em Server Components"
          description="No App Router, você pode fazer fetch diretamente em Server Components usando async/await"
        >
          <CodeBlock
            code={`// app/products/page.tsx
export default async function ProductsPage() {
  const res = await fetch('https://api.example.com/products', {
    cache: 'no-store' // ou 'force-cache', 'revalidate'
  })
  const products = await res.json()
  
  return (
    &lt;div&gt;
      {products.map(product => (
        &lt;div key={product.id}&gt;{product.name}&lt;/div&gt;
      ))}
    &lt;/div&gt;
  )
}`}
            description="fetch é estendido pelo Next.js com opções de cache e revalidação"
          />
        </ExampleCard>

        <ExampleCard
          title="2. Opções de Cache"
          description="Next.js estende fetch com opções de cache para otimizar requisições"
        >
          <CodeBlock
            code={`// Sem cache (sempre busca dados frescos)
const res = await fetch(url, { cache: 'no-store' })

// Cache estático (padrão, cache infinito)
const res = await fetch(url, { cache: 'force-cache' })

// Revalidação com tempo (ISR)
const res = await fetch(url, {
  next: { revalidate: 3600 } // revalida a cada hora
})

// Revalidação sob demanda
const res = await fetch(url, {
  next: { tags: ['products'] }
})
// Depois: revalidateTag('products')`}
            description="Diferentes estratégias de cache para diferentes necessidades"
          />
        </ExampleCard>

        <ExampleCard
          title="3. Server Actions"
          description="Server Actions permitem executar código no servidor a partir de Client Components"
        >
          <CodeBlock
            code={`// app/actions.ts
'use server'

export async function createProduct(formData: FormData) {
  const name = formData.get('name')
  // Validação e criação no servidor
  await db.products.create({ data: { name } })
  revalidatePath('/products')
}

// app/components/ProductForm.tsx
'use client'
import { createProduct } from '@/app/actions'

export default function ProductForm() {
  return (
    &lt;form action={createProduct}&gt;
      &lt;input name="name" /&gt;
      &lt;button type="submit"&gt;Create&lt;/button&gt;
    &lt;/form&gt;
  )
}`}
            description="Server Actions permitem mutações de dados sem criar API routes separadas"
          />
        </ExampleCard>

        <ExampleCard
          title="4. use() Hook (React 19)"
          description="O hook use() permite consumir Promises em Client Components"
        >
          <CodeBlock
            code={`'use client'
import { use } from 'react'

function Product({ productPromise }: { productPromise: Promise&lt;Product&gt; }) {
  const product = use(productPromise)
  
  return &lt;div&gt;{product.name}&lt;/div&gt;
}

// No Server Component
export default async function Page() {
  const productPromise = fetchProduct()
  return &lt;Product productPromise={productPromise} /&gt;
}`}
            description="use() permite passar Promises de Server Components para Client Components"
          />
        </ExampleCard>

        <ExampleCard
          title="5. Loading States"
          description="Use loading.tsx para mostrar estados de carregamento automaticamente"
        >
          <CodeBlock
            code={`// app/products/loading.tsx
export default function Loading() {
  return &lt;div&gt;Loading products...&lt;/div&gt;
}

// app/products/page.tsx
export default async function ProductsPage() {
  // O loading.tsx é mostrado automaticamente
  // enquanto esta página está carregando
  const products = await fetchProducts()
  return &lt;div&gt;{/* products */}&lt;/div&gt;
}`}
            description="loading.tsx cria um boundary de Suspense automático para a rota"
          />
        </ExampleCard>

        <ExampleCard
          title="6. Error Handling"
          description="Use error.tsx para tratar erros de forma elegante"
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
}`}
            description="error.tsx cria um Error Boundary automático para a rota"
          />
        </ExampleCard>
      </main>
    </div>
  )
}


