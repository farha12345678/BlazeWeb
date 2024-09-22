
import { Typewriter } from "react-simple-typewriter";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";

const RecentBlogSec = () => {
   
    const { isError, error, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://assignment-11-client-zeta.vercel.app/blog')
            console.log(blogs);
            return res.json()
        
        }
    })

    if(isError){
        return <p>{error.message}</p>
    }

    return (
        <div className="container mx-auto">
            <div className="text-center my-10">
            <h1 className="text-center my-10 font-bold text-4xl text-purple-800"><Typewriter words={["Our Recent Blogs"]} loop={1000} cursor cursorStyle="_" typeSpeed={80}  delaySpeed={1000}/></h1>

                <p className="mt-2 font-medium text-purple-800 text-lg">Presenting our recent blogs here</p>
            </div>
            <div className="grid gap-x-12 gap-y-5 lg:grid-cols-3 md:grid-cols-2 mx-20 lg:mb-16">
                 {
                    blogs?.slice(0,6).map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                 }  
            </div>
        </div>
    );
};

export default RecentBlogSec;