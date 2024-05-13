
import { PropTypes } from 'prop-types';
const FeaturedCard = ({ blog }) => {
    console.log(blog);
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>{blog.index}</th>
                                <td>{blog.title}</td>
                                <td>{blog.category}</td>
                                <td></td>
                            </tr>
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

FeaturedCard.propTypes = {
    blog: PropTypes.object
}

export default FeaturedCard;