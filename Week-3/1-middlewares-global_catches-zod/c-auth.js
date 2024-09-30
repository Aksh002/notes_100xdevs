// Dumb way:- To ask the user for username and password in all requests as headers, evn though we using middleware

// Better way:-
//              1- Give the user back a token on signup/signin
//              2- Ask the user fore token in all future requests
//              3- WHen the user logs out ask the user to forget the token(or revoke it from the backend)
// This is how auth happens in real world
 