import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Groups2Icon from '@mui/icons-material/Groups2'
import { useRouter } from 'next/navigation'
const drawerWidth = 240

const Sidebar = () => {
  const router = useRouter()
  const handleSiderNavigation = (itemText: string) => {
    console.log('The item text is:', itemText)
    if (itemText == 'Dashboard') {
      router.push('/')
    } else if (itemText === 'Books') {
      router.push('/booklist')
    } else if (itemText === 'About Us') {
      router.push('/aboutus')
    }
  }
  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          Top: '100px',
          //   zIndex: 2,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {/* {['Dashboard', 'Books', 'Members'].map((text, index) => ( */}
            <ListItem key='Dashboard' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Dashboard')}>
                <ListItemIcon>
                  <DashboardIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Books' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Books')}>
                <ListItemIcon>
                  <LibraryBooksIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Books' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Members' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Members')}>
                <ListItemIcon>
                  <Groups2Icon />{' '}
                </ListItemIcon>
                <ListItemText primary='Members' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem key='Issue Book' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Issue Book')}>
                <ListItemIcon>
                  <LibraryBooksIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Issue Book' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Sidebar
