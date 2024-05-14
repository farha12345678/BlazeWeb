import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const WishCard = ({ wish }) => {
    const { title, image, _id, short_description, category } = wish
    console.log(wish);
    return (
        <div>
           
            <div className="w-96 h-[550px]  bg-purple-100 border border-purple-600 my-10 mx-auto">
                <figure><img className='h-56 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">
                        {title}
                        
                    </h2>
                    <p className='text-lg font-medium text-blue-500'>{short_description}</p>
                    <p className='text-lg font-medium'>Category: <span>{category}</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/view/${_id}`} className="badge badge-outline">Details</Link>
                        {/* <Link onClick={wish.handleWish}  className="badge badge-outline">Wishlist</Link> */}
                        <button className="badge badge-outline">Remove from Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishCard.propTypes = {
    wish: PropTypes.object
}

export default WishCard;