import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  styled,
  Grid,
  Toolbar,
  Typography,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  Modal,
  Popover,
  List,
  ListItem,
} from '@mui/material'
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

  const [modalOpen, setModalOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
    setAnchorEl(null)
  }

  const avatarRect = anchorEl?.getBoundingClientRect()

  return (
    <AppBar
      sx={{
        // zIndex: 2,
        background: '#f23d4d',
        // background: '#ed3237 ',
        paddingLeft: { xs: '1px', sm: '55px' },
        paddingRight: { xs: '1px', md: '30px' },
      }}
      position={'fixed'}
    >
      <StyledToolbar>
        {/* <SocialBox>
          <Grid sx={{ marginTop: '5px' }}>
            <img alt='AddToCartBtn' className='w-[100px] h-[90px] ' src='./Images/lottery.png' />
          </Grid>
        </SocialBox> */}

        <div className='ml-[11.5rem] text-[20x] sm:text-[28px] md:text-[32px] lg:text-[24px] font-russoone font-normal'>
          All Star Driving School Ltd
        </div>
        {/* </Typography> */}

        <Typography />

        <Avatar src='/broken-image.jpg' onClick={handleAvatarClick} style={{ cursor: 'pointer' }} />

        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          style={{
            position: 'absolute',
            top: avatarRect?.top || 0,
            left: avatarRect?.left || 0,
          }}
        >
          <div
            style={{ transform: 'translate(-10%, 50%)' }}
            className=' bg-white border-2 rounded-lg px-4 p-1 text-black'
          >
            <h3 className=' text-base'>Options</h3>

            <p className=' text-sm cursor-pointer' onClick={handleLogin}>
              Login
            </p>
          </div>
        </Modal>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
