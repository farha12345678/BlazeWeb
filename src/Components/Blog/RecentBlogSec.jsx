import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const RecentBlogSec = () => {
    const blogs = useLoaderData()
    
    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-center text-4xl font-bold text-purple-600">Our Recent Blogs</h1>
                <p className="mt-2 font-medium text-purple-800 text-lg">Presenting our recent blogs here</p>
            </div>
            <div className="grid gap-y-5 lg:grid-cols-3 md:grid-cols-2 mx-20 mb-16">
                 {
                    blogs.slice(0,6).map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                 }  
            </div>
        </div>
    );
};

export default RecentBlogSec;