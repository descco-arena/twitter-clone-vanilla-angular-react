import { textToLinks, thousandsFormatter, dateMonthYear } from '../utils/miscellaneous';

/**
 *
 *
 *
 *
 */
export default class GetUser {

  constructor(data) {
    this.infoUser = this.getData(data);

    this.insertBackgroundImage();
    this.insertProfileNumbers();
    this.insertProfileSidebar();
  }

  getData(data) {
    const infoUser = {
      name : data.name,
      username : data.screen_name,
      location: data.location,
      description: data.description,
      url: data.entities.url.urls[0].url,
      displayUrl: data.entities.url.urls[0].display_url,
      created: data.created_at,
      followersCount: thousandsFormatter(data.followers_count),
      followingCount: thousandsFormatter(data.friends_count),
      likesCount: thousandsFormatter(data.favourites_count),
      tweetsCount: thousandsFormatter(data.statuses_count),
      backgroundImage: `${data.profile_banner_url}/1500x500`,
      avatar: data.profile_image_url.replace('normal', '200x200')
    };

    return infoUser;
  }

  insertBackgroundImage(){
    let $container = document.getElementById('js-backgroundImage');
    let html = `<img src="${this.infoUser.backgroundImage}" alt="">`;

    $container.innerHTML = html;
  }

  insertProfileNumbers(){
    let $container = document.getElementById('js-profileNumbers');
    let html = `
    <ul class="profileNumbers-list">
      <li class="profileNumbers-item">
        <a class="profileNumbers-link on" href="">
          <span class="profileNumbers-title">Tweets</span>
          <em class="profileNumbers-amount">${this.infoUser.tweetsCount}</em>
        </a>
      </li>
      <li class="profileNumbers-item">
        <a class="profileNumbers-link" href="">
          <span class="profileNumbers-title">Following</span>
          <em class="profileNumbers-amount">${this.infoUser.followingCount}</em>
        </a>
      </li>
      <li class="profileNumbers-item">
        <a class="profileNumbers-link" href="">
          <span class="profileNumbers-title">Followers</span>
          <em class="profileNumbers-amount">${this.infoUser.followersCount}</em>
        </a>
      </li>
      <li class="profileNumbers-item">
        <a class="profileNumbers-link" href="">
          <span class="profileNumbers-title">Likes</span>
          <em class="profileNumbers-amount">${this.infoUser.likesCount}</em>
        </a>
      </li>
    </ul>`;

    $container.innerHTML = html;
  }

  insertProfileSidebar(){
    let $container = document.getElementById('js-profileSidebar');
    let html = `
      <dl class="profileCard">
        <dt class="profileCard-avatar">
          <a class="profileCard-avatar-link" href="">
            <img class="profileCard-avatar-image" src="${this.infoUser.avatar}" alt="americanas.com" width="200" height="200">
          </a>
        </dt>
        <dd class="profileCard-name">
          <a class="profileCard-link" href="">
            ${this.infoUser.name}
            <svg class="profileCard-name-verified" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 100 100"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.66 10.563c5.885-13.32 25.677-14.81 32.794-.05 7.42-2.36 14.017-1.042 19.347 4.82 5.22 5.74 6.4 12.43 4.08 19.903 6.52 3.483 9.89 9.128 10.11 16.45.216 7.307-2.743 13.18-9.07 17.267.506 5.096-.596 9.874-3.755 14.046-3.766 4.973-8.724 7.675-15.078 7.387-1.32-.06-2.667-.306-3.925-.706-1.305-.414-1.948-.105-2.63 1.096-2.17 3.826-5.318 6.644-9.497 8.124-5.755 2.04-11.17 1.222-16.177-2.26-2.69-1.87-4.77-4.27-6-7.098-2.323.313-4.496.864-6.665.852-7.484-.04-12.61-3.946-16.05-10.33-1.542-2.86-2.05-5.985-1.92-9.2.055-1.307-.304-2.138-1.416-2.985C2.762 64.037-.07 58.88 0 52.516c.08-7.133 3.003-12.93 9.28-16.69 1.138-.68.704-1.35.52-2.166-1.603-7.07-.274-13.444 4.8-18.765 4.962-5.203 11.043-6.525 17.9-4.687.395.104.78.237 1.16.355zm8.696 46.226c-2.724-2.61-5.292-5.18-7.995-7.603-.958-.86-2.173-1.563-3.394-1.974-1.68-.564-4.113.67-5.03 2.25-1.262 2.17-1.283 4.367.132 5.816 4.087 4.184 8.205 8.34 12.368 12.448 1.733 1.71 4.318 2.142 6.107 1.1.78-.455 1.462-1.107 2.106-1.752 8.862-8.867 17.727-17.73 26.53-26.653.78-.79 1.328-1.932 1.654-3.01.637-2.103-.438-4.267-2.44-5.396-1.867-1.052-4.425-.71-5.9.76-7.902 7.877-15.808 15.75-23.714 23.62-.175.178-.365.338-.424.392z"/></svg>
          </a>
        </dd>
        <dd class="profileCard-username">
          <a class="profileCard-link" href="">@${this.infoUser.username}</a>
        </dd>
        <dd class="profileCard-description">${textToLinks(this.infoUser.description)}</dd>
        <dd class="profileCard-country">
          <svg class="profileCard-icon" xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 66 100"><path fill-rule="evenodd" clip-rule="evenodd" d="M.03 33.292C-.363 16.554 11.91 4.6 23.65 1.302c18.272-5.13 36.744 5.345 41.287 23.41 1.858 7.393 1.287 14.66-1.777 21.58-6.883 15.542-13.983 30.99-22.068 45.953-1.152 2.133-2.567 4.196-4.202 5.977-2.267 2.468-5.614 2.333-7.856-.19-1.23-1.383-2.258-2.992-3.157-4.62-8.127-14.718-15.41-29.857-22.282-45.193C1.468 43.472-.255 38.572.03 33.29zM32.993 52.86c11.374.102 19.55-8.954 19.892-18.816.44-12.71-9.848-20.827-19.557-20.836-10.97-.01-20.264 8.956-20.088 19.91.174 10.85 8.783 19.842 19.752 19.74z"/></svg>
          ${this.infoUser.location}
        </dd>
        <dd class="profileCard-website">
          <a class="profileCard-link" href="${this.infoUser.url}">
            <svg class="profileCard-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 100 100"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M79.027 52.55c-1.432-2.98-2.988-6.148-4.438-9.354-.153-.336.176-1.024.518-1.34 3.14-2.91 6.43-5.69 9.48-8.668 4.212-4.116 5.135-9.01 2.99-14.163-2.118-5.08-6.42-7.93-12.45-8.615-4.98-.566-9.133.855-12.638 4.028-6.024 5.454-12.105 10.857-18.09 16.346-2.61 2.395-4.552 5.156-4.913 8.648-.613 5.93 2.793 11.333 8.797 13.82 5.128 2.127 6.18 6.55 2.503 10.44-.513.542-.95.747-1.82.592-10.23-1.82-18.91-9.743-20.563-19.212-1.433-8.197.99-15.377 7.68-21.28 6.654-5.87 13.14-11.9 19.883-17.686 9.368-8.04 25.085-8.12 34.68-.354 8.968 7.257 11.766 17.54 7.175 27.554-1.14 2.484-2.888 4.894-4.924 6.86-4.51 4.36-9.382 8.414-13.87 12.384z"/><path d="M20.868 47.198l4.533 10.39c-2.812 2.536-5.817 5.296-8.888 7.995-3.335 2.933-5.377 6.376-5.226 10.655.207 5.817 3.313 10.12 9.164 12.4 5.79 2.258 11.517 1.51 16.147-2.435 6.652-5.67 13.13-11.52 19.43-17.507 6.03-5.73 6.067-13.003.24-18.854-1.393-1.397-3.388-2.53-5.352-3.192-3.992-1.347-5.504-7.452-1.91-10.367.452-.367 1.3-.627 1.884-.53 10.615 1.754 19.57 10.67 20.68 20.343.894 7.77-1.555 14.443-7.687 19.977-6.508 5.875-12.957 11.806-19.59 17.563-10.603 9.2-27.942 8.236-37.718-1.68-8.96-9.086-8.862-23.922.898-32.622 4.34-3.87 8.584-7.826 12.875-11.74.212-.19.46-.35.52-.396z"/></g></svg>
            ${this.infoUser.displayUrl}
          </a>
        </dd>
        <dd class="profileCard-joinDate">
          <svg class="profileCard-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 102"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M20.967 10.66c0-2.14-.007-4.267 0-6.392.013-2.94 1.322-4.24 4.28-4.248 2.803-.008 5.608-.016 8.412.002 2.775.017 4.218 1.47 4.226 4.224.006 2.125 0 4.25 0 6.466h24.276c0-2.046-.01-4.112.007-6.177.004-.677-.023-1.38.152-2.023.39-1.432 1.867-2.458 3.583-2.48 3.172-.04 6.345-.05 9.517.002 2.133.037 3.568 1.546 3.594 3.68.028 2.305.006 4.61.006 7.088 1.93 0 3.75-.02 5.572.005 2.48.035 4.973-.052 7.432.197 4.565.46 7.924 4.225 7.952 8.77.04 6.445.01 12.892.01 19.34 0 17.796.006 35.593-.002 53.39-.002 4.5-2.53 7.988-6.637 9.063-1.14.3-2.357.412-3.538.413-26.573.022-53.146.02-79.72.014-5.165 0-8.67-2.46-9.79-6.883-.23-.91-.29-1.882-.29-2.825-.015-23.835-.014-47.67-.01-71.506 0-4.957 2.427-8.46 6.707-9.57 1.094-.283 2.264-.372 3.402-.39 3.447-.052 6.896-.026 10.344-.034.088 0 .176-.04.51-.126zm29.125 11.132h-36.27c-2.612 0-3.082.448-3.082 2.98-.002 21.11-.003 42.22 0 63.328 0 2.538.373 2.905 2.956 2.906 24.18.004 48.36.004 72.542 0 2.655 0 3.002-.36 3.003-2.988V24.962c0-2.8-.364-3.17-3.152-3.17H50.092z"/><path d="M43.133 36.858c.012-3.84 3.02-6.765 6.93-6.742 3.77.023 6.818 3.022 6.85 6.746.032 3.687-3.18 6.87-6.92 6.86-3.83-.01-6.87-3.052-6.86-6.864zM50.08 70.15c3.72.028 6.817 3.096 6.833 6.762.016 3.67-3.21 6.847-6.938 6.832-3.792-.015-6.867-3.104-6.843-6.872.026-3.806 3.072-6.753 6.948-6.722zM49.978 63.674c-3.82.007-6.82-2.93-6.844-6.706-.024-3.82 3-6.823 6.87-6.818 3.78.004 6.84 2.977 6.91 6.713.07 3.706-3.084 6.805-6.936 6.81zM27.132 30.117c3.637-.013 6.65 3.043 6.645 6.742-.004 3.7-3.018 6.847-6.572 6.865-3.78.02-7.19-3.198-7.208-6.8-.02-3.65 3.276-6.793 7.135-6.808zM27.186 70.146c3.57-.013 6.54 2.98 6.587 6.64.05 3.738-3.025 6.975-6.612 6.96-3.793-.018-7.153-3.224-7.164-6.837-.01-3.61 3.33-6.752 7.19-6.764zM27.115 63.664c-3.862-.01-7.137-3.157-7.12-6.84.02-3.6 3.4-6.69 7.308-6.677 3.546.01 6.498 3.102 6.474 6.778-.024 3.71-3.03 6.75-6.662 6.74zM66.243 36.912c-.04-3.73 2.893-6.77 6.558-6.794 3.85-.027 7.16 3.095 7.168 6.757.007 3.553-3.284 6.776-6.992 6.848-3.64.07-6.692-3.017-6.733-6.81zM72.906 63.664c-3.73.014-6.68-2.995-6.665-6.805.015-3.772 2.93-6.73 6.608-6.712 3.776.02 7.07 3.106 7.118 6.668.05 3.66-3.223 6.833-7.06 6.848z"/></g></svg>
          Joined ${dateMonthYear(this.infoUser.created)}
        </dd>
        <dd class="profileCard-NewTweet">
          <button class="profileCard-NewTweet-button" type="button">
            <svg class="profileCard-NewTweet-button-icon" xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 88 92"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M88 0c-.557 3.33-1.993 6.18-4.275 8.342-2.92 2.765-6.23 5.117-9.362 7.656-2.03 1.645-4.042 3.308-5.945 5.177 5.093.202 9.655-1.44 14.308-3.593-.133.487-.194.83-.32 1.148-2.547 6.476-7.31 10.667-13.65 13.214-2.735 1.1-5.556 2.023-8.2 3.312-1.63.794-2.997 2.127-4.366 3.43 4.694.59 9.043-.508 13.47-1.987-.553 2.555-1.883 4.45-3.685 5.987-4.93 4.203-10.692 6.792-16.99 7.99-5.854 1.116-10.69 3.858-14.893 7.967-4.918 4.81-8.586 10.537-12.25 16.292-3.15 4.947-6.463 9.79-9.747 14.65-.492.727-1.175 1.35-1.854 1.922-.99.837-1.758.6-1.778-.685-.024-1.52.16-3.102.575-4.564 2.244-7.904 5.873-15.214 9.876-22.34 7.67-13.645 16.49-26.48 27.23-37.91 8.53-9.078 18.07-16.867 29.55-21.94C79.32 2.467 83.185 1.405 86.945.112c.29-.097.62-.07 1.055-.112zM8.47 20.888v1.845c0 10.158.01 20.315-.016 30.473-.002.925-.094 1.9-.398 2.763-.67 1.9-2.61 2.887-4.655 2.533-1.82-.315-3.27-1.908-3.354-3.815-.072-1.643-.038-3.29-.04-4.937C.007 40.3 0 30.847.01 21.395c.004-5.493 3.478-8.935 8.998-8.938 6.53-.003 13.058-.002 19.586 0 3.002 0 4.886 1.653 4.86 4.254-.025 2.58-1.902 4.175-4.92 4.176-6.105.003-12.21 0-18.318 0-.51.002-1.02.002-1.743.002zM75.388 75.362V73.14c0-4.704-.006-9.408.002-14.113.005-2.75 1.738-4.647 4.212-4.642 2.476.007 4.2 1.894 4.206 4.638.01 5.315.01 10.632 0 15.948-.008 5.205-3.383 8.647-8.598 8.74-2.35.04-4.7.007-7.048.007-8.552 0-17.104.007-25.656-.004-2.44-.004-4.135-1.25-4.6-3.32-.6-2.652 1.37-5.023 4.227-5.026 10.48-.012 20.957-.005 31.435-.005h1.82z"/></g></svg>
            <span class="profileCard-NewTweet-button-text">Tweet to americanas.com</span>
          </button>
        </dd>
      </dl>
    `;

    $container.innerHTML = html;
  }
}
