const userArticles = []
$(document).ready(() => {
  const params = parseQuery(window.location.search);

  getUser(params.id)
  .then(addUser)
  .then(getArticles)
  .then(addArticles)
  .catch(alert('user not found'));

  console.log(getArticles(params.id));

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
  return $.get(`${API_URL}/user/${id}/articles`);
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
  let context = {articles};
  let html = template(context);
  console.log(html);
  $('.articles').html(html);
}
