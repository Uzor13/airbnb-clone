import React from 'react';

const LoginModal = (props) => {
    return (
        <>
            <h2>Login</h2>
            <div>
                <form onSubmit={event => {
                    alert('Submitted')
                    event.preventDefault()
                }}>
                    <input type="email" id="email" placeholder="Email Address"/>
                    <input type="password" id="password" placeholder="Password"/>
                    <p>
                        Don't have an account yet?{' '}
                        <a href="#" onClick={() => props.showSignup()}>
                            Sign up
                        </a>
                    </p>
                    <button>Log in</button>
                </form>
            </div>
        </>
    );
};

export default LoginModal;
