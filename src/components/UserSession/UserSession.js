import usericon from '../assets/icons/user.png'
import { Link } from 'react-router-dom'
import './UserSession.css'

const UserSession = () => {
    return (
        <Link className='usersession' to='./checkout' path='/checkout'>
            <img style={{ width: "2rem", height: "2rem" }} src={ usericon } alt='User Session' />
        </Link>
    )
}

export default UserSession