import Swal from "sweetalert2";


const NewsletterSec = () => {
    const handleNewsletter = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        if(email){
            Swal.fire('Successfully subscribed!')
            e.target.reset()
        }
    }
    return (
        <div>
            <div className="flex text-center items-center justify-center gap-x-2 font-bold  text-4xl">
                <h1 className="text-purple-500">S</h1>
                <h1 className="text-blue-500">U</h1>
                <h1 className="text-purple-500">B</h1>
                <h1 className="text-blue-500">S</h1>
                <h1 className="text-purple-500">C</h1>
                <h1 className="text-blue-500">R</h1>
                <h1 className="text-purple-500">I</h1>
                <h1 className="text-blue-500">B</h1>
                <h1 className="text-purple-500">E</h1>
            </div>
            <div>
                <div className="lg:w-[1100px] lg:h-[450px] bg-gray-100 mx-auto my-10 rounded-2xl">
                    <div className="text-center pt-10">
                        <h1 className="text-5xl font-bold text-purple-600">Subscribe to our newsletter</h1>
                        <p className="mt-2 text-3xl font-bold text-blue-500">Do not miss out!</p>
                        <p className="mt-5 text-xl font-bold">Enter your email to get all latest blogs notification</p>
                        <form onSubmit={handleNewsletter}>
                            <div className="flex items-center justify-center mt-10">
                                <input className="w-[550px] h-12 rounded-l-lg" type="email" name="email" placeholder="Enter your email here..." />
                                <input className="bg-blue-500 text-white font-semibold text-xl  h-12 w-24 rounded-r-lg " type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSec;