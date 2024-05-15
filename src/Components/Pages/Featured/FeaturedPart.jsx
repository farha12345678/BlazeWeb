import { useQuery } from "@tanstack/react-query";
import FeaturedCard from "./FeaturedCard";

const FeaturedPart = () => {
    const { isPending, isError, error, data: blog } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blog')
             console.log(blog);
            return res.json()
        
        }
    })
    if(isPending){
        return <div className="text-center"><span className="loading loading-bars loading-lg text-center"></span></div>
    }

    if(isError){
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
            <div>
                {
                    top10Blogs.map(blog => <FeaturedCard key={blog._id} blog={blog}></FeaturedCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedPart;