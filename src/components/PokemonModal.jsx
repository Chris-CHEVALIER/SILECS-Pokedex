import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import PokemonForm from './PokemonForm'

export default function PokemonModal ({ title, onClose, visible, currentPokemon }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px'
  }

  return (
    <>
      <Modal
        open={visible}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {title}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <PokemonForm onClose={onClose} currentPokemon={currentPokemon} />
          </Typography>
          <Button
            sx={{ my: 2, width: '100%' }}
            onClick={onClose}
            variant='outlined'
            color='error'
          >
            Fermer
          </Button>
        </Box>
      </Modal>
    </>
  )
}
