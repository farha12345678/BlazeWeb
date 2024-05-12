
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
const BlogCard = ({blog}) => {
    const {_id ,title , image , short_description , category} = blog
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
                        <Link to={`/update/${_id}`} className="badge badge-outline">Update</Link>
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