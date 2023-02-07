import React from 'react'
import styles from './Home.module.css'

const Home = () => {

  return (
    <div className={styles.container}>
      <iframe
        src="https://www.youtube.com/embed/6Zt15L7Gy3U"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen />
      <div className={styles.description}>
        <h1>

          <span className={styles.spanRick}>Rick</span>
          And 
          <span className={styles.spanMorty}>Morty</span>

        </h1>
        <h2>
          <span>Descrição</span>
          "Rick and Morty é uma série animada de comédia de ficção
          científica que te leva em uma jornada interdimensional
          maluca com um avô alcoólatra gênio e seu neto aparentemente
          burro, Morty. Com um humor absurdo e uma narrativa intensa,
          essa série vai mantê-lo preso a tela com suas reviravoltas inesperadas
          e personagens memoráveis. Se você está procurando por uma viagem divertida
          e emocionante através do tempo e do espaço, então Rick and Morty é a série perfeita para você!"
        </h2>
      </div>
    </div>
  )
}

export default Home