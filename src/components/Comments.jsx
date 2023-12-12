import { useEffect, useState } from "react"
import axios from "axios"

const Comments = ({id}) => {

    const [allComments, setAllComments] = useState([])

    useEffect(() => {
        const fetchComments = async() => {
            const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/comments')
            setAllComments(data)
        }
    
        fetchComments()
    }, [])

    const applicableComments = allComments.filter((comment) => {
        return id === comment.postId
    })

    return (
        <div>
            <h1>See what people are saying -</h1>
            <br />
            {applicableComments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h3>{comment.name}</h3>
                        <h4>{comment.email}</h4>
                        <p>{comment.body}</p>
                        <br />
                    </div>
                )
            })}
        </div>
        
    )
}

export default Comments