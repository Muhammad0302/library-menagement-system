// import { shallow } from 'enzyme'
// import { TextField } from '@mui/material'
// import Signin from '../Signin''
// import { it } from 'node:test'
// it('should save the form and redirect to sign-in page when a valid new password is entered and confirmed', () => {
//   // Initialize the component
//   const wrapper = mount(<Password />)

//   // Simulate user input
//   wrapper.find('input[name="password"]').simulate('change', { target: { value: 'newpassword' } })
//   wrapper.find('input[name="confirmpass"]').simulate('change', { target: { value: 'newpassword' } })

//   // Submit the form
//   wrapper.find('form').simulate('submit')

//   // Assert the form status and redirection
//   expect(wrapper.state('formStatus')).toEqual({
//     message: 'Signed up successfully.',
//     type: 'success',
//   })
//   expect(wrapper.state('displayFormStatus')).toBe(true)
//   expect(wrapper.instance().props.router.push).toHaveBeenCalledWith('/signin')
// })
