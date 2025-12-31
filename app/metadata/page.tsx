import Navigation from '@/components/Navigation'
import ExampleCard from '@/components/ExampleCard'
import CodeBlock from '@/components/CodeBlock'

export default function MetadataPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Metadata & SEO</h1>

        <ExampleCard
          title="1. Metadata Estático"
          description="Defina metadata estático exportando um objeto metadata"
        >
          <CodeBlock
            code={`import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page',
  description: 'This is my page',
  keywords: ['nextjs', 'react'],
}

export default function Page() {
  return &lt;h1&gt;My Page&lt;/h1&gt;
}`}
            description="Metadata estático é definido uma vez e usado para todas as requisições"
          />
        </ExampleCard>

        <ExampleCard
          title="2. Metadata Dinâmico"
          description="Use generateMetadata para criar metadata baseado em dados dinâmicos"
        >
          <CodeBlock
            code={`import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise&lt;Metadata&gt; {
  const product = await fetchProduct(params.id)
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await fetchProduct(params.id)
  return &lt;div&gt;{product.name}&lt;/div&gt;
}`}
            description="generateMetadata permite criar metadata baseado em parâmetros ou dados buscados"
          />
        </ExampleCard>

        <ExampleCard
          title="3. Open Graph e Twitter Cards"
          description="Configure metadata para redes sociais"
        >
          <CodeBlock
            code={`export const metadata: Metadata = {
  openGraph: {
    title: 'My Page',
    description: 'Description',
    url: 'https://example.com',
    siteName: 'My Site',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Page',
    description: 'Description',
    images: ['/twitter-image.jpg'],
  },
}`}
            description="Open Graph e Twitter Cards melhoram a aparência quando compartilhado em redes sociais"
          />
        </ExampleCard>

        <ExampleCard
          title="4. Robots e Sitemap"
          description="Configure robots.txt e sitemap.xml"
        >
          <CodeBlock
            code={`// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://example.com/sitemap.xml',
  }
}

// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://example.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}`}
            description="robots.ts e sitemap.ts são gerados automaticamente pelo Next.js"
          />
        </ExampleCard>

        <ExampleCard
          title="5. Viewport e Icons"
          description="Configure viewport e ícones da aplicação"
        >
          <CodeBlock
            code={`// app/layout.tsx
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
}

// Ou use arquivos estáticos:
// app/icon.png, app/icon.svg, app/apple-icon.png
// app/opengraph-image.png, app/twitter-image.png`}
            description="Viewport e ícones podem ser configurados via metadata ou arquivos estáticos"
          />
        </ExampleCard>
      </main>
    </div>
  )
}


