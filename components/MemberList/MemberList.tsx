import { TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
const MemberList = () => {
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
  const data = [
    [
      'John Doe',
      'ID123456',
      'M123',
      'Jane Doe',
      '123 Main St',
      '555-1234',
      'john@example.com',
      'Bob Smith',
    ],
    [
      'Jane Smith',
      'ID789012',
      'M456',
      'John Smith',
      '456 Oak St',
      '555-5678',
      'jane@example.com',
      'Alice Johnson',
    ],
    [
      'Alice Brown',
      'ID345678',
      'F789',
      'Bob Brown',
      '789 Elm St',
      '555-7890',
      'alice@example.com',
      'Charlie Davis',
    ],
    [
      'Charlie Davis',
      'ID901234',
      'M012',
      'Alice Davis',
      '012 Pine St',
      '555-2345',
      'charlie@example.com',
      'Emma White',
    ],
    [
      'Emma White',
      'ID567890',
      'F345',
      'David White',
      '345 Cedar St',
      '555-6789',
      'emma@example.com',
      'Frank Thomas',
    ],
    [
      'Frank Thomas',
      'ID234567',
      'M678',
      'Eva Thomas',
      '678 Birch St',
      '555-0123',
      'frank@example.com',
      'Grace Miller',
    ],
    [
      'Grace Miller',
      'ID890123',
      'F901',
      'George Miller',
      '901 Walnut St',
      '555-3456',
      'grace@example.com',
      'Harry Wilson',
    ],
    [
      'Harry Wilson',
      'ID456789',
      'M234',
      'Helen Wilson',
      '234 Maple St',
      '555-7890',
      'harry@example.com',
      'Ivy Lee',
    ],
    [
      'Ivy Lee',
      'ID012345',
      'F567',
      'Isaac Lee',
      '567 Pine St',
      '555-2345',
      'ivy@example.com',
      'Jack Turner',
    ],
    [
      'Jack Turner',
      'ID678901',
      'M890',
      'Jill Turner',
      '890 Cedar St',
      '555-6789',
      'jack@example.com',
      'Katherine Hall',
    ],
    [
      'Katherine Hall',
      'ID345678',
      'F012',
      'Kevin Hall',
      '012 Birch St',
      '555-0123',
      'katherine@example.com',
      'Liam Brooks',
    ],
    [
      'Liam Brooks',
      'ID901234',
      'M345',
      'Lila Brooks',
      '345 Walnut St',
      '555-3456',
      'liam@example.com',
      'Mia Taylor',
    ],
    [
      'Mia Taylor',
      'ID567890',
      'F678',
      'Max Taylor',
      '678 Elm St',
      '555-7890',
      'mia@example.com',
      'Noah Adams',
    ],
    [
      'Noah Adams',
      'ID234567',
      'M901',
      'Nina Adams',
      '901 Oak St',
      '555-0123',
      'noah@example.com',
      'Olivia Clark',
    ],
    [
      'Olivia Clark',
      'ID890123',
      'F234',
      'Oscar Clark',
      '234 Main St',
      '555-3456',
      'olivia@example.com',
      'Peter Brown',
    ],
    [
      'Peter Brown',
      'ID456789',
      'M567',
      'Penny Brown',
      '567 Cedar St',
      '555-6789',
      'peter@example.com',
      'Quinn Evans',
    ],
    [
      'Quinn Evans',
      'ID012345',
      'F890',
      'Quincy Evans',
      '890 Pine St',
      '555-0123',
      'quinn@example.com',
      'Rachel Foster',
    ],
    [
      'Rachel Foster',
      'ID678901',
      'F123',
      'Ryan Foster',
      '123 Oak St',
      '555-3456',
      'rachel@example.com',
      'Samuel Hill',
    ],
    [
      'Samuel Hill',
      'ID345678',
      'M456',
      'Sara Hill',
      '456 Elm St',
      '555-6789',
      'samuel@example.com',
      'Tara Mitchell',
    ],
    [
      'Tara Mitchell',
      'ID901234',
      'F789',
      'Tom Mitchell',
      '789 Cedar St',
      '555-0123',
      'tara@example.com',
      'Ulysses Carter',
    ],
    [
      'Ulysses Carter',
      'ID567890',
      'M012',
      'Uma Carter',
      '012 Walnut St',
      '555-3456',
      'ulysses@example.com',
      'Victoria Reed',
    ],
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
      name: 'IDCardNumber',
      label: 'ID Card Number',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'AutoMembershipNumber',
      label: 'Auto Membership Number',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'GuardianName',
      label: 'Guardian Name',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Address',
      label: 'Address',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'PhoneNumber',
      label: 'Phone Number',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'EmailAddress',
      label: 'Email Address',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'ReferencePerson',
      label: 'Reference Person',
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
                  <MenuItem
                  // onClick={() => handleEdit(tableMeta.rowData)}
                  >
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
  const options = {
    filterType: 'checkbox' as const,
  }
  return (
    <>
      <Box>
        <div className='mt-7 text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-center font-russoone font-normal'>
          Member list
        </div>
        <MUIDataTable
          title={'Member Information'}
          data={data}
          columns={columns}
          options={options}
        />
      </Box>
    </>
  )
}

export default MemberList
