function newGreeting(elementID)
{
    eraseGreeting(elementID);
}

async function eraseGreeting(elementID)
{
    let upperBound = elementID.innerText.length;
    for (let i = 0; i < upperBound; i++)
    {
        message = elementID.innerText;
        elementID.innerText = message.slice(0, message.length-1);
        elementID.innerText+="_";
        await sleep(180);
        elementID.innerText = message.slice(0, message.length-1);
    }
    writeGreeting(elementID);
}

async function writeGreeting(elementID)
{
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
                       "A pleasant welcome to you."
                      ];
    chosenGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    upperBound = chosenGreeting.length;
for (let i = 0; i <= upperBound; i++)
    {
        elementID.innerText = chosenGreeting.substr(0,i);
        elementID.innerText+="_";
        await sleep(100);
    }
    elementID.innerText = chosenGreeting;
    await sleep(10000);
    eraseGreeting(elementID);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}