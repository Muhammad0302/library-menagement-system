import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  category: yup.string().required('Category is required'),
  author: yup.string().required('Author is required'),
  rack: yup.string().required('Rack is required'),
  shelf: yup.string().required('Shelf is required'),
})
const AddBook = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      author: '',
      rack: '',
      shelf: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values)
      router.push('/booklist')
    },
  })
  // added here .
  return (
    <div className='mt-6'>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          spacing={3}
          sx={{ marginTop: '5px !important', paddingLeft: '6rem', paddingRight: '6rem' }}
        >
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              id='category'
              name='category'
              label='Category'
              variant='outlined'
              fullWidth
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='author'
              name='author'
              label='Author'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.author}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              onChange={formik.handleChange}
              error={formik.touched.author && Boolean(formik.errors.author)}
              helperText={formik.touched.author && formik.errors.author}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='rack'
              name='rack'
              label='Rack'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.rack}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.rack && Boolean(formik.errors.rack)}
              helperText={formik.touched.rack && formik.errors.rack}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='shelf'
              name='shelf'
              label='Shelf'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.shelf}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.shelf && Boolean(formik.errors.shelf)}
              helperText={formik.touched.shelf && formik.errors.shelf}
            />
          </Grid>

          <Grid item xs={12} container justifyContent='flex-end'>
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
        </Grid>
      </form>
    </div>
  )
}

export default AddBook
