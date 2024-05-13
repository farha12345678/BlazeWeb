
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import Card from "./Card";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";


const AllBlogs = () => {
    // const blogs = useLoaderData()
    // // console.log(blogs);
    const [search, setSearch] = useState('')

    // useEffect(() => {
    //     fetch(`/blog?&search=${search}`)
    //         .then(res => {
    //             console.log(res);

    //         })



    // const getData = async() => {
    //     const {data} = await axios(
    //         `/blog/&search=${search}`
    //     ) 
    // }
    //  getData()
    // fetch(`/blog/&search=${search}`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ search })
    // });
    // tanstack

    const { isError, error, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blog')
            console.log(blogs);
            return res.json()
        
        }
    })

    if(isError){
        return <p>{error.message}</p>
    }




    // }, [search])

    const handleSearch = e => {
        e.preventDefault()
        const title = e.target.search.value
        setSearch(title)
        console.log(title);


    }
    
    const getData = async() => {
        const {} = await axios(
            `/blog/&search=${search}`
        ) 
    }
     getData()


    return (


        < div >

            <div>
                <form onSubmit={handleSearch}>
                    <input type="title" name="search" />
                    <input type="submit" />
                </form>
            </div>
            <Tabs>
                <div className="container mx-auto my-10 ">
                    <div className="flex justify-center items-center">
                        <TabList>
                            <Tab>Productivity</Tab>
                            <Tab>Personal Development</Tab>
                            <Tab>Health & Wellness</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
                            {
                                blogs?.filter(b => b.category === "Productivity").map(blog => <Card key={blog._id} blog={blog}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                blogs?.filter(b => b.category === "Personal Development").map(blog => <Card key={blog._id} blog={blog}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                blogs?.filter(b => b.category === "Health & Wellness").map(blog => <Card key={blog._id} blog={blog}></Card>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div >

    );
};

export default AllBlogs;