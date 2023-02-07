import React, { useState, useEffect } from 'react'
import styles from './Card.module.css'

// Assets
import maleIcon from '../../assets/maleicon.png'
import femaleIcon from '../../assets/femaleicona.png'

// Hooks
import { useFetch } from '../../hooks/useFetch'

const Card = ({ character }) => {

  const [isSelected, setIsSelected] = useState(false)
  const [episodes, setEpisodes] = useState([])

  const { fetchEpisodes } = useFetch()

  useEffect(() => {
    async function fetchData() {
      setEpisodes(await fetchEpisodes(character.episode))
    }
    fetchData()
  }, [])

  async function handleClickCard() {
    setIsSelected(!isSelected)
    let scroll = document.getElementById('container')
    let card
    setTimeout(() => {
      card = document.getElementById(character.id)
      let y = card.offsetTop + card.clientTop
      scroll.scroll(0, (y - 110))
      console.log("aa");

    }, 200)



  }

  return (
    <div id={character.id} onClick={(e) => handleClickCard(e)} className={isSelected ? styles.cardSelected : styles.card}>
      <div className={styles.img}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styles.descriptionGroup}>
        <div className={styles.nameGroup}>
          <h2>{character.name}</h2>
          <img className={styles.iconGenero} src={character.gender === 'Male' ? maleIcon : femaleIcon} alt='imageCharacter' />
        </div>
        <div className={styles.descriptionLeft}>
          <div className={styles.description}>
            <div className={styles.GroupsData}>
              <p>Origem</p>
              <h3>{character.origin.name === 'unknown' ? "Desconhecida" : character.origin.name}</h3>
            </div>
            <div className={styles.GroupsData}>
              <p>Espécie</p>
              <h3>{character.species}</h3>
            </div>
            <div className={styles.GroupsData}>
              <p>Ultima Aparição</p>
              <h3>{character.location.name}</h3>
            </div>
            <div className={styles.GroupsData}>
              <p>Status</p>
              <h3>{character.status === 'Alive' ? 'Vivo' : character.status === 'unknown' ? 'Desconhecido' : 'Morto'}</h3>
            </div>
          </div>
          {isSelected && (
            <div className={styles.episodes}>
              <p>Episodios</p>
              {episodes.map((e, k) => (
                <h6 key={k}>{e.episode} | {e.name}</h6>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card