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
        <Header title="GiveLotus Vietnam" />
        <p className="description">
          Welcome to GiveLotus2VN Website!
        </p>
      </main>

      <Footer />
    </div>
  )
}
