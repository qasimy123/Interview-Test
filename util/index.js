const setRememberCookies = (rememberMe, req) => {
  if (rememberMe === 'on') {
    // Allow the user to be remembered by the server. When they close the browser and end their session they should not have to login again once they attempt to go to the homepage
    req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;  // Expires after 30 days
  } else {
    // Do not remember the user
    req.session.cookie.expires = false;
  }
}
module.exports = {
  setRememberCookies
}