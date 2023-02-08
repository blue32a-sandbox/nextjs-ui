import Image from 'next/image'

export default function Sidebar() {
  return (
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
                <i className="far fa-circle nav-icon"></i>
                <p>Active Link</p>
              </a>
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Inactive Link</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
