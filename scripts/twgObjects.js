var Creation = function( creator, description, id, imageUrl, name, pcUrl, macUrl, androidUrl ){
  this.creator = creator;
  this.description = description;
  this.id = id;
  this.name = name;
  this.imageUrl = imageUrl;
  this.pcUrl = pcUrl;
  this.macUrl = macUrl;
  this.androidUrl = androidUrl;
  return this;
}; //end Creation

var User = function( email ){
    this.email = email;
    this.creator = true;
    this.addCreation = function( newCreation ){
      console.log( 'adding creation');
      this.creations.push( newCreation );
    }; // end addCreation
    this.addSubscription = function( newSubscription ){
      console.log( 'adding subscription');
      this.subscriptions.push( newSubscription );
    }; // end addSubscription
    return this;
}; // end User

var user = new User( '' );
var creations = [];
