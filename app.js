const button = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//The SpeechRecognition interface of the Web Speech API is the controller interface for the recognition service -
//- this also handles the SpeechRecognitionEvent sent from the recognition service.
// WebSpeechAPI is supported by Firefox and Chrome
//  window.webkitSpeechRecognition => for Chrome

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
};

// onspeechend() is another alternative for detecting when the user has stopped talking
// onspeechend property of the SpeechRecognition interface represents an event handler that will run when-
//- speech recognised by the speech recognition service has stopped being detected (when the speechend event fires.)

// Adding the EVentListener to the button
button.addEventListener('click', () => {
    recognition.start();
});