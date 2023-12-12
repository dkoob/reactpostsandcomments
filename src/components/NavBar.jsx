import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/newpost'>Add Post</Link>
        </nav>
    )
}

export default NavBar