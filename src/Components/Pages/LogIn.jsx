import { useContext } from "react";

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";


const LogIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handleSocial = socialProvider => {
        socialProvider()
            .then(result => {
                console.log(result.user);
                navigate(from)
            })
    }


    const { signInUser, googleLogIn, githubLogIn, facebookLogIn } = useContext(AuthContext)


    const handleLogIn = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                const user = {email}
                axios.post('http://localhost:5000/jwt', user , {withCredentials:true})
                    .then(res => {
                        console.log(res.data);
                    })
                if (loggedInUser) {
                    navigate(form)
                    
                }

                e.target.reset()
            })
            .catch(error => {
                console.log(error);
                Swal.fire(error.message);
            })

    }

    return (
        <div>

            <div className="text-center mb-5">
                <h1 className="text-5xl font-bold animate__animated  animate__heartBeat">LogIn Now!</h1>

            </div>

            <div className=" container card shrink-0 mx-auto lg:w-[450px] shadow-2xl bg-base-200 lg:mt-10 font-semibold">
                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <div className="text-center">
                        <p className="mb-2">or</p>

                        <p className="mb-2">Log In With</p>
                        <hr />
                        <div className="text-center mt-2">
                            <button onClick={() => handleSocial(googleLogIn)} ><FaGoogle className="text-4xl mr-5"></FaGoogle></button>
                            <button onClick={() => handleSocial(githubLogIn)} ><FaGithub className="text-4xl"></FaGithub></button>
                            <button onClick={() => handleSocial(facebookLogIn)} ><FaFacebook className="text-4xl ml-5"></FaFacebook></button>
                        </div>
                    </div>
                </form>

                <p className="text-center mb-10">Do not have any account?Please <Link className="text-blue-500" to='/register'>Register</Link></p>

            </div>

        </div>


    );
};

export default LogIn;