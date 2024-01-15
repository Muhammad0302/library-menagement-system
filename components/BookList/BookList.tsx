import { TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useRouter } from 'next/navigation'
const BookList = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  const [activeRow, setActiveRow] = useState(null)
  const handleClick = (event: any, index: any) => {
    setAnchorEl(event.currentTarget)
    setActiveRow(index)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleAddBook = () => {
    router.push('/addbook')
  }
  const data = [
    ['Book 1', 'Fiction', 'Author 1', 'Rack 1', 'Shelf 1'],
    ['Book 2', 'Non-Fiction', 'Author 2', 'Rack 2', 'Shelf 2'],
    ['Book 3', 'Mystery', 'Author 3', 'Rack 3', 'Shelf 3'],
    ['Book 4', 'Science Fiction', 'Author 4', 'Rack 4', 'Shelf 4'],
    ['Book 5', 'Biography', 'Author 5', 'Rack 5', 'Shelf 5'],
    ['Book 6', 'History', 'Author 6', 'Rack 6', 'Shelf 6'],
    ['Book 7', 'Romance', 'Author 7', 'Rack 7', 'Shelf 7'],
    ['Book 8', 'Thriller', 'Author 8', 'Rack 8', 'Shelf 8'],
    ['Book 9', 'Fantasy', 'Author 9', 'Rack 9', 'Shelf 9'],
    ['Book 10', 'Self-Help', 'Author 10', 'Rack 10', 'Shelf 10'],
    ['Book 11', 'Science', 'Author 11', 'Rack 11', 'Shelf 11'],
    ['Book 12', 'Travel', 'Author 12', 'Rack 12', 'Shelf 12'],
    ['Book 13', 'Cooking', 'Author 13', 'Rack 13', 'Shelf 13'],
    ['Book 14', 'Poetry', 'Author 14', 'Rack 14', 'Shelf 14'],
    ['Book 15', 'Business', 'Author 15', 'Rack 15', 'Shelf 15'],
    ['Book 16', 'Art', 'Author 16', 'Rack 16', 'Shelf 16'],
    ['Book 17', 'Technology', 'Author 17', 'Rack 17', 'Shelf 17'],
    ['Book 18', 'Health', 'Author 18', 'Rack 18', 'Shelf 18'],
    ['Book 19', 'Psychology', 'Author 19', 'Rack 19', 'Shelf 19'],
    ['Book 20', 'Drama', 'Author 20', 'Rack 20', 'Shelf 20'],
  ]

  const columns = [
    {
      name: 'Name',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Category',
      label: 'Category',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Author',
      label: 'Author',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Rack',
      label: 'Rack',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Shelf',
      label: 'Shelf',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Actions',
      options: {
        sort: false,
        filter: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          return (
            <>
              <Button
                style={{ paddingTop: '0px', paddingBottom: '0px' }}
                type='button'
                onClick={(e) => handleClick(e, tableMeta.rowIndex)}
              >
                <MoreVertIcon />
              </Button>
              {activeRow === tableMeta.rowIndex ? (
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleAddBook}>
                    <ModeEditOutlineOutlinedIcon /> Edit
                  </MenuItem>
                  <MenuItem
                  // onClick={() => handleDelete(tableMeta.rowData[0])}
                  >
                    <DeleteOutlineOutlinedIcon /> Delete
                  </MenuItem>
                </Menu>
              ) : (
                ''
              )}
            </>
          )
        },
      },
    },
  ]
  const HeaderElements = () => {
    return (
      <Button type='button' onClick={handleAddBook}>
        + Add Book
      </Button>
    )
  }

  const options = {
    filterType: 'checkbox' as const,
    customToolbar: HeaderElements,
  }

  return (
    <>
      {' '}
      <Box>
        <div className='mt-10 text-[20x] sm:text-[28px] md:text-[32px] lg:text-[40px] text-center font-russoone font-normal'>
          Books list
        </div>
        <MUIDataTable title={'Books Information'} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default BookList
