import './globals.css'
import {Providers} from './providers';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light' styles={{colorScheme: 'light'}}>
      <body className='  dark:bg-slate-800 flex flex-col min-h-screen'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
