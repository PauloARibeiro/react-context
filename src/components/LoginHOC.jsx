import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function LoginHOC() {
    const { setPassword, setUsername, password, username, setIsLogged } = useContext(UserContext)

    function validateUser(e) {
        e.preventDefault()

        if (username.length === 0 && password.length === 0) {
            return alert('please fill out all the fields')
        }

        if (username.length === 0) {
            return alert('no username')
        }

        if (password.length === 0) {
            return alert('no password')
        }

        setIsLogged(true)
    }

    return (
        <form onSubmit={e => validateUser(e)}>
            <div className="form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="form">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
            </div>

            <button type="submit">Login</button>
        </form>
    )
}
