import { useEffect, useState } from 'react'

function PokemonList() {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="main">
      <h1 className="title">Pokemon List</h1>

      <div className="container">
        {pokemons.map((item, index) => {

          const id = index + 1
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

          return (
            <div className="card" key={index}>
              <img src={img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonList