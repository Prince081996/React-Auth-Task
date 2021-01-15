import React from 'react'
import {render} from '@testing-library/react';
import LoginForm  from './Login';


describe("Login render Page", () => {
    it('renders the Login page', () => {
      const {getByText} = render(<LoginForm/>);
      expect(getByText(/login/i)).toBeInTheDocument();
    });
    
    it('renders a submit button', () => {
        const {getByText} = render(<LoginForm/>);
        expect(getByText("Submit")).toBeInTheDocument();
      });
    it('renders a email input', () => {
        const {getByTestId} = render(<LoginForm/>);
        expect(getByTestId("email-id")).toBeInTheDocument();
      });  
    it('renders a email input', () => {
        const {getByTestId} = render(<LoginForm/>);
        expect(getByTestId("email-id")).toBeInTheDocument();
      });    
    });
  
    // describe('user logs in successfully and acess token added to localstorage', () => {
    //     it('allows the user to login successfully', async () => {
      
    //       // mock window.fetch for the test
    //       const UserResponse = {accessToken: 'user_token'}
      
    //       jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    //           console.log("reached mock api")
    //         return Promise.resolve({
    //           json: () => Promise.resolve(UserResponse),
    //         })
    //       });
      
    //       // Render the Login component
    //       const { getByTestId } = render(<LoginForm />);
      
    //       // fill out the form
    //       await act (async () => {
    //         fireEvent.change(screen.getByTestId(/email-id/i), {
    //           target: {value: 'prince@gmail.com'},
    //         });
      
    //         fireEvent.change(screen.getByTestId(/pwd-id/i), {
    //           target: {value: 'prince@123'},
    //         })
    //       });
      
    //       //Submit the form
    //       await act (async () => {
    //         fireEvent.submit(getByTestId('login-id'))
    //       });
      
    //       // alert to show up before continuing with our assertions.
    //       // Expect alert to be success
    //     //   const alert = await screen.findByRole('alert');
    //     //   expect(alert).toHaveTextContent(/congrats/i)
      
    //       // Expect local token to be set
    //       expect(window.localStorage.getItem('token')).toEqual(UserResponse.accessToken)
    //     })
    //   });