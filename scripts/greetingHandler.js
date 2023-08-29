//Start greeting "type" effect-----------------------------------------------------------------

//Start the helper chain method to have an easy way to modify how this effect starts, and what it looks like going through.
function newGreeting(elementID)
{
    //Call step one.
    eraseGreeting(elementID);
}

//Start method to gradually delete the text in the element as specified by the ID.
async function eraseGreeting(elementID)
{
    /*
    //Put the length of the element's text string in it's own identifying variable.
    let upperBound = elementID.innerText.length;

    //Start a for loop to iterate through the text in the element.
    for (let i = 0; i < upperBound; i++)
    {
        //Keep track of the message with it's own variable.
        message = elementID.innerText;
        //set the element text to the element text, except for the last letter.
        elementID.innerText = message.slice(0, message.length-1);
        //Add an underscore to mimic a cursor moving through the text.
        elementID.innerText+="_";
        //Wait for a little bit for the user to be able to see the effect.
        await sleep(400);
        //Remove the cursor added from the last step.
        elementID.innerText = message.slice(0, message.length-1);*/
        let currentMessage = elementID.innerText;
        let upperBound = elementID.innerText.length;

        for (let i = upperBound; i>=0; i--)
        {
            elementID.innerText= currentMessage.substr(0, i);
            //Add an underscore to mimic a cursor moving through the text.
            elementID.innerText+="_";
            //Wait for a little bit for the user to be able to see the effect.
            await sleep(120);
        }
    

    //Call the next step.
    writeGreeting(elementID);
}

//Start a method to write a new random greeting.
async function writeGreeting(elementID)
{
    //Start an array to hold all potential greetings.
    const greetings = ["Hey there!", 
                       "Welcome in.", 
                       "Glad to have you in.", 
                       "Good to see you.", 
                       "Hello!", 
                       "Take a look around!", 
                       "Nice of you to stop by!",
                       "Let's get to know each other.",
                       "Let's have a chat.",
                       "Over here, stranger!",
                       "Well met.",
                       "A pleasant welcome to you.",
                       "Now in dark mode.",
                       "Corey says 'hi'!"
                      ];

    //Choose a random greeting from the above array by using the index as a random number from 0 to the length of the array.
    chosenGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    //For as long as the next greeting matches the current one,
    while (chosenGreeting == elementID.innerText)
    {
        //Choose another one.
        chosenGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    }

    //Put the length of the element's text string in it's own identifying variable.
    upperBound = chosenGreeting.length;

    //Start a for loop to iterate through the text in the chosen greeting.
    for (let i = 0; i <= upperBound; i++)
    {
        //Set the text of the element to the first {i} letters of the chosen greeting.
        elementID.innerText = chosenGreeting.substr(0,i);
        //Add an underscore to the element text to give the illusion of a cursor writing the message.
        elementID.innerText+="_";
        //Wait so the user can see this effect going on.
        await sleep(100);
    }
    //Make sure the greeting at the end matches the chosen greeting, in case the iteration malfunctioned.
    elementID.innerText = chosenGreeting;
    //Wait for quite some time for the user to read the text.
    await sleep(10000);
    //Restart the effect to generate a new greeting.
    eraseGreeting(elementID);
}

//End greeting "type" effect-------------------------------------------------------------------

//Start a method to wait a specific amount of milliseconds.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}