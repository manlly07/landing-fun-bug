import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fun Bug',
  description: 'Welcome to funbug team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link ref='icon' href='./assets/logo.png' />
      </head> */}
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
