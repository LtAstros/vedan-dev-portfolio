import './index.scss'
import headshot from '../../assets/images/headshot.png'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About Me</h1>
                <p>First of all, hello and thanks for checking out this website! My name (if it wasn't obvious)
                    is Vedan Desai, and I'm a new graduate with a BS in Data Science from UCSD. I made Provost Honors 
                    every quarter, and have Cum Laude stamped on my diploma for some reason. If anyone knows how to fix 
                    that, let me know!
                </p>
                <p>
                    In terms of experience, I have completed four internships across a variety of disciplines. My most recent
                    and relevant internships were at Teradata, where I worked closely with DevOps as a Software Engineer. I helped 
                    build ETL pipelines, wrote a CLI application, and conducted a data science project that used telemetry data. 
                </p>
                <p>
                    I've also had the pleasure of working in a variety of different languages: I have experience with Python, SQL, Golang, Java, 
                    and JavaScript (d3.js and react.js). As for software and packages, my core competencies lie in machine learning 
                    however I've used Selenium, Junit, AWS (EC2, S3, Lambda) and Bash/shell scripting for internships, academics, 
                    and personal projects. Please get in touch if any of this sounds like something useful to you (and even if it doesn't; I'm a fast learner!)
                </p>
            </div>
            <div className='image'>
                <img className='headshot' src={headshot} alt="vedan's face" />
            </div>
        </div>
    )
}

export default About