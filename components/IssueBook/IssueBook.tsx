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
const IssueBook = () => {
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
  const handleAddIssueBook = () => {
    router.push('/addissuebook')
  }
  const data = [
    ['Book 1', 'SSN123', '2022-01-12', '14:30', '$0.50', 'book1.jpg'],
    ['Book 2', 'SSN456', '2022-01-13', '15:45', '$0.75', 'book2.jpg'],
    ['Book 3', 'SSN789', '2022-01-14', '16:30', '$1.00', 'book3.jpg'],
    ['Book 4', 'SSN012', '2022-01-15', '17:15', '$1.25', 'book4.jpg'],
    ['Book 5', 'SSN345', '2022-01-16', '18:00', '$1.50', 'book5.jpg'],
    ['Book 6', 'SSN678', '2022-01-17', '18:45', '$1.75', 'book6.jpg'],
    ['Book 7', 'SSN901', '2022-01-18', '19:30', '$2.00', 'book7.jpg'],
    ['Book 8', 'SSN234', '2022-01-19', '20:15', '$2.25', 'book8.jpg'],
    ['Book 9', 'SSN567', '2022-01-20', '21:00', '$2.50', 'book9.jpg'],
    ['Book 10', 'SSN890', '2022-01-21', '21:45', '$2.75', 'book10.jpg'],
    ['Book 11', 'SSN111', '2022-01-22', '22:30', '$3.00', 'book11.jpg'],
    ['Book 12', 'SSN222', '2022-01-23', '23:15', '$3.25', 'book12.jpg'],
    ['Book 13', 'SSN333', '2022-01-24', '00:00', '$3.50', 'book13.jpg'],
    ['Book 14', 'SSN444', '2022-01-25', '00:45', '$3.75', 'book14.jpg'],
    ['Book 15', 'SSN555', '2022-01-26', '01:30', '$4.00', 'book15.jpg'],
    ['Book 16', 'SSN666', '2022-01-27', '02:15', '$4.25', 'book16.jpg'],
    ['Book 17', 'SSN777', '2022-01-28', '03:00', '$4.50', 'book17.jpg'],
    ['Book 18', 'SSN888', '2022-01-29', '03:45', '$4.75', 'book18.jpg'],
    ['Book 19', 'SSN999', '2022-01-30', '04:30', '$5.00', 'book19.jpg'],
    ['Book 20', 'SSN000', '2022-01-31', '05:15', '$5.25', 'book20.jpg'],
  ]

  const columns = [
    {
      name: 'BookName',
      label: 'Book Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'BookSSN',
      label: 'Book SSN',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Date',
      label: 'Date',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Time',
      label: 'Time',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'FinePerDay',
      label: 'Fine Per Day',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Pictures',
      label: 'Pictures',
      options: {
        filter: false, // Assuming pictures are not meant to be filtered
        sort: false, // Assuming pictures are not meant to be sorted
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
                  <MenuItem onClick={handleAddIssueBook}>
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
      <Button type='button' onClick={handleAddIssueBook}>
        + Issue Book
      </Button>
    )
  }

  const options = {
    filterType: 'checkbox' as const,
    customToolbar: HeaderElements,
  }
  return (
    <>
      <Box>
        <div className='mt-7 text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-center font-russoone font-normal'>
          Issue books
        </div>
        <MUIDataTable
          title={'Issue Books Information'}
          data={data}
          columns={columns}
          options={options}
        />
      </Box>
    </>
  )
}

export default IssueBook
