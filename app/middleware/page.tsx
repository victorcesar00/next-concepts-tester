import Navigation from '@/components/Navigation'
import ExampleCard from '@/components/ExampleCard'
import CodeBlock from '@/components/CodeBlock'

export default function MiddlewarePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Middleware</h1>

        <ExampleCard
          title="1. O que é Middleware"
          description="Middleware executa antes que uma requisição seja completada. Pode modificar a resposta, redirecionar, ou reescrever a requisição."
        >
          <CodeBlock
            code={`// middleware.ts (na raiz do projeto)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Executa antes de cada requisição
  return NextResponse.next()
}

export const config = {
  matcher: '/about/:path*', // Aplica apenas a rotas específicas
}`}
            description="Middleware intercepta requisições antes que sejam processadas"
          />
        </ExampleCard>

        <ExampleCard
          title="2. Autenticação e Proteção de Rotas"
          description="Use middleware para proteger rotas que requerem autenticação"
        >
          <CodeBlock
            code={`import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')
  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
}`}
            description="Middleware pode verificar autenticação e redirecionar usuários não autenticados"
          />
        </ExampleCard>

        <ExampleCard
          title="3. Headers Customizados"
          description="Adicione ou modifique headers nas requisições"
        >
          <CodeBlock
            code={`import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Adiciona header customizado
  response.headers.set('x-custom-header', 'my-value')
  response.headers.set('x-pathname', request.nextUrl.pathname)
  
  return response
}`}
            description="Headers podem ser adicionados ou modificados para todas as requisições"
          />
        </ExampleCard>

        <ExampleCard
          title="4. Rewrite e Redirect"
          description="Reescreva URLs ou redirecione requisições"
        >
          <CodeBlock
            code={`import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Redirect permanente
  if (request.nextUrl.pathname === '/old-page') {
    return NextResponse.redirect(new URL('/new-page', request.url), 301)
  }
  
  // Rewrite (URL não muda, mas conteúdo sim)
  if (request.nextUrl.pathname.startsWith('/api/v1')) {
    return NextResponse.rewrite(
      new URL(request.nextUrl.pathname.replace('/api/v1', '/api'), request.url)
    )
  }
  
  return NextResponse.next()
}`}
            description="Redirect muda a URL, Rewrite mantém a URL mas muda o conteúdo servido"
          />
        </ExampleCard>

        <ExampleCard
          title="5. Internacionalização (i18n)"
          description="Use middleware para detectar e redirecionar baseado no idioma"
        >
          <CodeBlock
            code={`import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['pt', 'en', 'es']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
  )
  
  if (pathnameHasLocale) {
    return NextResponse.next()
  }
  
  // Detecta idioma do header Accept-Language
  const locale = request.headers.get('accept-language')?.split(',')[0] || 'pt'
  
  return NextResponse.redirect(
    new URL(\`/\${locale}\${pathname}\`, request.url)
  )
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}`}
            description="Middleware pode detectar idioma e redirecionar para a versão correta"
          />
        </ExampleCard>

        <ExampleCard
          title="6. Matcher Config"
          description="Configure quais rotas o middleware deve executar"
        >
          <CodeBlock
            code={`export const config = {
  // String simples
  matcher: '/about/:path*',
  
  // Array de patterns
  matcher: ['/dashboard/:path*', '/admin/:path*'],
  
  // Excluir rotas específicas
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}`}
            description="Matcher permite controlar precisamente onde o middleware executa"
          />
        </ExampleCard>
      </main>
    </div>
  )
}


