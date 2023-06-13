import Link from 'next/link'
import { HeartIcon, MenuIcon } from "@/app/icons"
import './globals.css'

export const metadata = {
  title: 'Hour of Solution',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-primary text-white p-5">
          <div className="container flex items-center justify-between">
            <span className='text-xl'>Logo ipsum</span>

            <div className="flex items-center space-x-5">
              <Link href="/" className="bg-white rounded-[56px] py-2 px-4 flex items-center space-x-3">
                <span className="text-black text-[15px]">Donate</span>
                <span className="heart-animation">
                  <HeartIcon />
                </span>
              </Link>

              <button>
                <MenuIcon />
              </button>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border border-red-500">
          Footer
        </footer>
      </body>
    </html>
  )
}
