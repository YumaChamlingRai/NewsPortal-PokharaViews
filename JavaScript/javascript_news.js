// Function to initialize Facebook SDK
window.fbAsyncInit = function () {
    FB.init({
      appId: 'YOUR_FACEBOOK_APP_ID',
      cookie: true,
      xfbml: true,
      version: 'v12.0'
    });
  };

  // Load Facebook SDK asynchronously
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Function to handle Facebook signup
  function signupWithFacebook() {
    FB.login(function (response) {
      if (response.authResponse) {
        console.log('Facebook login success:', response);
        // Add your code to handle the successful Facebook login
      } else {
        console.log('Facebook login failed:', response);
      }
    }, { scope: 'email' });
  }

  // Function to handle Gmail signup
  function signupWithGoogle() {
    gapi.load('auth2', function () {
      gapi.auth2.init({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
      }).then(function (auth2) {
        auth2.signIn().then(function (googleUser) {
          console.log('Google login success:', googleUser);
          // Add your code to handle the successful Google login
        }, function (error) {
          console.log('Google login failed:', error);
        });
      });
    });
  }



  