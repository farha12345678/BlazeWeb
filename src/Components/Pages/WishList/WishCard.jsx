import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import Swal from "sweetalert2";

const WishCard = ({ wish , onDelete }) => {
    const { title, image, short_description, category ,wishId,  _id } = wish
    console.log(wish);


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/wish/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    if (data.deletedCount > 0) {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your blog has been removed.",
                            icon: "success"

                        });
                        onDelete(_id)
                    }

                })
        }
    });
}
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
                        <Link to={`/view/${wishId}`} className="badge badge-outline">Details</Link>
                        {/* <Link onClick={wish.handleWish}  className="badge badge-outline">Wishlist</Link> */}
                        <button onClick={() => handleDelete(_id)}  className="badge badge-outline">Remove from Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishCard.propTypes = {
    wish: PropTypes.object,
    onDelete: PropTypes.func.isRequired
}

export default WishCard;