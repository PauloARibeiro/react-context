import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function ProfileHOC() {
    const { username } = useContext(UserContext)

    return (
        <>
            <h1>Welcome back {username}</h1>
        </>
    )
}
