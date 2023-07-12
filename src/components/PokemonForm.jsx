import { Button, FormControl, Input, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { addPokemon, updatePokemon } from '../Fire'

export default function PokemonForm ({ onClose, currentPokemon }) {
  const [number, setNumber] = useState(
    currentPokemon ? currentPokemon.number : ''
  )
  const [name, setName] = useState(currentPokemon ? currentPokemon.name : '')
  const [image, setImage] = useState(currentPokemon ? currentPokemon.image : '')
  const [description, setDescription] = useState(
    currentPokemon ? currentPokemon.description : ''
  )

  const handleSubmit = () => {
    let newPokemon = {
      number,
      name,
      image,
      description
    }
    if (currentPokemon) {
      newPokemon.id = currentPokemon.id
      updatePokemon(newPokemon)
    } else {
      addPokemon(newPokemon)
    }
    onClose()
  }

  return (
    <>
      <FormControl sx={{ display: 'block', my: 2 }}>
        <InputLabel htmlFor='number'>Numéro</InputLabel>
        <Input
          id='number'
          type='number'
          aria-describedby='number'
          placeholder='Le numéro du Pokémon'
          sx={{ width: '100%' }}
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </FormControl>
      <FormControl sx={{ display: 'block', my: 2 }}>
        <InputLabel htmlFor='name'>Nom</InputLabel>
        <Input
          id='name'
          aria-describedby='name'
          placeholder='Le nom du Pokémon'
          sx={{ width: '100%' }}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl sx={{ display: 'block', my: 2 }}>
        <InputLabel htmlFor='image'>Image</InputLabel>
        <Input
          id='image'
          type='url'
          aria-describedby='image'
          placeholder="L'image du Pokémon"
          sx={{ width: '100%' }}
          value={image}
          onChange={e => setImage(e.target.value)}
        />
      </FormControl>
      <FormControl sx={{ display: 'block', my: 2 }}>
        <InputLabel htmlFor='description'>Description</InputLabel>
        <Input
          id='description'
          aria-describedby='description'
          placeholder='La description du Pokémon'
          multiline
          sx={{ width: '100%' }}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </FormControl>
      <Button onClick={handleSubmit} sx={{ width: '100%' }} variant='contained'>
        Ajouter
      </Button>
    </>
  )
}
