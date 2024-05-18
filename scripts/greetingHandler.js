//Start greeting "type" effect-----------------------------------------------------------------

//Start the helper chain method to have an easy way to modify how this effect starts, and what it looks like going through.
function newGreeting(elementID)
{
    //Start a variable to keep track of the current greeting's index set it at -1 to ensure we can still pick the first greeting (more on that later)
    greetingIndex = -1;
    //Call step one.
    eraseGreeting(elementID);
}

//Start method to gradually delete the text in the element as specified by the ID.
async function eraseGreeting(elementID)
{
    //Keep track of the current text of the element.
    let currentMessage = elementID.innerText;
    //Keep track of the length of the element.
    let upperBound = elementID.innerText.length;

    //While there are letters to hide,
    for (let i = upperBound; i>=0; i--)
    {
        //Hide a letter from the end of the element's text.
        elementID.innerText= currentMessage.substr(0, i);
        //Add an underscore to mimic a cursor moving through the text.
        elementID.innerText+="_";
        //Wait for a little bit for the user to be able to see the effect.
        await sleep(60);
    }
    
    //Call the next step.
    writeGreeting(elementID);
}

//Start a method to write a new random greeting.
async function writeGreeting(elementID)
{
    //Start an array to hold all potential greetings.
    const greetings = [

        "Where are we going from here?",
        "Take a look at my photography, and tell me what you think!",
        "I have some projects on my GitHub that you should check out.",
        "There's a page on my design philosophies, if you want to see what we agree on.",
        "It's great to have you stop by.",
        "I'm always open to some tips and tricks! Feel free to give me some suggestions!",
        "All photos and graphics on this site are made by me!"

                      ];
    //Choose a new greeting                  
    newGreetingIndex = Math.floor(Math.random() * greetings.length);

    //For as long as the next greeting matches the current one,
    while (greetingIndex == newGreetingIndex)
    {
        //Choose another one.
        newGreetingIndex = Math.floor(Math.random() * greetings.length);
    }
    //Remember the current greeting index to compare again.
    greetingIndex = newGreetingIndex;
    //set the chosen greeting to fill the html content
    chosenGreeting = greetings[newGreetingIndex];

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
        await sleep(50);
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