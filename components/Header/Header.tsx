import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Menu, MenuItem, styled, Grid, Toolbar, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const [open, SetOpen] = useState(false)
  // const router = usePathname()
  const router = useRouter()
  const StyledToolbar = styled(Toolbar)({
    // display: "flex",
    justifyContent: 'space-between',
    height: '88px',
  })
  const SocialBox = styled(Box)({
    display: 'flex',
    // gap: 12,
  })
  const SearchBox = styled(Box)({
    display: 'flex',
    gap: 5,
  })
  const handleLogin = () => {
    router.push('/signin')
  }

  return (
    <AppBar
      sx={{
        // zIndex: 2,
        // background: '#242424',
        background: '#121212',
        paddingLeft: { xs: '1px', sm: '55px' },
        paddingRight: { xs: '1px', md: '30px' },
      }}
      position={'fixed'}
    >
      <StyledToolbar>
        <SocialBox>
          <Grid sx={{ marginTop: '5px' }}>
            <img alt='AddToCartBtn' className='w-[100px] h-[90px] ' src='./Images/lottery.png' />
          </Grid>
        </SocialBox>

        <Typography
          sx={{
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.00938em',
            display: 'block',
          }}
          onClick={handleLogin}
        >
          Login
        </Typography>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
