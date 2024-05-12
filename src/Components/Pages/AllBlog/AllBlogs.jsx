import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import Card from "./Card";
import { useState } from "react";


const AllBlogs = () => {
    const blogs = useLoaderData()
    console.log(blogs);
    const [search, setSearch] = useState("")

    const handleSearch = () => {
        
       fetch('/searchBlogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ search })
            });

            // if (!response.ok) {
            //     throw new Error('Failed to fetch data');
            // }

            
            
        } 
    



    return (


        < div >

        <div>
            <form>
                <input className="border border-blue-500 " type="text" onChange={(e) => setSearch(e.target.value)} value={search}/>
                <button onClick={handleSearch}>Search</button>
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
                                blogs.filter(b => b.category === "Productivity").map(blog => <Card key={blog._id} blog={blog}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                blogs.filter(b => b.category === "Personal Development").map(blog => <Card key={blog._id} blog={blog}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                blogs.filter(b => b.category === "Health & Wellness").map(blog => <Card key={blog._id} blog={blog}></Card>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div >

    );
};

export default AllBlogs;