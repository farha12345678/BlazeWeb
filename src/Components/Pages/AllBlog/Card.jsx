
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';

const Card = ({blog}) => {
    const {_id ,title , image , short_description , category} = blog
    const {user} = useContext(AuthContext)

    const handleWish = e =>{
        e.preventDefault()
        const wishId = _id;
        const email = user?.email
       const wishedBlog = {wishId,title,image,short_description,email,category}
        fetch('http://localhost:5000/wish', 
            {
                method:'POST',
               headers: {
                'content-type' : 'application/json'
               },
              body: JSON.stringify(wishedBlog)
            }
        )
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire("Blog Added Successfully!");
                    
                }

            })
    }
    return (
        <div>
             <div className=" w-96 h-[500px] bg-purple-100 border border-purple-600">
                <figure><img className='h-56 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">
                        {title}
                        <div className="badge badge-outline bg-purple-500 text-white">NEW</div>
                    </h2>
                    <p className='text-lg font-medium text-blue-500'>{short_description}</p>
                    <p className='text-lg font-medium'>Category: <span>{category}</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/view/${_id}`} className="badge badge-outline">Details</Link>
                        <Link onClick={handleWish}  className="badge badge-outline">Wishlist</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    blog:PropTypes.object
}

export default Card;