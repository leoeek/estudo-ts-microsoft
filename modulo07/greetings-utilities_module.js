export function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from GreetingLength_module is " + greeting + ". It is " + greetingLength + " character long");
}
function getLength(message) {
    return message.length;
}
