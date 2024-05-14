import { Typewriter } from "react-simple-typewriter";



const Question = () => {
    return (
        <div>
             <div className="text-center">
             
      <h1 className="text-center my-10 font-semibold text-4xl"><Typewriter words={["Accordion Innovations"]} loop={1000} cursor cursorStyle="_" typeSpeed={70}  delaySpeed={1000}/></h1>
      
    </div>
            
           <div className="lg:flex grid lg:justify-center items-center">
           <div className="lg:flex grid  justify-center items-center gap-x-5">
                <div>
                    <img className="w-96  lg:w-[500px]"  src="https://i.ibb.co/sy3NVB0/pexels-pixabay-221164-1.jpg" alt="" />
                </div>
            <div className="lg:w-[500px] w-96">
            <div className="collapse collapse-plus bg-base-200 ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                What are some effective strategies for increasing blog traffic?
                </div>
                <div className="collapse-content">
                    <p>Engaging with your audience through social media, optimizing your content for search engines, and collaborating with other bloggers are all effective ways to increase blog traffic.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How do you come up with engaging blog post ideas?
                </div>
                <div className="collapse-content">
                    <p>Keeping an idea journal, staying updated on industry trends, and listening to your audiences feedback are great ways to generate fresh and engaging blog post ideas.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What are some popular methods for monetizing a blog?
                </div>
                <div className="collapse-content">
                    <p>Some popular methods for monetizing a blog include affiliate marketing, sponsored content, selling digital products or courses, and displaying ads through platforms like Google AdSense.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What factors should I consider when choosing a blogging platform?
                </div>
                <div className="collapse-content">
                    <p>Factors to consider when choosing a blogging platform include ease of use, customization options, pricing, available features (such as SEO tools and analytics), and scalability as your blog grows.</p>
                </div>
            </div>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Question;