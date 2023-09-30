import './globals.css'
import {Providers} from './providers';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light' styles={{colorScheme: 'light'}}>
      <body className=' bg-cyan-100 dark:bg-slate-800'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
