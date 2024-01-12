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
        background: '#242424',
        paddingLeft: { xs: '1px', sm: '55px' },
        paddingRight: { xs: '1px', md: '30px' },
      }}
      position={'static'}
    >
      <StyledToolbar>
        <SocialBox>
          <Grid sx={{ marginTop: '5px' }}>
            <img alt='AddToCartBtn' className='w-[120px] h-[60px]' src='./Images/lottery.png' />
          </Grid>
        </SocialBox>

        <Typography
          sx={{
            fontWeight: '950',
            textTransform: 'uppercase',
            fontSize: '12px',
            cursor: 'pointer',
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
