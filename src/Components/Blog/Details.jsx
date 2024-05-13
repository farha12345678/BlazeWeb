import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Details = () => {
    const blogLoad = useLoaderData()
    const {user} = useContext(AuthContext)

    console.log(blogLoad);
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
                        user?
                        <Link to={`/update/${blogLoad._id}`}>Update</Link> : <div></div>
                        
                    }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Details;