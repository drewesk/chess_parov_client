const API_URL = ifLocalURL();

$(document).ready(() => {
  const params = parseQuery(window.location.search);

  getUser(params.id)
  .then(addUserInfo)
  .then(getArticles)
  .then(addArticles)
  .catch(alert('user not found'));

});

function parseQuery(query) {
  return query.substr(1).split('&').reduce((params, keyValue) => {
    const fragment = keyValue.split('=');
    params[fragment[0]] = fragment[1];
    return params
  }, {});
}
function getUser(id) {
  return $.get(`${API_URL}/user/${id}`);
}

function getArticles(id) {
  return $.get(`${API_URL}/user/${id}/article`);
}

function addUser(user) {
  let source = $("#user-template").html();
  let template = Handlebars.compile(source);
  let context = user;
  let html = template(context);
  $('.user').html(html);
  return user.id;
}

function addArticles(articles) {
  let source = $("#article-template").html();
  let template = Handlebars.compile(source);
  let context = {stickers};
  let html = template(context);
  $('.articles').html(html);
}

function ifLocalURL() {
  let localHost = window.location.host.indexOf('localhost') != -1;
  (localHost) ? 'http://localhost:3000' : alert("Error can't find port 3000");
}
