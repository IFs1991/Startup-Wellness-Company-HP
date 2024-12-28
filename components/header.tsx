'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold">
            Startup Wellness
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/service" className="text-white/70 hover:text-white transition-colors">
              サービス
            </Link>
            <Link href="/vision" className="text-white/70 hover:text-white transition-colors">
              ビジョン
            </Link>
            <Link href="/faq" className="text-white/70 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" className="border-white/20 hover:border-white/40">
                お問い合わせ
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}