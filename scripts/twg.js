var showLogin = true;

$( document ).ready( function(){
    console.log( 'jq' );

    $( document ).on( 'click', '#addCreation', addCreation );

    $( document ).on( 'click', '#logIn', function(){
      console.log( 'in document on logIn click');
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

var addCreation = function(){
  console.log( 'in addCreation');
  var newCreation = new Creation( user.email, $( '#description').val(), -1, $( '#imageUrl').val(), $( '#name').val(), $( '#pcUrl').val(), $( '#macUrl').val(), $( '#androidUrl').val() );
  creations.push( newCreation );
  $( '#description').val();
  $( '#imageUrl').val();
  $( '#name').val();
  $( '#pcUrl').val();
  $( '#macUrl').val();
  $( '#androidUrl').val();
  showCreations();
}; //end addCreation

var showCreations = function(){
  if( creations.length > 0 ){
    $( '#myCreationsDiv' ).append( '<h1>My Games</h1>' );
    for( var i = 0; i< creations.length; i++ ){
      $( '#myCreationsDiv' ).append( '<div id="game' + i + 'Div">' );
      $( '#myCreationsDiv' ).append( '<h2>' + creations[i].name +'</h2>' );
      $( '#myCreationsDiv' ).append( '<p>' + creations[i].description +'</p>' );
      $( '#myCreationsDiv' ).append( '<p><img src="' + creations[i].imageUrl +'"  width="93%"/></p>' );
      //     <a>PC</a> <a>Mac</a> <a>Android</a>
      //   </p>
      $( '#myCreationsDiv' ).append( '</div>' );
    } // end each creation
    $( '#myCreationsDiv' ).show();
  } // end there are creations
  else{
    $( '#myCreationsDiv' ).hide();
  }

}; //end showCreations

var toggleUser = function(){
  if( user.email!= '' && user.email != 'undefined' ){
    var userText = "<h1>Welcome back, " + user.email + "</h1>";
    $( '#mySubscriptionsDiv' ).show();
    if( user.creator ){
    $( '#newCreationDiv' ).show();
    $( '#myCreationsDiv' ).show();
    } // end is creator
  } // end logged in
  else{
    if( showLogin ){
      userText = "<h1>Register</h1><p><input type='text' placeholder='email'/></p><p><input type='password' placeholder='password'/></p><p><input type='password' placeholder='password again'/></p><p><input type='checkbox' />I'm a game creator</p><p><button id='register'>Register</button></p><p>Already have an account? <a id='showLogIn'>Log In</a></p>";
      showLogin = false;
    } // end show login
    else{
      userText = "<h1>Login</h1><p><input type='text' placeholder='email'/></p><p><input type='password' placeholder='password'/></p><p><button id='logIn'>Log In</button></p><p>Don't have an account? <a id='showRegister'>Register</a></p>";
      showLogin = true;
    } //end show register
  } //end
  $( '#userDiv' ).empty();
  $( '#userDiv' ).append( userText );
} // end toggleUser
