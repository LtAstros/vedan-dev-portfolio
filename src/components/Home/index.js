import { Link } from "react-router-dom";
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <div className="intro">
                    Nice to meet you, I'm 
                </div>
                <div className="big">
                    Vedan Desai
                </div>
                UCSD 2023 | Data Science
                </h1>
                <h2>Aspiring Software/Machine Learning Engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                <Link to="/files/resume.docx" target="_blank" className='flat-button'>RESUME</Link>
            </div>

            <div className="quote-zone">
                <h1>Referrals: </h1>
                <br/>
                <h3>He's very good at doing chores!</h3>
                <div className="quote-author">
                    - Vedan's Mom
                </div>
                <br/>
                <h3>Solid friend, couldn't ask for better.</h3>
                <div className="quote-author">
                    - Vedan's Best Friend
                </div>
                <br/>
                <h3>Who?</h3>
                <div className="quote-author">
                    - Bill Gates
                </div>
            </div>  
        </div>
    );
}

export default Home