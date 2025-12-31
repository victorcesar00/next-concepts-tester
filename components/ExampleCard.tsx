interface ExampleCardProps {
  title: string
  description?: string
  children: React.ReactNode
}

export default function ExampleCard({ title, description, children }: ExampleCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
      {description && (
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          {description}
        </p>
      )}
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
        {children}
      </div>
    </div>
  )
}


