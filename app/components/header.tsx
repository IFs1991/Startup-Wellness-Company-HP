import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-xl z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Startup Wellness</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/service" className="hover:text-gray-300">サービス</Link></li>
            <li><Link href="/results" className="hover:text-gray-300">実績</Link></li>
            <li><Link href="/vision" className="hover:text-gray-300">ビジョン</Link></li>
            <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
            <li><Button asChild><Link href="/contact">お問い合わせ</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

