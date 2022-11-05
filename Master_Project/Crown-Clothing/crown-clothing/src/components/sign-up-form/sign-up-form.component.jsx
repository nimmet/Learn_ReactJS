

import React, {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'

import './sign-up-form.styles.scss'
import Button from '../button/button.component'


const defaultFormFields = {

    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''

}

const SignUpForm = ({signInWithGoogle}) => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password,confirmPassword} = formFields


    const resetFormFields = ()=> {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            alert('password do not match')
            return
        }

        try {
           const {user} = await createAuthUserWithEmailAndPassword(email, password)

          
        await createUserDocumentFromAuth(user,{displayName})
        resetFormFields()
        

        } catch (error){
            if(error.code === 'auth/email-already-in-use'){
                alert('cannot create user, email already in use')
            } else{

                console.log('user creation encountered an error',error)
            }
        }

    }

    const handleChange = (e) => {
        e.preventDefault()
        const {name,value} = e.target
        setFormFields({
           ...formFields,[name]:value})

    }

  return (
    <div className='sign-in-container'>
    <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
       

            <FormInput
             label="DisplayName" 
             required type='text'
              onChange={handleChange} name="displayName" 
            value={displayName} 

            />

            <FormInput label="Email" required type='email' onChange={handleChange} name="email" value={email} />

            <FormInput label="Password" required type='password' onChange={handleChange} name="password" value={password} />

            <FormInput label="Confirm Password" required type='password' onChange={handleChange} name="confirmPassword" value={confirmPassword} />

        
<div>
            <Button type='submit'>Sign Up</Button>
          
</div>

        </form>
    </div>
  )
}

export default SignUpForm