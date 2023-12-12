import { Link } from 'react-router-dom'
// import SinglePost from './components/SinglePost'

function AllPosts({allPosts}) {

    return (
    <div>
        <h1>All Posts || {allPosts.length} Posts</h1>
        {
        allPosts.map((post) => {
            return(
            <Link key={post.id} to = {`/posts/${post.id}`}>
                <li>{post.title}</li>
            </Link>
            )
        })
        }
    </div>
    )
}

export default AllPosts
