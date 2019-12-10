var voiceMessage = document.getElementById('voice_message')
var circle = new ProgressBar.Circle('#progress', {
    color: '#FCB03C',
    duration: 3000,
    easing: 'easeInOut'
});

// api ↓↓↓↓↓↓↓↓↓↓↓

// var request = new XMLHttpRequest()

// request.open('GET', 'https://', true)
// request.onload = function() {
//   var data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
//       console.log(movie.title)
//     })
//   } else {
//     console.log('error')
//   }
// }

// request.send()

// api ↑↑↑↑↑↑↑↑


// web builder  code
var editor = grapesjs.init({
  height: '100%',
  showOffsets: 1,
  noticeOnUnload: 0,
  storageManager: { autoload: 0, id: 'gjs-',             // Prefix identifier that will be used on parameters
    type: 'local',          // Type of the storage
    autosave: true,         // Store data automatically
    autoload: true,         // Autoload stored data on init
    stepsBeforeSave: 1, },
  container: '#gjs',
  fromElement: true,

  plugins: ['gjs-preset-webpage'],
  pluginsOpts: {
    'gjs-preset-webpage': {}
  }
});
// end of web builder  code

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();
//recognition.continuous = false;

const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
const sound = document.querySelector('.sound');

icon.addEventListener('click', () => {
  dictate();
});


var canvas = []

const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;

    voiceMessage.innerHTML = speechToText

    if (speechToText.includes('create') || speechToText.includes('add')) {
      // TODO: check for words after create
      if (speechToText.includes('text') || speechToText.includes('paragraph')) {
         createText(speechToText)
      }
      else if (speechToText.includes('image') || speechToText.includes('img')) {
         var imageEl = createImage(speechToText)
         canvas.push(imageEl)
      }
      else if (speechToText.includes('box') || speechToText.includes('div')) {
        var div = createDiv(speechToText)
        canvas.push(div)
      }
      if (speechToText.includes('image')) {
        createImage(speechToText)
      }
    }
  }

  console.log(canvas)



  recognition.onstart = function() {
    voiceMessage.innerHTML = 'Voice recognition activated. Try speaking into the microphone.'
    document.getElementById("progress").style.display = "block";
    document.getElementById("mic").style.display = "none";

    circle.animate(10);
  }
  recognition.onspeechend = function() {
    voiceMessage.innerHTML = 'You were quiet for a while so voice recognition turned itself off.'
    document.getElementById("mic").style.display = "block";
    document.getElementById("progress").style.display = "None";
  }

  // recognition.continue()

}

// <<<<<<< HEAD
function includes(object, arr) {
  arr.forEach(element => {
    if (object == element) {
      return true
    }
  });
  return false
}

// Append components directly to the canvas
function createText(text) {
  speak('Creating a paragraph')
  editor.addComponents(`<p>${text}</p>`);
}

// Append components directly to the canvas
function createImage(text) {
  speak('Creating an image')
  var image = editor.addComponents(`<img src="https://association-amici.org/wp-content/themes/oria/images/placeholder.png" alt="">`);
  return image
}

// Append components directly to the canvas
function createDiv(text) {
  speak('Creating a div')
  var div = editor.addComponents(`<div>${text}</div>`);
  console.log(canvas)
  return div
}


// speek a message to user
function speak(message) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(message));
}

window.onload = function onLoad() {

};


// to do:
// put functions in one file
// >>>>>>> 0cdd415602f61078f86276c7decc19512eaac971
