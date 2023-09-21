import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { Navbar } from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>

    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
      <Toaster />
    </html>
    </AuthProvider>
  )
}
