
import { Link, useLoaderData } from "react-router-dom";

import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";



const Details = () => {
    const blogLoad = useLoaderData()
    // console.log(blogLoad);
const {_id , title , image, email, short_description , long_description ,category} = blogLoad

    const { user } = useContext(AuthContext)
    

    // console.log(blogLoad);

    const handleComment = e => {
        const form = e.target
       
        const commentId = _id;
        const comment = form.comment.value
        const image = user?.photoURL
        const name = user?.displayName
        const addComment = { comment, image, name, commentId }
        console.log(addComment);
        axios.post('http://localhost:5000/comment', addComment)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire("Blog Added Successfully!");
                    
                    console.log(data.data);
                    
                }

            })
    }


    const { isError, error, data: comments } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/comments?commentId=${_id}`)
            console.log(comments);

            return res.json()

        }
    })

    if (isError) {
        return <p>{error.message}</p>
    }


    return (
        <div>
            <div className=" w-[900px] mx-auto h-auto bg-purple-100 border border-purple-600 my-20">
                <figure><img className='h-96 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">
                        {title}
                        <div className="badge badge-outline bg-purple-500 text-white">NEW</div>
                    </h2>
                    <p className='text-lg font-medium text-blue-500'>{short_description}</p>
                    <p className='text-lg font-medium '>{long_description}</p>
                    <p className='text-lg font-medium'>Category: <span>{category}</span></p>
                    <div>
                    <div className="h-auto py-5 w-full bg-base-100">
                           {comments?.map(c=> 
                            <div  key={c.commentId}>
                                <div className="flex border my-5 mx-5 rounded-md w-80 bg-purple-50 ">
                                    <img className="rounded-full h-14 w-14"  src={c.image} alt="" />
                                    <div className="ml-4">
                                        <h1 className="font-bold text-lg">{c.name}</h1>
                                    <p className="font-medium text-base text-black ">{c.comment}</p>
                                    </div>
                                </div>
                            </div>
                           )}
                        </div>
                        {
                            user?.email === email ? (
                                <>
                                    <Link to={`/update/${_id}`}><button className="btn text-xl font-bold text-blue-600 bg-blue-100">Update</button></Link>
                                    <p className="bg-red-300 w-1/2 h-auto mt-2">User Cannot comment on his own blog</p>
                                </>
                            )


                                : (
                                    // 
                                    <div>
                                        <form  onSubmit={handleComment}>
                                            <div className="h-12">
                                            <input className="lg:w-[400px] " type="text" name="comment" />
                                            <button className=" bg-blue-500 text-white font-medium text-xl rounded-sm">Comment</button>
                                            </div>
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