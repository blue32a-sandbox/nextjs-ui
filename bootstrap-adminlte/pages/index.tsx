import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + AdminLTE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='wrapper'>
        <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
          <ul className="navbar-nav">
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">Home</a>
            </li>
          </ul>
        </nav>

        <aside className='main-sidebar sidebar-dark-primary'>
          <a href="#" className="brand-link">
            <Image src="/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" width={128} height={128} style={{ width: "auto", opacity: .8 }} />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>
          <div className='sidebar'>
            <nav className='mt-2'>
              <ul className='nav nav-pills nav-sidebar flex-column' role="menu" data-accordion="false">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-th"></i>
                    <p>Active Link</p>
                  </a>
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>Inactive Link</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <div className='content-wrapper'></div>

        <footer className="main-footer">
          <div className="float-right d-none d-sm-inline">
            float-right
          </div>
          <strong>Copyright © 2023 Next.js + AdminLTE.</strong> All rights reserved.
        </footer>
      </div>
    </>
  )
}
