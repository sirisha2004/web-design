function greet(name) {
    console.log("Hello," + name +
    "!");
}
function
sayHelloWithDelay(callback) {
    setTimeout(function() {
        callback("john");
    },2000);
}
sayHelloWithDelay(greet);//

