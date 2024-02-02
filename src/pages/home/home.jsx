import React from 'react';
import './home.css'
const Home = () => {
  return (
    <div className="home-container">
      <div className="landing">
        <div className="color">
        </div>
        <div className="landing-information">
          <div className="landing-text">
            <h1 className='landing-text-title-1'>Supercharge Innovation</h1>
            <h2 className='landing-text-title-2'>Powered by AI</h2>
            <p className='landing-text-para'>The global platform to find and engage university project teams for research and prototyping.</p>
          </div>
          <div className="landing-image">
            {/* <img src="/images/landing-image.jpeg" alt="" srcset="" /> */}
          </div>
        </div>
      </div>
      <div className="information-basic">
        <div className="icon">
          <i className="fa fa-cloud" style={{ color: 'orange',backgroundColor:'#ff5c0047' }}></i>
          <div className="icon-text">High ROI</div>
        </div>
        <div className="icon">
          <i className="fa fa-laptop" style={{  color: 'blue' ,backgroundColor:'#daecf2'}}></i>
          <div className="icon-text">Flexible Engagement</div>
          </div>
        <div className="icon">
        <i className="fa fa-fingerprint" style={{  color: 'green',backgroundColor:'#bae5ba96' }}></i>
          <div className="icon-text"> Secure Execution</div>
         </div>
      </div>
      <div className="homepage-register">
        <div className="homepage-register-text">
          The free platform for university students to find and deliver real world outcomes for global clients.
        </div>
        <div className="homepage-register-button">
          <button type="button">
            <div className="button-text">
              Are you a Student?
            </div>
          <div className="arrow">&#10230;</div>
          </button>
        </div>
      </div>
      <div className="magic-border">
          <div className="magic-border-color1"></div>
          <div className="magic-border-color2"></div>
          <div className="magic-border-color3"></div>
          <div className="magic-border-color4"></div>
          <div className="magic-border-color5"></div>
      </div>
      <div className="homepage-about-section">
        <div className="homepage-about-section-image"></div>
        <div className="homepage-about-section-text">
          <h1> The Power of Innovation</h1>
          <h2>"Everything is impossible, until it is done" <br/>-
              Robert A. Heinlein.
          </h2>
          <p>
          Innovation drives the engine of growth, but it faces many barriers. Never let a good idea wait or become irrelevant because the path is unclear, internal teams are overloaded, or budgets are tight. Let highly skilled university research teams provide a cost-effective means of rapid exploration and prototyping that accelerates value creation.
          </p>
        </div>
      </div>
      <div className="homepage-impact-section">
        <h1>The Trumio Difference</h1>
        <div className="homepage-impact-section-text">
          <div className="homepage-impact-points" id='p1'>
            <div className="points-combo">
              <div className="points-circle" id='pc1'>1</div>
              <div className="points-line"></div>
            </div>
            <div className="points-text">
              <h3>Harness AI, on your terms</h3>
              <p>Learn how AI can accelerate and impact your future business</p>
            </div>
          </div>
          <div className="homepage-impact-points" id='p2'>
            <div className="points-combo">
              <div className="points-circle" id='pc2'>2</div>
              <div className="points-line"></div>
            </div>
            <div className="points-text">
              <h3>Talented Teams, not just individuals</h3>
              <p>Immediate access to a verified repertoire of skills and university talent</p>
            </div>
          </div>
          <div className="homepage-impact-points" id='p3'>
            <div className="points-circle margin" id='pc3'>3</div>
            <div className="points-text">
              <h3>Reward Outcomes, not attendance</h3>
              <p>Pay only when mutually agreed results are delivered at each milestone</p>
            </div>
          </div>
        </div>
        <div className="homepage-impact-section-image">
            <img src="./images/Image-738.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}
export default Home;