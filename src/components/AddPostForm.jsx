import { useState, userState } from 'react'
import axios from 'axios'

const AddPostForm = (allPosts, setAllPosts) => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [userId, setUserId] = useState(1)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newPost = {
            title,
            body,
            userId
        }
        const response = await axios.post('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts', newPost)
        console.log(response)
        // setPosts([...allPosts, response.data]) <---- will look something like this
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    placeholder="Enter Title Here"
                    onChange={(event) => {setTitle(event.target.value)}}
                    />
                    <input 
                    type="text" 
                    name="body" 
                    value={body}
                    placeholder="Enter Body Here"
                    onChange={(event) => {setBody(event.target.value)}}
                    />
                    <input 
                    type="number" 
                    name="userid" 
                    value={userId}
                    onChange={(event) => {setUserId(event.target.value)}}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddPostForm