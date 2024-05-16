
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
const BlogCard = ({blog}) => {
    const {_id ,title , image , short_description , category} = blog
    const {user} = useContext(AuthContext)

    const handleWish = e =>{
        e.preventDefault()
        const wishId = _id;
        const email = user?.email
       const wishedBlog = {wishId,title,image,short_description,email,category}

       axios.post('https://assignment-11-client-zeta.vercel.app/blog' , wishedBlog)
         .then(data => {
            if(data.data.insertedId){
                Swal.fire("Blog Added Successfully!");
                    
            }
                
         })
        }
    return (
        <div>
            <div className=" w-96 hover:bg-inherit h-[500px] bg-purple-100 border border-purple-600 ">
                <figure><img className='h-56 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">
                        {title}
                        <div className="badge badge-outline bg-purple-500 text-white">NEW</div>
                    </h2>
                    <p className='text-lg font-medium text-blue-500'>{short_description}</p>
                    <p className='text-lg font-medium'>Category: <span>{category}</span></p>
                    <div className="card-actions justify-end gap-x-4">
                        <Link to={`/view/${_id}`} className="badge badge-outline text-xl font-normal text-blue-600 bg-blue-100">View Details</Link>
                        <button onClick={handleWish} className="badge badge-outline text-xl font-normal text-blue-600 bg-blue-100">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog:PropTypes.object
}

export default BlogCard;