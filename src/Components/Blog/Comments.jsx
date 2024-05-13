import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Comments = () => {
    const [comments, setComments] = useState([])
    const { user } = useContext(AuthContext)
    const handleComment = e => {
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value
        const image = user?.photoURL
        const name = user?.displayName
        const addComment = { comment, image, name }
        console.log(addComment);
        axios.post('http://localhost:5000/comment', addComment)
            .then(data => {
                if (data.data.insertedId) {
                    setComments(data.data)
                    console.log(data.data);
                }
            })

    }

    return (
        <div>
            <div>
                       <div className="h-[400px]">
                        {
                            comments?.map(c => <p key={comments._id}>{c.comment}</p>)
                        }
                       </div>
                        <form onSubmit={handleComment}>
                            <input type="text" name="comment" />
                            <button>Comment</button>
                        </form>
                    </div>
        </div>
    );
};

export default Comments;