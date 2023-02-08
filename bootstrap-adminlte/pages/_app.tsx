import 'admin-lte/dist/css/alt/adminlte.light.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min.js" crossOrigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" crossOrigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" crossOrigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js" crossOrigin="anonymous" />
        <Script src="https://kit.fontawesome.com/cf414e7277.js" crossOrigin="anonymous" />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
