import type { Metadata } from 'next'
import { Overpass } from 'next/font/google'
import './globals.css'

const font = Overpass({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fancy Todo List',
  description: 'A kanban style drag and drop fancy todo list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#F5F6F8]`}>{children}</body>
    </html>
  )
}
