import type { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <div className='content-wrapper'>{children}</div>
      <Footer />
    </div>
  )
}
