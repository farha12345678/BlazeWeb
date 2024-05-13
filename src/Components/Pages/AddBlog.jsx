import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";


const AddBlog = () => {
    const {user} = useContext(AuthContext)
    const handleAdd = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const title = form.title.value;
        const image = form.image.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const category = form.category.value;
        const addBlog = {email,title,category,image, short_description,long_description}
        console.log(email,title,category , image,short_description,long_description);
         // send data to the server

         axios.post('http://localhost:5000/blog' , addBlog)
         .then(data => {
            if(data.data.insertedId){
                Swal.fire("Blog Added Successfully!");
                    e.target.reset();
            }
                
         })
       
    }
    return (
        <div>
            <div className="hero   mx-auto rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/xj113kc/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg)' }}>


                <div className="card shrink-0 w-full  max-w-xl h-auto shadow-2xl bg-purple-200 mx-auto my-10 hero-overlay bg-opacity-95">
                    <div className="text-center font-bold text-4xl mt-5">
                        <h1>Add Blogs Here...</h1>
                    </div>
                    <form onSubmit={handleAdd} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Your Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user.email} disabled className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required  />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="input input-bordered" required name="category"  >
                                <option value="Productivity">Productivity</option>
                                <option value="Personal Development">Personal Development</option>
                                <option value="Health & Wellness">Health & Wellness</option>
                                <option value="Communication">Communication</option>
                                <option value="Nutrition">Nutrition</option>
                                <option value="Other..">Other..</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <input type="text" name="long_description" placeholder="Long Description" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;