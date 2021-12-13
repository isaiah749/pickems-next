import Head from 'next/head'
import Games from './components/Games'
import Header from './components/Header'
import games from './context/games.json'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header Component */}
      <header>
        <Header />
      </header>
      <main>
        {/* Games Section */}
        <div>
          <div className="title-container">
            <h2>Week 8</h2>
          </div>

          <div className="games-section-container">
            <Games />




          </div>




        </div>
      {/* Picks Section */}

      </main>
      
    </div>
  )
}
