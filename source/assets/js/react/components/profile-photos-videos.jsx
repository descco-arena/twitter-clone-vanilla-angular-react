import React, { Component, PropTypes } from 'react';

export default class ProfilePhotosVideos extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="sidebarProfile-box">
        <p>
          <strong className="sidebarProfile-title">
            <a href="">
              <svg className="sidebarProfile-title-icon" width="18" height="16" viewBox="0 0 100 80"><g fillRule="evenodd" clipRule="evenodd"><path d="M49.95 79.977c-12.052 0-24.104-.046-36.154.023-4.833.027-8.66-1.693-11.424-5.614C.652 71.946-.006 69.178 0 66.25c.03-15.634.06-31.268.127-46.9.026-5.843 5.11-11.56 11.015-11.982 5.035-.36 10.108-.237 15.164-.233 1.06 0 1.65-.354 2.115-1.214.463-.854 1-1.67 1.516-2.495C31.356 1.158 33.406 0 36.124 0c9.478.004 18.956 0 28.434.002 2.704 0 4.776 1.13 6.21 3.394.25.394.61.745.76 1.17.81 2.314 2.512 2.668 4.783 2.59 4.022-.137 8.057-.016 12.082.122 5.735.196 11.436 5.67 11.455 12.483.02 6.887.082 13.773.1 20.66.024 8.705.11 17.412 0 26.116-.07 5.776-2.706 10.187-8.217 12.462-1.787.737-3.91.927-5.883.94-11.967.082-23.933.04-35.898.04zM75.084 43.09c-.087-7.99-2.313-14.168-7.193-19.31-6.37-6.713-14.134-9.312-23.276-7.19-9.74 2.258-18.64 12.567-18.99 24.148-.258 8.522 2.82 15.646 9.177 21.416 7.204 6.537 17.75 8.005 26.217 3.355 9.245-5.077 13.706-13.084 14.065-22.42zm11.798-13.986v-9.398h-7.01v9.398h7.01z"/><path d="M35.267 43.333c-.015-7.724 2.642-12.645 7.97-15.915 6.012-3.69 14.01-1.932 18.643 3.792 6.16 7.61 4.265 19.77-3.9 25.047-5.877 3.796-13.952 2.556-18.475-2.77-2.872-3.384-4.31-7.232-4.238-10.154z"/></g></svg>
              Photos and videos
            </a>
          </strong>
        </p>
        <ul className="sidebarProfile-list">
          <li className="sidebarProfile-item">
            <a className="sidebarProfile-link" href="">
              <img className="sidebarProfile-image" src="https://pbs.twimg.com/media/CmjOXgXWEAQlN_w.jpg:thumb" alt="" width="83" height="83" />
            </a>
          </li>
          <li className="sidebarProfile-item">
            <a className="sidebarProfile-link" href="">
              <img className="sidebarProfile-image" src="https://pbs.twimg.com/media/CmjOXgXWEAQlN_w.jpg:thumb" alt="" width="83" height="83" />
            </a>
          </li>
          <li className="sidebarProfile-item">
            <a className="sidebarProfile-link" href="">
              <img className="sidebarProfile-image" src="https://pbs.twimg.com/media/CmjOXgXWEAQlN_w.jpg:thumb" alt="" width="83" height="83" />
            </a>
          </li>
          <li className="sidebarProfile-item">
            <a className="sidebarProfile-link" href="">
              <img className="sidebarProfile-image" src="https://pbs.twimg.com/media/CmjOXgXWEAQlN_w.jpg:thumb" alt="" width="83" height="83" />
            </a>
          </li>
          <li className="sidebarProfile-item">
            <a className="sidebarProfile-link" href="">
              <img className="sidebarProfile-image" src="https://pbs.twimg.com/media/CmjOXgXWEAQlN_w.jpg:thumb" alt="" width="83" height="83" />
            </a>
          </li>
          <li className="sidebarProfile-item">
            <a className="sidebarProfile-link" href="">
              <img className="sidebarProfile-image" src="https://pbs.twimg.com/media/CmjOXgXWEAQlN_w.jpg:thumb" alt="" width="83" height="83" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
