const button = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//The SpeechRecognition interface of the Web Speech API is the controller interface for the recognition service -
//- this also handles the SpeechRecognitionEvent sent from the recognition service.
// WebSpeechAPI is supported by Firefox and Chrome
//  window.webkitSpeechRecognition => for Chrome

const greetings = [
    'I am doing good, how about you?',
    'I am doing fine, you have a great day sir'
];

const weather = [
    'It is a beautiful weather outside',
    'The weather looks good for the day',
    'You may expect a tiny drizzle later today, to make the day more romantic'
];

const recognition = new SpeechRecognition();

recognition.onstart = function(){ // When the button is clicked  
    console.log('Voice Recognition activated, you may speak over the microphone');
};


// onresult property of the SpeechRecognition interface represents an event handler that will run when-
//- the speech recognition service returns a result — a word or phrase has been positively recognized and- 
//- this has been communicated back to the app (when the result event fires.)

recognition.onresult = function(event){ // When the button is clicked 
    const current = event.resultIndex; // This gets the current speech text parameter from the event object returned

    const transcript = event.results[current][0].transcript; // This extracts the current seech text from the parameter(2 levels)
    content.textContent = transcript; // Accessing the actual text and sending to teh <h3> through it's class name
    readOutLoud(transcript); // Passing in the speech converted to the text, as the message to readoutloud()
};

// onspeechend() is another alternative for detecting when the user has stopped talking
// onspeechend property of the SpeechRecognition interface represents an event handler that will run when-
//- speech recognised by the speech recognition service has stopped being detected (when the speechend event fires.)

// Adding the EVentListener to the button
button.addEventListener('click', () => {
    recognition.start();
});

// SpeechSysthesis Feature
function readOutLoud(message){
    const speech =  new SpeechSynthesisUtterance(); // Creating an object of SpeechSynthesisUtterance
    
    speech.text = "You may start talking";  

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    if(message.includes('weather')){
        const weatherReport = weather[Math.floor(Math.random() * weather.length)];
        speech.text = weatherReport;
    }



    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}