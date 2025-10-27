import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState()

  const rickAndMortyURL = "https://rickandmortyapi.com/api/character"

  const getCharacter = async () => {
    const resp = await fetch(rickAndMortyURL)
    const data = await resp.json()
    console.log(data)
    setCount(data.results)
  }

  useEffect(() => {
    getCharacter()

  }, [])

  console.log(count)

  return (
    <>
      {count.map((character, index) => {

        return (
          <p key={index} > {character.name}  </p>

        )



      }


      )}
    </>
  )
}

export default App
