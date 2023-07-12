import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import PokemonModal from './components/PokemonModal'
import { Box, Button, CircularProgress } from '@mui/material'
import { getPokemons } from './Fire'
import PokemonCard from './components/PokemonCard'

function App () {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPokemon, setCurrentPokemon] = useState(null)

  useEffect(() => {
    getPokemons(pokemons => {
      setPokemons(pokemons)
      setLoading(false)
    })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Pokédex</h1>
        {loading && <CircularProgress />}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
          {pokemons.map(pokemon => (
            <PokemonCard
              pokemon={pokemon}
              onEdit={() => {
                setIsModalVisible(true)
                setCurrentPokemon(pokemon)
              }}
            />
          ))}
        </Box>
        <Button
          onClick={() => {
            setIsModalVisible(true)
            setCurrentPokemon(null)
          }}
          variant='contained'
        >
          Ajouter un Pokémon
        </Button>
        {isModalVisible && (
          <PokemonModal
            title={
              currentPokemon ? 'Modifier un Pokémon' : 'Ajouter un Pokémon'
            }
            onClose={() => setIsModalVisible(false)}
            visible={isModalVisible}
            currentPokemon={currentPokemon}
          />
        )}
      </header>
    </div>
  )
}

export default App
