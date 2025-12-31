interface CodeBlockProps {
  code: string
  description?: string
}

export default function CodeBlock({ code, description }: CodeBlockProps) {
  // Decodifica entidades HTML para exibição correta
  const decodedCode = code
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")

  return (
    <div className="my-4">
      <div className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 overflow-x-auto">
        <pre className="text-sm text-zinc-100 font-mono whitespace-pre">
          <code>{decodedCode}</code>
        </pre>
      </div>
      {description && (
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  )
}

