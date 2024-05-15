
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Providers/AuthProvider";
import WishCard from "./WishCard";
import { Typewriter } from "react-simple-typewriter";

const Wishlist = () => {
    
    const { user } = useContext(AuthContext) || {}
    const [wishes , setWishes] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/wish/${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            setWishes(data)
            console.log(data);
        })

    }, [user?.email])
    const handleDeleteItem = _id => {
        setWishes(prevItems => prevItems.filter(item => item._id !== _id));
    };
    return (
        <div>
             <h1 className="text-center my-10 font-bold text-4xl text-purple-800"><Typewriter words={["Wishlisted Item"]} loop={1000} cursor cursorStyle="_" typeSpeed={80}  delaySpeed={1000}/></h1>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2">
           {
            wishes?.map(wish => <WishCard key={wish._id} wish={wish} onDelete={handleDeleteItem}></WishCard>)
           }
        </div>
        </div>
    );
};

export default Wishlist;