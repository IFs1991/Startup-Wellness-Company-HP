'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Startup Wellness</h3>
            <p className="text-sm text-white/70">
              スタートアップ企業の健康経営をサポートし、
              持続可能な成長を実現します。
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/service" className="text-sm text-white/70 hover:text-white transition-colors">
                  サービス一覧
                </Link>
              </li>
              <li>
                <Link href="/service-overview" className="text-sm text-white/70 hover:text-white transition-colors">
                  サービス概要
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/vision" className="text-sm text-white/70 hover:text-white transition-colors">
                  ビジョン
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-white/70 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                  お問い合わせフォーム
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          © 2024 Startup Wellness. All rights reserved.
        </div>
      </div>
    </footer>
  )
}