'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 fixed left-0 top-16 bottom-0 bg-black/20 backdrop-blur-lg border-r border-white/10">
      <nav className="p-4">
        <ul className="space-y-2">
          {[
            { href: '/service', label: 'サービス' },
            { href: '/vision', label: 'ビジョン' },
            { href: '/faq', label: 'FAQ' },
            { href: '/contact', label: 'お問い合わせ' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'block px-4 py-2 rounded-md text-sm transition-colors',
                  pathname === href
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}