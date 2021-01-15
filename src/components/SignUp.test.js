import React from 'react'
import {render} from '@testing-library/react';
import SignupForm  from './Login';


describe("Signup render Page", () => {   
    it('renders a email input', () => {
        const {getByTestId} = render(<SignupForm/>);
        expect(getByTestId("firstname-id")).toBeInTheDocument();
    })
});  