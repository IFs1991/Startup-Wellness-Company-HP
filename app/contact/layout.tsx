import * as React from 'react'

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4">
      {children}
    </div>
  )
}