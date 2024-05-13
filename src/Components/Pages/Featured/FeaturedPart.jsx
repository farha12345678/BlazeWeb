
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";


const FeaturedPart = () => {
    const [topBlogs, setTopBlogs] = useState([]);
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
       
                const blogsWithWordCount = data.map(blog => ({
                    ...blog,
                    // wordCount: blog.long_description.split('').length
                }))
                const sortedTopBlogs = blogsWithWordCount.sort((a, b) => b.wordCount - a.wordCount).slice(0, 10);
            setTopBlogs(sortedTopBlogs)
               
           
            
            
    }, [])
    // Calculate word count for each blog's long_description
    // const blogsWithWordCount = data.map(blog => ({
    //   ...blog,
    //   wordCount: blog.long_description.split(/\s+/).length
    // }));

    // Sort blogs by word count in descending order and take the top 10
    // const sortedTopBlogs = blogsWithWordCount.sort((a, b) => b.wordCount - a.wordCount).slice(0, 10);

    // setTopBlogs(sortedTopBlogs);


    return (
        <div>
            <div>
                <ul>
                    {topBlogs.map((blog, index) => (
                        <li key={index}>
                        <FeaturedCard blog={blog}></FeaturedCard> {blog.wordCount}
                    </li>

                        // <li key={index}>
                        //     <div>{blog.title}</div> {blog.wordCount}
                        // </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FeaturedPart;