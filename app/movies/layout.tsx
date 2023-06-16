
import '../globals.css'
import { Inter } from 'next/font/google'
import LikesProvider from './likes-provider'
export const metadata = {
    title: 'Movies',
    description: 'SWAPI movies'
}
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body className={inter.className}>
                <LikesProvider>{children}</LikesProvider>
            </body>
        </html>
    )
}
