import { useQuery } from "@tanstack/react-query";

const FeaturedPart = () => {
    const { isPending, isError, error, data: blog } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blog')
            console.log(blog);
            return res.json()

        }
    })
    if (isPending) {
        return <div className="text-center"><span className="loading loading-bars loading-lg text-center"></span></div>
    }

    if (isError) {
        return <p>{error.message}</p>
    }


    const blogArray = Object.keys(blog).map(key => blog[key]);
    console.log(blogArray);

    blogArray.forEach(blog => {
        blog.longDescriptionLength = blog.long_descriptionLength;
    });

    blogArray.sort((a, b) => b.longDescriptionLength - a.longDescriptionLength);

    const top10Blogs = blogArray.slice(0, 10);
    console.log(top10Blogs)
    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th></th>

                            <th>Title</th>
                            <th>Category</th>
                            <th>Blog Owner</th>
                            <th>Owner Name</th>
                        </tr>

                    </thead>

                    <tbody className="text-center">
                        {
                            top10Blogs.map((blog, idx) => (
                                <tr key={blog._id}>
                                    <th>{idx+1}</th>
                                    <td>{blog.title}</td>
                                    <td>{blog.category}</td>
                                    
                                    <td>{blog.ownerName}</td>
                                    <td className="flex justify-center"><img className='w-10 h-10 rounded-full' src={blog.owner} alt="" /></td>
                                </tr>
                            ))
                        }
                        {/* <tr>
                            <th>1</th>
                            <td>{title}</td>
                            <td>{category}</td>
                            <td><img className='w-10 h-10 rounded-full' src={owner} alt="" /></td>
                            <td>{ownerName}</td>
                        </tr> */}
                    </tbody>

                </table>

            </div>
        </div >


    );
};

export default FeaturedPart;