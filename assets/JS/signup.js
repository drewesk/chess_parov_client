const AUTH_URL = `${API_URL}/user`;

$(() =>{
  $('form').submit((event) => {
    event.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const password = $('#password').val();

    const User = {
      name,
      email,
      password
    }

    signup(User)
      .then(result => {
        window.location = `user.html?id=${result.id}`;

      }).catch(error => {
        $('#errorMessage').text(error.responseText);
        $('#errorMessage').show();
      });

  });
});

function signup(user) {
  return $.post(`${AUTH_URL}/signup`, user);
}
