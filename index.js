// create receivesAFunction, takes a callback function
    // invoke callback func

function receivesAFunction(callback) {
    callback();
}

// create returnsANamedFunction, takes no args
    // return named function

function returnsANamedFunction() {
    return function namedFunc() {console.log("I'm a named function!")};
}

// create returnsAnAnonymousFunction, takes no args
    // returns anon func
function returnsAnAnonymousFunction() {
    return () => console.log("I'm an anonymous function!");
}