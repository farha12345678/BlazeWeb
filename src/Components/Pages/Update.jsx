
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const updates = useLoaderData()
    const { _id, title, image, short_description, long_description, category } = updates;

    // const { isError, error, data: update } = useQuery({
    //     queryKey: ['update'],
    //     queryFn: async () => {
    //         const res = await fetch((params) => `https://assignment-11-client-zeta.vercel.app//blog/${params.id}`)
    //         console.log(update);
    //         return res.json()

    //     }
    // })

    // if(isError){
    //     return <p>{error.message}</p>
    // }
    // const {_id ,title ,image ,short_description ,long_description ,category} = update;


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target
        const title = form.title.value;
        const image = form.image.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const category = form.category.value;
        const addUpdate = { title, category, image, short_description, long_description }
        console.log(title, category, image, short_description, long_description);
        // send data to the server
        fetch(`https://assignment-11-client-zeta.vercel.app/blog/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire("Blog Added Successfully!");
                    e.target.reset()
                }

            })
    }
    return (
        <div>

            <div className="hero   mx-auto rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/xj113kc/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg)' }}>


                <div className="card shrink-0 w-full  max-w-xl h-auto shadow-2xl bg-purple-200 mx-auto my-10 hero-overlay bg-opacity-95">
                    <div className="text-center font-bold text-4xl mt-5">
                        <h1>Update Your Blogs</h1>
                    </div>
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">

                                <span className="label-text text-xl font-bold">Title</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" defaultValue={image} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="input input-bordered" required name="category" defaultValue={category}  >
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
                            <input type="text" name="short_description" defaultValue={short_description} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <input type="text" name="long_description" defaultValue={long_description} className="input input-bordered" required />

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

export default Update;