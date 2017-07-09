
const AUTH_URL = `${API_URL}/user`;

$(() =>{
  $('form').submit((event) => {
    event.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();

    const User = {
      email,
      password
    }

    login(User)
      .then(result => {
        // console.log(result);
        window.location = `user.html?id=${result.id}`;

      }).catch(error => {
        $('#errorMessage').text(error.responseText);
        $('#errorMessage').show();
      });

  });
});

function login(user) {
  return $.post(`${AUTH_URL}/login`, user);
}
