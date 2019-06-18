import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="content">
      <div className="intro">
        <header>
          <h1>Greetings!</h1>
          <h1 className="unbold">My name is Eric, a full-stack developer currently based out of Dallas, TX.</h1>
          <h1 className="unbold">And I'm a huge advocate of <strong className="primary-color">decentralization.</strong></h1>
        </header>


        <a className="github" href="https://github.com/ericnam">
          <span>
            <img src="https://avatars3.githubusercontent.com/u/8689097?s=460&v=4"/>
            <p>/ericnam</p>
          </span>
        </a>
      </div>
     
      <div className="projects">
          <header>
            <h2 className="unbold">Projects</h2>
            <hr/>
          </header>

          <span className="project">
            <header>
              <h3><a href="#">/landing-page-ipfs</a></h3>
            </header>
            
            <span className="sub-header">        
              <h3 className="unbold">
                This website is hosted on IPFS via Cloudflare's IPFS gateway. 
              </h3>
              <h3>No central server required!</h3>
            </span>
          </span>
        </div>
    </div>
  );
}

export default App;
