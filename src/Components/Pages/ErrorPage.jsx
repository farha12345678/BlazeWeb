import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div >
            <div className="text-center my-40">
                <h1 className="text-9xl font-bold text-purple-800">404</h1>
                <p className="text-xl font-semibold">Page Not Found</p>
                <Link to='/'><button className="bg-purple-600 mt-4  text-white">Go To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;