import React, { useState } from 'react'
import LoginHOC from './components/LoginHOC'
import ProfileHOC from './components/ProfileHOC'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './contexts/UserContext'

import './app.css'

// function App() {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [isLogged, setIsLogged] = useState(false)

//     return (
//         <div className="App">
//             <UserContext.Provider
//                 value={{ username, setUsername, password, setPassword, isLogged, setIsLogged }}
//             >
//                 {isLogged ? <ProfileHOC /> : <LoginHOC />}
//             </UserContext.Provider>
//         </div>
//     )
// }

export class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isLogged: false,
            set: value => this.setState(value),
        }
    }

    render() {
        const { isLogged } = this.state

        return (
            <div className="App">
                <UserContext.Provider value={{ state: this.state }}>
                    {isLogged ? <Profile /> : <Login />}
                </UserContext.Provider>
            </div>
        )
    }
}

export default App
