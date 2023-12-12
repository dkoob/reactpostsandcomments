import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Comments from './Comments'

const SinglePost = ({props}) => {

    const navigate = useNavigate()

    const handleDelete = async () => {
        const response = await axios.delete(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts/${id}`)
        // update state after this because data has changed
        navigate('/posts')
    }

    const params = useParams()
    const id = params.id*1

    const singlePost = props.allPosts.find((post) => {
        return id === post.id
    })

    if (!singlePost){
        return null
    }

    return(
        <div>
            <h1>{singlePost.title}</h1>
            <h2>{singlePost.body}</h2>
            <hr />
            <button onClick={handleDelete}>Delete</button>
            <hr />
            <Comments id = {id}/>
        </div>
    )
}

export default SinglePost