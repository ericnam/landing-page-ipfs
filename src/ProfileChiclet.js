import React, { Component } from 'react';

class ProfileChiclet extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <a className="profile-chiclet" href={this.props.url}>
            <span>
              <img src={this.props.imgUrl}/>
              <p>{this.props.displayName}</p>
            </span>
          </a>
      </div>
    );
  }
}

export default ProfileChiclet;
