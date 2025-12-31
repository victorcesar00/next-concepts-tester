'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/routing', label: 'Routing' },
  { path: '/server-components', label: 'Server Components' },
  { path: '/data-fetching', label: 'Data Fetching' },
  { path: '/metadata', label: 'Metadata & SEO' },
  { path: '/middleware', label: 'Middleware' },
  { path: '/api-routes', label: 'API Routes' },
  { path: '/optimization', label: 'Optimization' },
  { path: '/advanced', label: 'Advanced' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-foreground">
                Next.js Guide
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-b-2 border-zinc-900 dark:border-zinc-100 text-foreground'
                        : 'text-foreground hover:text-zinc-600 dark:hover:text-zinc-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

