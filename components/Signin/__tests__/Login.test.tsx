import { shallow } from 'enzyme'
import { TextField } from '@mui/material'
import Signin from '../Signin''
import { it } from 'node:test'

it('should render a form with email and password fields', () => {
  // Arrange
  const wrapper = shallow(<Signin />)

  // Act (Not needed for this particular test)

  // Assert
  expect(wrapper.find(TextField).length).toBe(2)
  expect(wrapper.find({ name: 'email' })).toHaveLength(1)
  expect(wrapper.find({ name: 'password' })).toHaveLength(1)
})
function expect(length: any) {
    throw new Error('Function not implemented.')
}

it('should validate the form on submission and display error messages if fields are empty or invalid', () => {
      // Arrange
      const wrapper = shallow(<Signin />);
      const formikProps = wrapper.find(Formik).props();
      const { validateForm, setSubmitting } = formikProps;
      const values = {
        email: '',
        password: '',
      };
  
      // Act
      validateForm(values);
      setSubmitting(true);
      wrapper.update();
  
      // Assert
      expect(wrapper.find({ name: 'email' }).prop('error')).toBe(true);
      expect(wrapper.find({ name: 'password' }).prop('error')).toBe(true);
    });