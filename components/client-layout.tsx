'use client'

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-blue-950 text-white">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 pt-16 md:pt-20 transition-all duration-300">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}