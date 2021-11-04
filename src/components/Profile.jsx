import React from 'react'
import UserContext from '../contexts/UserContext'

export default class Profile extends React.Component {
    static contextType = UserContext

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1>
                    Welcome back <span>{this.context.state.username}</span>
                </h1>
            </>
        )
    }
}
