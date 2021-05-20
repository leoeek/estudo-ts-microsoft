import { returnGreeting } from './greeting_modules';
import * as allGreetingFunctions from './greetings-utilities_module';
import { returnGreeting as returnGreetingLength } from './greetings-utilities_module';
returnGreeting('Hola!'); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
