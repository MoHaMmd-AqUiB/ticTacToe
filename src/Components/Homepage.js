import { useNavigate } from "react-router-dom"
import "./Homepage.css"
import logo from "../photos/144574-recruitment.json";
import vacancy from "../photos/23842-vacancy.json";
import pending from"../photos/119636-pending-payment.json";
import collaboration from "../photos/41448-online-team-collaboration-animation.json";
import timeSaving from "../photos/77406-stop-watch-timing.json";
import efficiency from "../photos/131193-time-money-efficiency.json";
import betterCollaboration from "../photos/104846-genesiv.json";
import animationData from "../photos/85037-recruitment.json";
import Lottie from "lottie-react";


export default function HomePage(){
    const navigate=useNavigate();
    function handleSignIn(){
                navigate("/Login")
    }
    function handleSignOut(){
        navigate("/SignUp")
}
    return(
        <>
  <header>
  <Lottie
          style={{
            width:"100px",
            height: "100px",
            
          }}
          animationData={logo}
        ></Lottie>
     <h1 className="company-title">Recruitment Solution</h1>
     <button className= "header-button1 "onClick={handleSignIn}>Sign in</button>
     <button className="header-button2"onClick={handleSignOut}>Sign up</button>

  </header>
  
  {/* <section id="hero">
    <div className="container">
      <h2>Efficient Hiring for Managers and HR Professionals</h2>
      <p>Streamline your recruitment process and find the right talent quickly with our online recruitment solution.</p>
      <a href="#features" className="btn">Learn More</a>
    </div>
  </section> */}
  <section id="hero">
    <div className="container">
      <h2>Efficient Hiring for Managers and HR Professionals</h2>
      <p>Streamline your recruitment process and find the right talent quickly with our online recruitment solution.</p>
      <a href="#features" className="btn">Learn More</a>
      </div>
      <Lottie style={{height: "50vh", position: "relative", right: "10vw"}} animationData={animationData}></Lottie>
    
  </section>
  
  <section id="features">
    <div className="container">
      <h3 className="heading-home">Key Features</h3>
      <div className="feature">
        {/* <img src="feature1.png" alt="Feature 1"/> */}
        <Lottie
          style={{
            width:"250px",
            height: "250px",
            position:"relative",
            left:"350px"
            
          }}
          animationData={vacancy}
        ></Lottie>
        <h4>Automated Job Posting</h4>
        <p>Simplify the job posting process by automating the distribution of job listings to multiple job boards and websites.</p>
      </div>
      <div className="feature">
       
        <Lottie
          style={{
            width:"250px",
            height: "250px",
            position:"relative",
            left:"350px"
            
          }}
          animationData={pending}
        ></Lottie>
        <h4>Applicant Tracking System</h4>
        <p>Effortlessly manage and track applicants with our integrated applicant tracking system.</p>
      </div>
      <div className="feature">
      <Lottie
          style={{
            width:"250px",
            height: "250px",
            position:"relative",
            left:"350px"
            
          }}
          animationData={collaboration}
        ></Lottie>
        <h4>Collaborative Hiring</h4>
        <p>Enable collaboration between hiring managers and HR professionals to make informed decisions.</p>
      </div>
    </div>
  </section>
  
  <section id="benefits">
    <div className="container">
      <h3 className="heading-home">Benefits</h3>
      <div className="benefit">
      <Lottie
          style={{
            width:"250px",
            height: "250px",
            position:"relative",
            left:"350px"
            
          }}
          animationData={timeSaving}
        ></Lottie>
        <h4>Time-saving</h4>
        <p className="benefit-para">Reduce the time and effort spent on manual tasks, allowing you to focus on finding the best candidates.</p>
      </div>
      <div className="benefit">
      <Lottie
          style={{
            width:"250px",
            height: "250px",
            position:"relative",
            left:"350px"
            
          }}
          animationData={efficiency}
          ></Lottie>
        <h4>Improved Efficiency</h4>
        <p className="benefit-para"> Streamline your recruitment workflow and improve efficiency by automating repetitive processes.</p>
      </div>
      <div className="benefit">
      <Lottie
          style={{
            width:"250px",
            height: "250px",
            position:"relative",
            left:"350px"
            
          }}
          animationData={betterCollaboration}
          ></Lottie>
        <h4>Better Collaboration</h4>
        <p className="benefit-para">Facilitate collaboration and communication between hiring managers and HR professionals for better decision-making.</p>
      </div>
    </div>
  </section>
  
  <footer>
    <p>&copy; 2023 Recruitment Solution. All rights reserved.</p>
  </footer>
  </>

    )
}