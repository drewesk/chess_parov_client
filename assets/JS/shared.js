$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

const API_URL = ifLocalURL();

function ifLocalURL() {
  let localHost = window.location.host.indexOf('localhost') != -1;
  if (localHost) {
    return 'http://localhost:3000'
  } else {
    alert("Error can't find port 3000");
  }
}
