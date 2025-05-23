import * as authenticator from "./authenticator";

var formattedKey = authenticator.generateKey();
console.log(formattedKey);
// "acqo ua72 d3yf a4e5 uorx ztkh j2xl 3wiz"

var formattedToken = authenticator.generateToken(formattedKey, 30);
console.log(formattedToken);
// "957 124"

var result = authenticator.verifyToken(formattedKey, formattedToken, 30);
console.log(result);
// { delta: 0 }

result = authenticator.verifyToken(formattedKey, "000-000", 30);
console.log(result);
// null

// result will allways be one of
// (failure) null
// (success) { delta: -1 }, { delta: 0 }, or { delta: 1 }
// delta lets you know which way time drift is occurring
