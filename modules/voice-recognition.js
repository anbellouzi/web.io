
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();
//recognition.continuous = false;


const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
const sound = document.querySelector('.sound');

var suggestions = setInterval(suggestedComponent, 3000);

icon.addEventListener('click', () => {
  dictate();

  // ...
    
});


const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
      showProgressBar(false)
  
      const speechToText = event.results[0][0].transcript;
      voiceMessage.innerHTML = '"'+speechToText+'"'
  
      // element params
      var color = '';
      var functionName = '';
      var elementName = '';
  
      // Seperate user speech to word list
      const speechCommands = speechToText.split(" ")
  
      // Extract element params from speech list
      for(var i=0; i<speechCommands.length; i++) {

  
        // check if there is a color
        if (speechCommands[i].toLowerCase() in colorsDic) {
          color = colorsDic[speechCommands[i]]
        }
        // check if there is function name
        else if (speechCommands[i].toLowerCase() in commandsDic) {
          functionName = commandsDic[speechCommands[i]]
          if (functionName == 'create') {
            var tempElement = speechCommands.slice(1, speechCommands.length).join(" ");
            if (tempElement.toLowerCase() in elementsDic) {
              elementName = tempElement
              break;
            }
            else {

            }

          }
        }
        // check if there is an element name
        else if (speechCommands[i].toLowerCase() in elementsDic) {
          elementName = elementsDic[speechCommands[i]]
        }
      }
  
      // get function name from string
      var functionCall = window[functionName]
      // element params
      var params = [elementName, color, speechToText];
      // call function from functionName
      if (typeof functionCall === 'function') functionCall.call(this, params)
    }
  
    recognition.onstart = function() {
      showProgressBar(true)
      // suggestedComponent()
    }
  
    recognition.onspeechend = function() {
      showProgressBar(false)
    }
  
    recognition.speechstart = function() {
      showProgressBar(true)
      voiceMessage.innerHTML = 'Speeking...'

    }
  
    recognition.onend = function() {
      showProgressBar(false)
    }
}



function suggestedComponent() {
    var allElements = Object.keys(elementsDic);
    var suggestion = allElements[Math.floor(Math.random() * allElements.length)]
    voiceMessage.innerHTML = 'Say "Create '+suggestion+'"'
}

// circle around mic icon
var circle = new ProgressBar.Circle('#progress', {
    color: '#097054',
    duration: 3000,
    easing: 'easeInOut',
});

function loop(cb) {
    circle.animate(5, function() {
        circle.animate(0);
    });
}

function showProgressBar(onOff) {
    if (onOff == true) {
        clearInterval(suggestions)
        document.getElementById("progress").style.display = "block";
        setInterval(loop, 5000);
        
    } 
    else {
        circle.animate(0);
        document.getElementById("progress").style.display = "None";
        setTimeout(function(){ 
          suggestions = setInterval(suggestedComponent, 3000);
        }, 3000);

        
      }
}

var voiceMessage = new SpeechSynthesisUtterance();

// speak a message to user
function speak(message) {
  
  // let voices = synth.getVoices ();

  // for (let voice of voices) {
  //   if ((voice.lang === 'en-AU') && (voice.name === 'Karen')) {
  //     voiceMessage.voice = voice;
  //   }
  // }

  voiceMessage.text = message;

  speechSynthesis.speak(voiceMessage);
}



function showAllVoices() {
  let voices = synth.getVoices ();


  var ul = document.getElementById("voices-list");
  ul.innerHTML = ""

  for (let voice of voices) {
    var li = document.createElement("li");
    var a = document.createElement('a');  
    var text = document.createTextNode(voice.name); 
    a.appendChild(text); 
    
    a.href = "#";
    a.id = voice.name;
    a.title = voice.name; 

    a.addEventListener("click", function(){ 
      setVoice(this.id)
    });

    li.appendChild(a)
    ul.appendChild(li)

  }
}

function setVoice(newVoice) {
  
  let voices = synth.getVoices ();
  let voiceName = '';

  for (let voice of voices) {
    voiceName = voice.name


    if (voiceName == newVoice) {
      voiceMessage.voice = voice;
      speak(`Hi! this is ${newVoice}.`);
    }
  }

  
}