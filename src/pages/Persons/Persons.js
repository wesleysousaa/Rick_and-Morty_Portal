import React, { useEffect, useState } from 'react'
import styles from './Persons.module.css'

// Hooks
import { useFetch } from '../../hooks/useFetch'

// Components
import Card from '../../components/Card/Card'

import loadingIcon from '../../assets/loading.png'

const Persons = () => {

  const [data, setData] = useState()
  const [isEnd, setIsEnd] = useState(false)

  const { fetchCharacters, loading } = useFetch()

  useEffect(() => {
    async function getData() {
      if (!data) {
        setData(await fetchCharacters())
      } else {
        const arr = data.results
        let newPage = await fetchCharacters(data.info.next)
        let arr2 = arr.concat(newPage.results)
        newPage.results = arr2
        setData(newPage)
      }
    }
    getData()

  }, [isEnd])

  function handleScroll(e) {
    let scroll = e
    setIsEnd(scroll.scrollHeight - scroll.scrollTop === scroll.offsetHeight)
  }

  async function handleSearch(value) {
    setData(await fetchCharacters(`https://rickandmortyapi.com/api/character/?name=${value}`))
  }



  return (
    <>
      <input
        className={styles.search}
        placeholder='Pesquisar'
        type="text"
        name="pesquisar"
        id="pesquisar"
        onChange={(e) => handleSearch(e.target.value)} />

      {loading && <img className={styles.loading} src={loadingIcon} alt='Loading' />}

      <div className={styles.container} id='container' onScroll={(e) => handleScroll(e.target)}>
        {data && data.results ? (data.results.map((c, k) => (
          <Card character={c} key={k} />
        ))) : (<h1 className={styles.notFound}>Nenhum resultado encontrado</h1>)}
      </div>
    </>
  )
}

export default Persons