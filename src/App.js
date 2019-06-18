import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileChiclet from './ProfileChiclet.js';
import Project from './Project.js';

function App() {
  return (
    <div className="content">
      <div className="intro">
        <header>
          <h1 className="primary-color">Greetings!</h1>
          <h1 className="unbold">My name is Eric, a full-stack developer currently based out of Dallas, TX.</h1>
          <h1 className="unbold">And I'm a huge advocate of <strong className="primary-color">decentralization.</strong></h1>
        </header>

        <ProfileChiclet url="https://github.com/ericnam" imgUrl="https://avatars3.githubusercontent.com/u/8689097?s=460&v=4" displayName="github.com/ericnam" />
        <ProfileChiclet url="https://dribbble.com/ericnam" imgUrl="https://cdn.dribbble.com/users/1998925/avatars/small/9b8c8de493712adf169f2d1811e40140.jpg?1536698514" displayName="dribbble.com/ericnam" />

      </div>
     
      <div className="projects">
          <header>
            <h2 className="unbold">Projects</h2>
            <hr/>
          </header>

          <Project projectName="/landing-page-ipfs" projectUrl="https://github.com/ericnam/landing-page-ipfs" projectDescription={landingPageIPFSDescription()} />
          <Project projectName="/nam-landing" projectUrl="https://github.com/ericnam/nam-landing" projectDescription={landingPageDescription()} />

          <br />
          <p>And many more to come!</p>
        </div>
    </div>
  );
}

function landingPageIPFSDescription () {
  return (
    <div>
      <h3 className="unbold">
        This website is hosted on IPFS via Cloudflare's IPFS gateway. 
      </h3>
      <h3>No central server required!</h3>
    </div>
  );
}

function landingPageDescription () {
  return (
    <div>
      <h3 className="unbold">
        There's still love for traditional web dev. This one untilizes Node and React, hosted on FastComet.
      </h3>
      <h3 className="unbold">
        I added SendGrid integration as well for those who may want to reach out.
      </h3>
    </div>
  );
}

export default App;
