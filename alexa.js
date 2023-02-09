let recognition = new webkitSpeechRecognition();
recognition.onresult = function (event) {
  let text = event.results[0][0].transcript;
  document.getElementById("output").innerHTML = text;

  read(text);
};

function read(text) {
  let speech = new SpeechSynthesisUtterance();
  speech.text = text;
  if (text == "hello") {
    speech.text = "assalamualaikum I am your voice assistance Alexa. ";
  } else if (text == "what is my name") {
    speech.text = "Your name is Maruf";
  } else if (text == "How are you") {
    speech.text = "I am Fine. And you?";
  } else if (text == "I am fine") {
    speech.text = "Very good";
  } else if (text == "bye") {
    speech.text = "Thank you, assalamualaikum";
  } else if ((text == "assalamualaikum")) {
    speech.text = "olaikumussalam"
  } else {
    speech.text = "Sorry, Please try again.";
  }

  document.getElementById("result").innerHTML = speech.text;

  window.speechSynthesis.speak(speech);
}
