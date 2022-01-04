import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>bcPro Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="bcPro Foundation" />
        <p className="description">
          Welcome to bcPro Foundation Website!
        </p>
      </main>

      <Footer />
    </div>
  )
}
