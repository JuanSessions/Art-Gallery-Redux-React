import React, { useState } from 'react'
import { connect } from 'react-redux'
import { authorizeUser, logout } from '../../redux/user/user-actions'
import '../../style/auth.css'

function Auth({ user }) {
    const [username, setUsername] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth">
            <h2>Auth</h2>
            {!user.isAuth ?
                <form onSubmit={submitHandler}>
                    <fieldset>
                        <legend>Login</legend>
                        <label>Username
                            <input
                                type="text"
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                min="2"
                                max="30"
                            />
                        </label>
                        <label>Password
                            <input
                                type="password"
                                name="password"
                                onChange={(e) => setUserPassword(e.target.value)}
                                min="5"
                                max="10"
                            />
                        </label>
                        <button onClick={() => authorizeUser(username, userPassword)} className="btns login-btn">
                            Login
                        </button>
                    </fieldset>
                </form>
                :
                <div className="auth-user">
                    <h3>Hello</h3>
                    <h4>You are logged in as {user.user} </h4>
                    <button onClick={() => logout()} className="btns logout-btn">
                        Logout
                    </button>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authorizeUser: (name, password) => dispatch(authorizeUser(name, password)),
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
