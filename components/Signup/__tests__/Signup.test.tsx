import { shallow } from 'enzyme'
import { TextField } from '@mui/material'
import Signup from '../Signup'
import { it } from 'node:test'

it('should sign up successfully when all fields are filled correctly', () => {
  // Mock useRouter
  const useRouterMock = jest.spyOn(require('next/router'), 'useRouter')
  useRouterMock.mockImplementation(() => ({
    push: jest.fn(),
  }))

  // Mock getAccountsHandler
  const getAccountsHandlerMock = jest.spyOn(require('lib/accountsServer'), 'default')
  getAccountsHandlerMock.mockReturnValue({
    passwordClient: {},
  })

  // Mock useState
  const useStateMock = jest.spyOn(require('react'), 'useState')
  useStateMock.mockReturnValue([false, jest.fn()])

  // Mock Formik
  const formikProps = {
    values: {
      name: 'Muhammad Ismail',
      email: 'MuhammadIsmail@codistan.com',
      password: 'pakistan123',
    },
    touched: {
      name: true,
      email: true,
      password: true,
    },
    errors: {},
    handleBlur: jest.fn(),
    handleChange: jest.fn(),
    isSubmitting: false,
    setSubmitting: jest.fn(),
    resetForm: jest.fn(),
  }
  const FormikMock = jest.spyOn(require('formik'), 'Formik')
  FormikMock.mockImplementation(({ children }) => children(formikProps))

  // Mock registerUser
  const registerUserMock = jest.spyOn(Signup.prototype, 'registerUser')
  registerUserMock.mockResolvedValue()

  // Render the component
  const wrapper = shallow(<Signup />)

  // Simulate form submission
  wrapper.find('Formik').simulate('submit', formikProps.values, formikProps)

  // Assertions
  expect(registerUserMock).toHaveBeenCalledWith(formikProps.values, formikProps.resetForm)
  expect(formikProps.setSubmitting).toHaveBeenCalledWith(false)
  expect(useRouterMock().push).toHaveBeenCalledWith('/signin')
})
