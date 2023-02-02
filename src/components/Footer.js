import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px ' alignItems='center' px='40px' pt='40px'>
        <img src={Logo} alt='logo' height='90px'/>
        <Typography variant='h5' pb='40px' mt='10px'>
          Do you even lift bro?💪 <br/>Get in Shape Today!
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer