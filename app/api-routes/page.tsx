import Navigation from '@/components/Navigation'
import ExampleCard from '@/components/ExampleCard'
import CodeBlock from '@/components/CodeBlock'

export default function ApiRoutesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">API Routes (Route Handlers)</h1>

        <ExampleCard
          title="1. Route Handlers Básico"
          description="No App Router, use route.ts para criar endpoints de API"
        >
          <CodeBlock
            code={`// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ users: [] })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ created: true, data: body })
}`}
            description="Route Handlers exportam funções nomeadas com métodos HTTP (GET, POST, etc.)"
          />
        </ExampleCard>

        <ExampleCard
          title="2. Métodos HTTP"
          description="Suporte para todos os métodos HTTP comuns"
        >
          <CodeBlock
            code={`// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'GET request' })
}

export async function POST(request: Request) {
  return NextResponse.json({ message: 'POST request' })
}

export async function PUT(request: Request) {
  return NextResponse.json({ message: 'PUT request' })
}

export async function DELETE() {
  return NextResponse.json({ message: 'DELETE request' })
}

export async function PATCH(request: Request) {
  return NextResponse.json({ message: 'PATCH request' })
}`}
            description="Cada método HTTP é uma função exportada separada"
          />
        </ExampleCard>

        <ExampleCard
          title="3. Parâmetros Dinâmicos"
          description="Acesse parâmetros de rotas dinâmicas"
        >
          <CodeBlock
            code={`// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await getUserById(params.id)
  return NextResponse.json(user)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await deleteUser(params.id)
  return NextResponse.json({ deleted: true })
}`}
            description="Parâmetros de rotas dinâmicas são passados como segundo argumento"
          />
        </ExampleCard>

        <ExampleCard
          title="4. Request e Response"
          description="Acesse headers, query params, e body da requisição"
        >
          <CodeBlock
            code={`import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Query parameters
  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page')
  
  // Headers
  const authHeader = request.headers.get('authorization')
  
  return NextResponse.json({ page, authHeader })
}

export async function POST(request: NextRequest) {
  // Body (JSON)
  const body = await request.json()
  
  // Body (FormData)
  // const formData = await request.formData()
  
  // Body (text)
  // const text = await request.text()
  
  return NextResponse.json({ received: body })
}`}
            description="NextRequest e NextResponse fornecem APIs convenientes para trabalhar com requisições"
          />
        </ExampleCard>

        <ExampleCard
          title="5. Streaming e Edge Runtime"
          description="Use streaming para respostas longas e Edge Runtime para baixa latência"
        >
          <CodeBlock
            code={`// Streaming Response
import { NextResponse } from 'next/server'

export async function GET() {
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < 10; i++) {
        controller.enqueue(encoder.encode(\`data: \${i}\\n\\n\`))
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      controller.close()
    },
  })
  
  return new Response(stream, {
    headers: { 'Content-Type': 'text/event-stream' },
  })
}

// Edge Runtime
export const runtime = 'edge' // ou 'nodejs' (padrão)`}
            description="Streaming permite enviar dados progressivamente. Edge Runtime executa em edge locations"
          />
        </ExampleCard>

        <ExampleCard
          title="6. CORS e Headers Customizados"
          description="Configure CORS e headers de resposta"
        >
          <CodeBlock
            code={`import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { data: 'example' },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}

// Ou crie um helper
function corsResponse(data: any) {
  return NextResponse.json(data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}`}
            description="Configure CORS e outros headers através do objeto de opções do NextResponse"
          />
        </ExampleCard>
      </main>
    </div>
  )
}


