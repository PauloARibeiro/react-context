import React from 'react'
import UserContext from '../contexts/UserContext'

export default class Login extends React.Component {
    static contextType = UserContext

    constructor(props) {
        super(props)
    }

    validateUser(e) {
        e.preventDefault()

        const { set, username, password } = this.context.state

        if (username.length === 0 && password.length === 0) {
            return alert('please fill out all the fields')
        }

        if (username.length === 0) {
            return alert('no username')
        }

        if (password.length === 0) {
            return alert('no password')
        }

        set({ isLogged: true })
    }

    render() {
        return (
            <form onSubmit={e => this.validateUser(e)}>
                <div className="form">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={e => this.context.state.set({ username: e.target.value })}
                    />
                </div>
                <div className="form">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={e => this.context.state.set({ password: e.target.value })}
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        )
    }
}
