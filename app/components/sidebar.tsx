'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu } from 'lucide-react'

const navigationItems = [
  {
    name: 'サービス概要',
    href: '/service',
    subItems: [
      { name: '特徴と強み', href: '/service/features' },
      { name: '導入効果', href: '/service/effects' },
    ],
  },
  {
    name: '実績・効果',
    href: '/results',
    subItems: [
      { name: '導入効果データ', href: '/results/data' },
      { name: '成長事例', href: '/results/case-studies' },
      { name: '顧客の声', href: '/results/testimonials' },
    ],
  },
  {
    name: 'ビジョン',
    href: '/vision',
    subItems: [
      { name: 'ミッション', href: '/vision/mission' },
      { name: '創業者ストーリー', href: '/vision/founder-story' },
    ],
  },
  { name: 'よくある質問', href: '/faq' },
  { name: 'お問い合わせ', href: '/contact' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [isExpanded, setIsExpanded] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const toggleExpand = (href: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setExpandedItems(prev =>
      prev.includes(href)
        ? prev.filter(item => item !== href)
        : [...prev, href]
    )
  }

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-slate-950/95 rounded-lg text-white hover:bg-slate-900"
      >
        <Menu className="w-6 h-6" />
      </button>

      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-slate-950/95 backdrop-blur-xl
          border-r border-white/10 transition-all duration-300 ease-in-out pt-16
          ${isExpanded ? 'w-64' : 'w-0'} z-40 overflow-y-auto overflow-x-hidden`}
      >
        <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
          <nav className="p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <div className="flex items-center">
                    {item.subItems ? (
                      <div
                        className={`flex-1 flex items-center p-2 rounded-lg transition-colors cursor-pointer
                          ${isActive(item.href)
                            ? 'bg-white/10 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                      >
                        <span className="text-sm font-light tracking-wide flex-1">{item.name}</span>
                        <button
                          onClick={(e) => toggleExpand(item.href, e)}
                          className="p-1 text-white/70 hover:text-white"
                        >
                          {expandedItems.includes(item.href) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex-1 flex items-center p-2 rounded-lg transition-colors
                          ${isActive(item.href)
                            ? 'bg-white/10 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                      >
                        <span className="text-sm font-light tracking-wide">{item.name}</span>
                      </Link>
                    )}
                  </div>

                  {item.subItems && expandedItems.includes(item.href) && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className={`block p-2 rounded-lg transition-colors
                              ${isActive(subItem.href)
                                ? 'bg-white/10 text-white'
                                : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                          >
                            <span className="text-sm">{subItem.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

