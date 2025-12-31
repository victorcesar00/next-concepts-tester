import Navigation from '@/components/Navigation'
import ExampleCard from '@/components/ExampleCard'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function RoutingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Next.js Routing</h1>

        <ExampleCard
          title="1. File-Based Routing"
          description="No Next.js App Router, o roteamento é baseado na estrutura de arquivos. Cada pasta dentro de 'app' se torna uma rota."
        >
          <CodeBlock
            code={`app/
  page.tsx          → /
  about/
    page.tsx        → /about
  blog/
    page.tsx        → /blog
    [id]/
      page.tsx      → /blog/:id (dynamic)
    [...slug]/
      page.tsx      → /blog/* (catch-all)`}
            description="A estrutura de pastas define as rotas da aplicação automaticamente"
          />
        </ExampleCard>

        <ExampleCard
          title="2. Páginas e Layouts"
          description="page.tsx define uma página, layout.tsx define um layout compartilhado"
        >
          <CodeBlock
            code={`// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    &lt;div&gt;
      &lt;nav&gt;Dashboard Nav&lt;/nav&gt;
      {children}
    &lt;/div&gt;
  )
}

// app/dashboard/page.tsx
export default function DashboardPage() {
  return &lt;h1&gt;Dashboard&lt;/h1&gt;
}`}
            description="Layouts envolvem páginas filhas e são compartilhados entre rotas"
          />
        </ExampleCard>

        <ExampleCard
          title="3. Rotas Dinâmicas"
          description="Use colchetes [] para criar rotas dinâmicas"
        >
          <CodeBlock
            code={`// app/products/[id]/page.tsx
export default function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  return &lt;h1&gt;Product {params.id}&lt;/h1&gt;
}

// app/blog/[...slug]/page.tsx (catch-all)
export default function BlogPage({
  params,
}: {
  params: { slug: string[] }
}) {
  return &lt;h1&gt;Blog: {params.slug.join('/')}&lt;/h1&gt;
}`}
            description="Rotas dinâmicas permitem capturar parâmetros da URL"
          />
        </ExampleCard>

        <ExampleCard
          title="4. Navegação com Link"
          description="Use o componente Link do Next.js para navegação client-side"
        >
          <div className="space-y-4">
            <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded">
              <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mr-4">
                Home
              </Link>
              <Link href="/routing" className="text-blue-600 dark:text-blue-400 hover:underline mr-4">
                Routing
              </Link>
              <Link href="/server-components" className="text-blue-600 dark:text-blue-400 hover:underline">
                Server Components
              </Link>
            </div>
            <CodeBlock
              code={`import Link from 'next/link'

export default function Navigation() {
  return (
    &lt;nav&gt;
      &lt;Link href="/"&gt;Home&lt;/Link&gt;
      &lt;Link href="/about"&gt;About&lt;/Link&gt;
    &lt;/nav&gt;
  )
}`}
              description="Link prefetcha automaticamente as rotas e faz navegação client-side"
            />
          </div>
        </ExampleCard>

        <ExampleCard
          title="5. Rotas de Grupo"
          description="Use parênteses () para criar grupos de rotas sem afetar a URL"
        >
          <CodeBlock
            code={`app/
  (marketing)/
    about/
      page.tsx      → /about
    contact/
      page.tsx      → /contact
  (shop)/
    products/
      page.tsx      → /products
    cart/
      page.tsx      → /cart`}
            description="Grupos permitem organizar rotas sem alterar a estrutura de URLs"
          />
        </ExampleCard>

        <ExampleCard
          title="6. Rotas Paralelas"
          description="Use @folder para criar rotas paralelas (parallel routes)"
        >
          <CodeBlock
            code={`app/
  dashboard/
    @analytics/
      page.tsx
    @team/
      page.tsx
    layout.tsx`}
            description="Rotas paralelas permitem renderizar múltiplas páginas simultaneamente"
          />
        </ExampleCard>
      </main>
    </div>
  )
}


