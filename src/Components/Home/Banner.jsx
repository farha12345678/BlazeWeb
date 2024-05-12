import 'animate.css';
import '../../index.css'
const Banner = () => {
    return (
        <div>
            <div className="my-10">
                <div className="hero lg:w-[1100px] lg:h-96 mx-auto rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/xj113kc/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-center">
                        <div className="flex gap-x-10">
                            <div className="w-64 h-20 border border-purple-400 bg-gray-50 bg-opacity-70  rounded-es-3xl animate__animated animate__slideInLeft">
                                <p className="text-purple-800 font-bold text-2xl ">Welcome to our <br />
                                 website</p>
                            </div>
                            <div className="w-64 h-20 border border-purple-400 bg-gray-50 bg-opacity-70  rounded-se-3xl animate__animated animate__slideInRight">
                                <p className="text-purple-800 font-bold text-2xl">Hope you can <br /> enjoy...</p>
                            </div>
                            
                        </div>
                        <h1 className='font-bold text-white text-4xl mt-5 text-center btn border border-purple-400 bg-gray-50 bg-opacity-30 animate__animated animate__slideInUp'>Get started</h1>
                    </div>
                    
                </div>
                

            </div>
        </div>

    );
};

export default Banner;