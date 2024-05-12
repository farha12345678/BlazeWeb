
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Providers/AuthProvider";

const Wishlist = () => {
    
    const { user } = useContext(AuthContext) || {}
    const [wish , setWish] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/wish/${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            setWish(data)
            console.log(data);
        })

    }, [user])
    return (
        <div>
           {
            wish?.map(w => <h1>{w.title}</h1>)
           }
        </div>
    );
};

export default Wishlist;