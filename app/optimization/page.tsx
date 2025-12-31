import Navigation from '@/components/Navigation'
import ExampleCard from '@/components/ExampleCard'
import CodeBlock from '@/components/CodeBlock'
import Image from 'next/image'

export default function OptimizationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Otimização no Next.js</h1>

        <ExampleCard
          title="1. Image Optimization"
          description="O componente Image do Next.js otimiza imagens automaticamente"
        >
          <div className="space-y-4">
            <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded">
              <Image
                src="https://nextjs.org/static/images/logo.svg"
                alt="Next.js Logo"
                width={200}
                height={200}
                className="rounded"
              />
            </div>
            <CodeBlock
              code={`import Image from 'next/image'

export default function Page() {
  return (
    &lt;Image
      src="/image.jpg"
      alt="Description"
      width={500}
      height={300}
      priority // Para imagens acima da dobra
      placeholder="blur" // Com blurDataURL
    /&gt;
  )
}`}
              description="Image component faz lazy loading, otimização de formato, e responsive images automaticamente"
            />
          </div>
        </ExampleCard>

        <ExampleCard
          title="2. Font Optimization"
          description="Next.js otimiza fontes automaticamente com next/font"
        >
          <CodeBlock
            code={`// app/layout.tsx
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  weight: ['400', '700'],
  src: './fonts/roboto.woff2'
})

export default function RootLayout({ children }) {
  return (
    &lt;html className={inter.className}&gt;
      &lt;body&gt;{children}&lt;/body&gt;
    &lt;/html&gt;
  )
}`}
            description="next/font otimiza fontes, remove layout shift, e melhora performance"
          />
        </ExampleCard>

        <ExampleCard
          title="3. Script Optimization"
          description="Use o componente Script para otimizar carregamento de scripts de terceiros"
        >
          <CodeBlock
            code={`import Script from 'next/script'

export default function Page() {
  return (
    &lt;&gt;
      {/* Carrega após interação */}
      &lt;Script
        src="https://example.com/script.js"
        strategy="lazyOnload"
      /&gt;
      
      {/* Carrega após hidratação */}
      &lt;Script
        src="https://example.com/analytics.js"
        strategy="afterInteractive"
      /&gt;
      
      {/* Carrega antes de tudo */}
      &lt;Script
        src="https://example.com/critical.js"
        strategy="beforeInteractive"
      /&gt;
    &lt;/&gt;
  )
}`}
            description="Script component permite controlar quando scripts de terceiros são carregados"
          />
        </ExampleCard>

        <ExampleCard
          title="4. Dynamic Imports"
          description="Use dynamic imports para code splitting e lazy loading de componentes"
        >
          <CodeBlock
            code={`import dynamic from 'next/dynamic'

// Lazy load com loading state
const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => &lt;p&gt;Loading...&lt;/p&gt;,
  ssr: false, // Desabilita SSR se necessário
})

// Lazy load com suspense
const LazyComponent = dynamic(() => import('@/components/Lazy'), {
  suspense: true,
})

export default function Page() {
  return (
    &lt;Suspense fallback={&lt;p&gt;Loading...&lt;/p&gt;}&gt;
      &lt;LazyComponent /&gt;
    &lt;/Suspense&gt;
  )
}`}
            description="dynamic() permite carregar componentes sob demanda, reduzindo bundle inicial"
          />
        </ExampleCard>

        <ExampleCard
          title="5. Bundle Analysis"
          description="Analise o tamanho do bundle para identificar oportunidades de otimização"
        >
          <CodeBlock
            code={`// @next/bundle-analyzer
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // sua config
})

// package.json
// "analyze": "ANALYZE=true next build"`}
            description="Bundle analyzer ajuda a identificar quais pacotes estão aumentando o bundle size"
          />
        </ExampleCard>

        <ExampleCard
          title="6. Performance Best Practices"
          description="Práticas recomendadas para melhorar performance"
        >
          <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Use Server Components:</strong> Reduz bundle do cliente</li>
              <li><strong>Otimize imagens:</strong> Use Image component, formatos modernos (WebP, AVIF)</li>
              <li><strong>Code splitting:</strong> Use dynamic imports para componentes pesados</li>
              <li><strong>Cache estratégico:</strong> Configure cache apropriado para fetch requests</li>
              <li><strong>Minimize JavaScript:</strong> Evite bibliotecas desnecessárias</li>
              <li><strong>Use Edge Runtime:</strong> Para APIs que precisam de baixa latência</li>
              <li><strong>Streaming:</strong> Use Suspense para streaming de conteúdo</li>
            </ul>
          </div>
        </ExampleCard>
      </main>
    </div>
  )
}


