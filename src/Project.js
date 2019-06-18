import React, { Component } from 'react';

class Project extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="project">
        <header>
          <h3><a href={this.props.projectUrl}>{this.props.projectName}</a></h3>
        </header>
        
        <span className="sub-header">        
          {this.props.projectDescription}
        </span>
      </div>
    );
  }
}

export default Project;
