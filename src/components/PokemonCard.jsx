import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import React from 'react'
import { deletePokemon } from '../Fire'

export default function PokemonCard ({ pokemon, onEdit }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={pokemon.image}
        title={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {pokemon.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {pokemon.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='text' color='warning' onClick={onEdit}>
          Modifier
        </Button>
        <Button
          variant='text'
          color='error'
          onClick={() => deletePokemon(pokemon)}
        >
          Supprimer
        </Button>
      </CardActions>
    </Card>
  )
}
