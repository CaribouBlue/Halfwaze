<<<<<<< HEAD
// TODO : Make a get request to the Yelp API and get a list of locations

=======
//takes an object
function yelpRequest(location, term = food, dist = 1000) {
  var long =;
  var lat =;
  var url = `https://api.yelp.com/v3/businesses/search&term=${term}&latitude=${lat}&longitude=${long}&radius=${dist}&limit=20`;
  return url;
};
>>>>>>> 785cf74e0b7ad5168b238d4228b11d1743e29a6e
