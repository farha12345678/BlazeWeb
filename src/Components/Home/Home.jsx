import RecentBlogSec from "../Blog/RecentBlogSec";
import NewsletterSec from "../Newsletter/NewsletterSec";
import Question from "../Q&A/Question";
import TrialSec from "../TrialSec/TrialSec";
import Banner from "./Banner";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogSec></RecentBlogSec>
            <NewsletterSec></NewsletterSec>
            <TrialSec></TrialSec>
            <Question></Question>
        </div>
    );
};

export default Home;