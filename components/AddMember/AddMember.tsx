import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  idCardNumber: yup.string().required('ID Card Number is required'),
  autoMembershipNumber: yup.string().required('Auto Membership Number is required'),
  guardianName: yup.string().required('Guardian Name is required'),
  address: yup.string().required('Address is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  emailAddress: yup.string().email('Invalid email address').required('Email Address is required'),
  referencePerson: yup.string().required('Reference Person is required'),
})
const AddMember = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: '',
      idCardNumber: '',
      autoMembershipNumber: '',
      guardianName: '',
      address: '',
      phoneNumber: '',
      emailAddress: '',
      referencePerson: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values)
      router.push('/memberlist')
    },
  })
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
              id='idCardNumber'
              name='idCardNumber'
              label='ID Card Number'
              variant='outlined'
              fullWidth
              value={formik.values.idCardNumber}
              onChange={formik.handleChange}
              error={formik.touched.idCardNumber && Boolean(formik.errors.idCardNumber)}
              helperText={formik.touched.idCardNumber && formik.errors.idCardNumber}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='autoMembershipNumber'
              name='autoMembershipNumber'
              label='Auto Membership Number'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.autoMembershipNumber}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              onChange={formik.handleChange}
              error={
                formik.touched.autoMembershipNumber && Boolean(formik.errors.autoMembershipNumber)
              }
              helperText={formik.touched.autoMembershipNumber && formik.errors.autoMembershipNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='guardianName'
              name='guardianName'
              label='Guardian Name'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.guardianName}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.guardianName && Boolean(formik.errors.guardianName)}
              helperText={formik.touched.guardianName && formik.errors.guardianName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='address'
              name='address'
              label='Address'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.address}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='phoneNumber'
              name='phoneNumber'
              label='Phone Number'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='emailAddress'
              name='emailAddress'
              label='Email Address'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
              helperText={formik.touched.emailAddress && formik.errors.emailAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='referencePerson'
              name='referencePerson'
              label='Reference Person'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.referencePerson}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.referencePerson && Boolean(formik.errors.referencePerson)}
              helperText={formik.touched.referencePerson && formik.errors.referencePerson}
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

export default AddMember
