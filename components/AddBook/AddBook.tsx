import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button } from '@mui/material'

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  Region: yup.string().required('Region is required'),
  Cash: yup.string().required('Cash is required'),
  Card: yup.string().required('Card is required'),
})
const AddBook = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      Region: '',
      Cash: '',
      Card: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values)
    },
  })
  return (
    <div className='mt-6'>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} sx={{ marginTop: '5px !important' }}>
          <Grid item sm={1}></Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id='name'
              name='name'
              label='Name'
              variant='outlined'
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id='Region'
              name='Region'
              label='Region'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.Region}
              onChange={formik.handleChange}
              error={formik.touched.Region && Boolean(formik.errors.Region)}
              helperText={formik.touched.Region && formik.errors.Region}
            />
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={1}></Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id='Cash'
              name='Cash'
              label='Cash(%)'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.Cash}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              onChange={formik.handleChange}
              error={formik.touched.Cash && Boolean(formik.errors.Cash)}
              helperText={formik.touched.Cash && formik.errors.Cash}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id='Card'
              name='Card'
              label='Card(%)'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.Card}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.Card && Boolean(formik.errors.Card)}
              helperText={formik.touched.Card && formik.errors.Card}
            />
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item xs={11} container justifyContent='flex-end'>
            <Button
              type='submit'
              // onClick={() => setError(true)}
              // disabled={loading}
              variant='contained'
              color='primary'
              sx={{ marginLeft: 'auto' }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
      </form>
    </div>
  )
}

export default AddBook
