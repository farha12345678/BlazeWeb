
import { Link, useLoaderData } from "react-router-dom";

import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";



const Details = () => {
    const blogLoad = useLoaderData()
    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([])

    // console.log(blogLoad);

    const handleComment = e => {
        e.preventDefault()
        const form = e.target
       
        const commentId = blogLoad._id;
        const comment = form.comment.value
        const image = user?.photoURL
        const name = user?.displayName
        const addComment = { comment, image, name , commentId  }
        console.log(addComment);
        axios.post('http://localhost:5000/comment' , addComment)
    .then(data => {
       if(data.data.insertedId){
           Swal.fire("Blog Added Successfully!");
           setComments(data.data)
           console.log(data.data);
               e.target.reset();
       }
           
    })
    }
    

    const { isError, error, data: comment } = useQuery({
        queryKey: ['comment'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/comment?/commentId=${blogLoad._id}`)
            console.log(comment);
            
            return res.json()
        
        }
    })

    if(isError){
        return <p>{error.message}</p>
    }


    return (
        <div>
            <div className=" w-[900px] mx-auto h-auto bg-purple-100 border border-purple-600 my-20">
                <figure><img className='h-96 w-full' src={blogLoad.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">
                        {blogLoad.title}
                        <div className="badge badge-outline bg-purple-500 text-white">NEW</div>
                    </h2>
                    <p className='text-lg font-medium text-blue-500'>{blogLoad.short_description}</p>
                    <p className='text-lg font-medium '>{blogLoad.long_description}</p>
                    <p className='text-lg font-medium'>Category: <span>{blogLoad.category}</span></p>
                   <div>
                    {
                        user?.email === blogLoad.email? (
                            <>
                            <Link to={`/update/${blogLoad._id}`}><button>Update</button></Link>
                            <p>User Cannot comment on his own blog</p>
                            </>
                        ) 
                        
                        
                        : (
                            // 
                            <div>
                                {
                                    comments.map(c=> <p>{c.comment}</p>)
                                }
                                 <form onSubmit={handleComment}>
                            <input type="text" name="comment" />
                            <button>Comment</button>
                        </form>
                            </div>
                        )
                    }
                   </div>
                </div>
            </div>
            
            {/* <div>
                       <div className="h-[400px]">
                        {
                            comments?.map(c => <p key={comments._id}>{c.comment}</p>)
                        }
                       </div>
                        <form onSubmit={handleComment}>
                            <input type="text" name="comment" />
                            <button>Comment</button>
                        </form>
                    </div> */}
        </div>
    );
};

export default Details;