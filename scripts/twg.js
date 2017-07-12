var showLogin = true;

$( document ).ready( function(){
    console.log( 'jq' );

    $( document ).on( 'click', '#logIn', function(){
      console.log( 'in document on logIn click');
      // do login stuff
      user.email = 'test';
      toggleUser();
    });

    $( document ).on( 'click', '#register', function(){
      console.log( 'in document on register click');

    });

    $( document ).on( 'click', '#showLogIn', function(){
      console.log( 'in document on showLogIn click');
      toggleUser()
    });

    $( document ).on( 'click', '#showRegister', function(){
      console.log( 'in document on showRegister click');
      toggleUser()
    });
    toggleUser();
});

var toggleUser = function(){
  if( user.email!= '' && user.email != 'undefined' ){
    var userText = "<h1>Welcome back, " + user.email + "</h1>";
  }
  else{
    if( showLogin ){
      userText = "<h1>Register</h1><p><input type='text' placeholder='email'/></p><p><input type='password' placeholder='password'/></p><p><input type='password' placeholder='password again'/></p><p><input type='checkbox' />I'm a game creator</p><p><button id='register'>Register</button></p><p>Already have an account? <a id='showLogIn'>Log In</a></p>";
      showLogin = false;
    }
    else{
      userText = "<h1>Login</h1><p><input type='text' placeholder='email'/></p><p><input type='password' placeholder='password'/></p><p><button id='logIn'>Log In</button></p><p>Don't have an account? <a id='showRegister'>Register</a></p>";
      showLogin = true;
    }
  } //end
  $( '#userDiv' ).empty();
  $( '#userDiv' ).append( userText );
} // end toggleUser
