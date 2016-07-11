import React, { Component, PropTypes } from 'react';

export default class MainMenu extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <nav className="mainMenu" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement" role="navigation">
        <h3 className="mainMenu-title" itemprop="about">Menu principal</h3>
        <ul className="mainMenu-list">
          <li className="mainMenu-item">
            <a className="mainMenu-link" href="" itemprop="url">
              <svg className="mainMenu-icon" xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 100 92"><path fill-rule="evenodd" clip-rule="evenodd" d="M88.553 46.2c-.83 2.448-1.487 4.093-1.944 5.79-2.967 11.018-6.01 22.015-8.768 33.084-1.186 4.76-3.69 6.98-8.682 6.922-12.733-.147-25.47-.152-38.202.002-4.99.06-7.483-2.11-8.65-6.9-2.58-10.6-5.483-21.124-8.304-31.665-.585-2.19-1.387-4.322-2.338-7.248C9.66 47.5 8.31 48.99 6.752 49.25c-2.03.34-5.054.45-6.107-.727-1.02-1.14-.724-4.36.153-6.07.986-1.923 3.264-3.187 4.99-4.726C18.75 26.167 31.72 14.612 44.683 3.052c4.538-4.046 6.068-4.058 10.53-.1 13.855 12.294 27.72 24.58 41.575 36.876.864.768 2.184 1.47 2.416 2.416.5 2.045 1.312 4.926.34 6.16-.945 1.2-4.006 1.175-6.04.918-1.44-.18-2.718-1.646-4.953-3.123zM50.36 52.193c7.135-.035 12.42-4.853 12.423-11.326.005-6.73-5.325-11.55-12.753-11.53-7.438.02-12.896 4.97-12.777 11.586.117 6.544 5.658 11.308 13.107 11.27zm6.473 17.965c.037-4.116-2.617-6.946-6.578-7.016-4.14-.074-7.186 2.985-7.08 7.114.1 3.957 2.984 6.774 6.93 6.77 4-.004 6.692-2.752 6.728-6.87z"/></svg>
              <span className="mainMenu-text" itemprop="name">Home</span>
            </a>
          </li>
          <li className="mainMenu-item">
            <a className="mainMenu-link" href="" itemprop="url">
              <svg className="mainMenu-icon" xmlns="http://www.w3.org/2000/svg" width="10.5" height="21" viewBox="0 0 46 92"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.292 31.3c6.446 0 11.735-.08 17.022.023 4.725.093 5.857 1.852 3.487 5.92-10.184 17.47-20.48 34.874-30.86 52.228-.696 1.163-2.42 1.7-3.668 2.53-.41-1.666-1.394-3.43-1.137-4.982 1.834-11.05 3.724-22.1 6.023-33.06.935-4.452-.866-5.41-4.555-5.305-13.882.39-11-1.09-8.583-11.622C4.45 26.438 7.315 15.94 9.602 5.318 10.5 1.15 12.5-.18 16.49.02c4.98.246 9.98.115 14.972.048 4.026-.053 5.116 1.677 3.506 5.335-2.83 6.427-5.656 12.854-8.414 19.313-.763 1.786-1.276 3.68-2.262 6.583z"/></svg>
              <span className="mainMenu-text" itemprop="name">Moments</span>
            </a>
          </li>
          <li className="mainMenu-item">
            <a className="mainMenu-link" href="" itemprop="url">
              <svg className="mainMenu-icon" xmlns="http://www.w3.org/2000/svg" width="16.8" height="21" viewBox="0 0 74 92"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M74 36.33c-.475 2.194-.988 6.162-2.21 9.893-3.097 9.438-5.44 18.844-3.723 28.96.85 5.02-2.142 6.775-7.682 4.78-16.034-5.774-32.03-11.66-48.04-17.504-2.815-1.03-5.69-1.916-8.436-3.114-4.542-1.984-5.19-5.012-1.622-8.396 7.167-6.804 11.992-15.013 15.525-24.2 4.864-12.647 13.415-20.9 27.403-22.465 1.812-.203 3.428-1.798 5.244-2.425 2.376-.818 5.324-2.432 7.18-1.653 2.113.887 3.454 3.933 4.83 6.223 1.155 1.917 1.405 4.556 2.872 6.077C71.322 18.71 73.747 26.15 74 36.33zM29.61 79.854l19.934 7.357c-3.787 4.674-7.753 5.802-12.722 3.93-4.56-1.718-7.208-5.54-7.21-11.286z"/></g></svg>
              <span className="mainMenu-text" itemprop="name">Notifications</span>
            </a>
          </li>
          <li className="mainMenu-item">
            <a className="mainMenu-link" href="" itemprop="url">
              <svg className="mainMenu-icon" xmlns="http://www.w3.org/2000/svg" width="22.3" height="21" viewBox="0 0 98 92"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M.014 9.4c13.692 11.266 26.75 21.622 39.35 32.517 7.66 6.627 12.48 5.977 19.27.08 12.44-10.804 25.394-21.008 38.768-31.98.26 1.844.564 3.015.566 4.186.033 14.41.05 28.817.006 43.226-.02 6.875-2.337 9.187-9.25 9.204-17.296.042-34.593-.104-51.885.148-2.473.036-5.46 1.28-7.28 2.976-6.885 6.41-13.29 13.334-20.108 19.82-1.45 1.38-4.55 2.92-5.704 2.268-1.782-1.008-3.56-3.833-3.58-5.903C-.07 60.787.014 35.63.014 9.4z"/><path d="M10.207 0H89.55C78.92 8.232 69.08 15.87 59.22 23.487c-10.062 7.773-10.065 7.76-20.12.015C29.327 15.975 19.543 8.46 9.764.94l.443-.94z"/></g></svg>
              <span className="mainMenu-text" itemprop="name">Messages</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
