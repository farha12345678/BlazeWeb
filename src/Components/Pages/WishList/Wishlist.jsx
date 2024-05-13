
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Providers/AuthProvider";
import WishCard from "./WishCard";

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

    }, [])
    return (
        <div className="grid  lg:grid-cols-3 md:grid-cols-2">
           {
            wishes?.map(wish => <WishCard key={wish.wishId} wish={wish}></WishCard>)
           }
        </div>
    );
};

export default Wishlist;