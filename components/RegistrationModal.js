import React, {useState} from 'react';
import axios from "axios";

const RegistrationModal = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const submit = async (e) => {
      // e.preventDefault()
        const response = await axios.post('/api/auth/register', {
            email,
            password,
            passwordConfirmation
        })
        console.log(response)
    }

    return (
        <>
            <h2>Sign up</h2>
            <div>
                <form onSubmit={submit}>
                    <input type="email"
                           id="email"
                           placeholder="Email Address"
                           onChange={(e => setEmail(e.target.value))}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e => setPassword(e.target.value))}
                    />
                    <input
                        id="passwordconfirmation"
                        type="password"
                        placeholder="Enter password again"
                        onChange={(e => setPasswordConfirmation(e.target.value))}
                    />
                    <p>
                        Already have an account?{' '}
                        <a href="#" onClick={() => props.showLogin()}>
                            Log in
                        </a>
                    </p>
                    <button>Sign up</button>
                </form>
            </div>
        </>
    );
};

export default RegistrationModal;
