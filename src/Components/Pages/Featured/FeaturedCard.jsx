
import { PropTypes } from 'prop-types';

const FeaturedCard = ({ blog }) => {
    console.log(blog);
    const {title,category , owner , ownerName} = blog
    
    return (
        <div>
           
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                     <thead>
                        <tr>
                            <th></th>
                           
                            <th>Title</th>
                            <th>Category</th>
                            <th>Blog Owner</th>
                            <th>Owner Name</th>
                        </tr>
                      
                    </thead> 
                        
                      <tbody> 
                        <tr>
                            <th>1</th>
                            <td>{title}</td>
                            <td>{category}</td>
                            <td><img className='w-10 h-10 rounded-full' src={owner} alt="" /></td>
                            <td>{ownerName}</td>
                        </tr>
                        </tbody> 
                       
                        </table>
               
            </div>
        </div>
    );
};

FeaturedCard.propTypes = {
    blog:PropTypes.object
}

export default FeaturedCard;