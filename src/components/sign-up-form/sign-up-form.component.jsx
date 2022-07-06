import { useState } from "react";
import { createAuthUserFromEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from './sign-up-form.styles.jsx';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const resetFormFields = () => setFormFields(defaultFormFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserFromEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            resetFormFields();
        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use');
            } else {
                console.error('user creation encountered an error ', error);
            }
        }
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                  label="Display Name"
                  inputOptions={{
                    type: 'text',
                    required: true,
                    onChange: handleChange,
                    name: 'displayName',
                    value: displayName
                  }} />
                <FormInput
                  label="Email"
                  inputOptions={{
                    type: 'email',
                    required: true,
                    onChange: handleChange,
                    name: 'email',
                    value: email
                  }} />
                <FormInput
                  label="Password"
                  inputOptions={{
                    type: 'password',
                    required: true,
                    onChange: handleChange,
                    name: 'password',
                    value: password
                  }} />
                <FormInput
                  label="Confirm Password"
                  inputOptions={{
                    type: 'password',
                    required: true,
                    onChange: handleChange,
                    name: 'confirmPassword',
                    value: confirmPassword
                  }} />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;
