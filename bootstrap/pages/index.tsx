import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + Bootstrap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>

        <h1>h1. Bootstrap heading</h1>
        <h2>h2. Bootstrap heading</h2>
        <h3>h3. Bootstrap heading</h3>
        <h4>h4. Bootstrap heading</h4>
        <h5>h5. Bootstrap heading</h5>
        <h6>h6. Bootstrap heading</h6>

        <button type="button" className="btn btn-primary">Primary</button>{' '}
        <button type="button" className="btn btn-secondary">Secondary</button>{' '}
        <button type="button" className="btn btn-danger">Danger</button>
      </div>
    </>
  )
}
