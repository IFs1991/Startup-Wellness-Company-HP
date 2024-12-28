import * as React from 'react'

export default function ResultsLayout({
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