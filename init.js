
// Import the readline module and create an interface for reading input/output from the console
const readline = require('readline').createInterface({
  input: process.stdin,   // Take input from the standard input (keyboard)
  output: process.stdout  // Output text to the console
});

// Title for the bot
const title = "THE STORY BOT";

/**
 * Function to ask for the user's name before starting the conversation
 */
function AskName() {
  console.log("WELCOME TO THE " + title); // Display the bot title
  // Ask the user for their name (or to type "exit" to quit)
  readline.question('Hello, write your hero name: ', input => 
    readline.question('Hello, write your fRiend1name:  ', input2 =>
      readline.question('Hello, write your enemey name: ', input3 =>
        
        {
    
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("This is all the story I got, THanks for listening, BYE!"); // Farewell message
      readline.close(); // Close the input stream to end the program
      return;

    }
    // Assign the input string (user's name) to the myName variable
    myName = input;
    fRiend1 = input2;
    eNemy1 = input3;

    console.log(

          "Here is hero " + myName +
          " and friend " + fRiend1+
          " and enemy " + eNemy1+
          " story altogether for you"
        );

    // After getting the name, start the conversation loop
    AskFunction();
  })));
}

// Start the program by asking for the user's name
AskName();


// Initialize variables
let myName = "Hye";  // Default name if user doesn't provide one
let chatCount = 0;          // Counter to track how many times the user has chatted
let fRiend1= "fRiend1";
let eNemy1= "eNemy1";

/**
 * Function that repeatedly asks the user for input (chatting loop)
 */
function AskFunction() {
  // Prompt the user to say something (or type "exit" to quit)
  readline.question('Press enter to continue'+" "+"(type \"exit\" to quit):", input => {
    
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, " + myName + ". BYE!"); // Farewell message
      console.log("You owe me " + chatCount + " dollars."); // Show how many times they've chatted
      readline.close(); // Close the input stream to end the program
      return;
    }
    if (chatCount ===0) {
      console.log(myName +" "+"is a queen who rules the land with kindness and bravery!"); 
      
    }
    if (chatCount ===1) {
      console.log(fRiend1+" "+"is also hero of all village along with the queen!"); 
      
    }
    if (chatCount ===2) {
      console.log(eNemy1+" "+"came to challenge the queen! but"+" "+myName+" "+"is a king as well!"); 
      
    }
    if (chatCount ===3) {
      console.log(myName+" "+"is a knight who fought"+eNemy1+" "+ "and saved the kingdom."); 
     
;
    }
    if (chatCount ===4) {
      console.log(myName+" "+"is a legend that will be remembered forever!"); 
    
;
    }

    // If the user didn't type "exit", keep chatting
    //console.log(input+"is a knight who fought dragons and saved the kingdom."); // Respond with a story
    //console.log("Did you like it?! here is more."); // Acknowledge the user's input

    // Increment chatCount by 1 each time the user chats
    chatCount = chatCount + 1;

    console.log("I've told you story " + chatCount + " times"); // Show how many chats have happened
  
    // If the user has chatted 5 times, end the conversation and prompt for payment
    if (chatCount === 5) {
      console.log("You've already exceeded the maximum amount. " + chatCount); // Alert user they've hit the limit
      console.log("Please pay for the premium service before you continue."); // Prompt for payment
      readline.close(); // End the chat
      return;
    }

    // Recursively call the AskFunction() to keep the chat going
    AskFunction();
  });
}

//Step1. It will ask the user for their name and store it in a variable.
//Step2. It will then greet the user by name and ask me to write infomration about myself --> which I chagned to ask for hero name and put in a story
//Step3. It will display the information about my self (what i inputed) --> which I changed to display a story about the hero name
//Step4. It will keep asking the user tell me more and when it reaches 5 times, it will stop and tell user to pay premium 
//--> which i change to chatbot will tell you more stories.
