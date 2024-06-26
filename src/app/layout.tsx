import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { siteConfig } from '@/config/site'

import './globals.css'

import { Toaster } from 'sonner'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'text-slate-500')}>{children}</body>
      <Toaster richColors />
    </html>
  )
}
