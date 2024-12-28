'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'

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

  const toggleExpand = (href: string) => {
    setExpandedItems(prev =>
      prev.includes(href)
        ? prev.filter(item => item !== href)
        : [...prev, href]
    )
  }

  const isActive = (href: string) => pathname.startsWith(href)

  useEffect(() => {
    const handleMouseEnter = () => setIsExpanded(true)
    const handleMouseLeave = () => setIsExpanded(false)

    const sidebarElement = sidebarRef.current
    if (sidebarElement) {
      sidebarElement.addEventListener('mouseenter', handleMouseEnter)
      sidebarElement.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (sidebarElement) {
        sidebarElement.removeEventListener('mouseenter', handleMouseEnter)
        sidebarElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-16 left-0 h-full bg-slate-950/95 backdrop-blur-xl 
        border-r border-white/10 transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-0'} z-40 overflow-y-auto overflow-x-hidden`}
    >
      <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
        <nav className="p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`flex-1 flex items-center p-2 rounded-lg transition-colors
                      ${isActive(item.href) 
                        ? 'bg-white/10 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                  >
                    <span className="text-sm font-light tracking-wide">{item.name}</span>
                  </Link>
                  {item.subItems && isExpanded && (
                    <button
                      onClick={() => toggleExpand(item.href)}
                      className="p-2 text-white/70 hover:text-white"
                    >
                      {expandedItems.includes(item.href) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                {item.subItems && expandedItems.includes(item.href) && isExpanded && (
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
  )
}

