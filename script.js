var voiceMessage = document.getElementById('voice_message')
var circle = new ProgressBar.Circle('#progress', {
    color: '#097054',
    duration: 3000,
    easing: 'easeInOut'
});


// api ↓↓↓↓↓↓↓↓↓↓↓

function callApi(element) {
  // var request = new XMLHttpRequest()
  //
  // request.open('GET', `https://infinite-escarpment-26993.herokuapp.com/component/${element}`, true)
  // request.onload = function() {
  //   var data = JSON.parse(this.response)
  //
  //   if (request.status >= 200 && request.status < 400) {
  //     data.forEach(element => {
  //       return element
  //     })
  //   } else {
  //     console.log('error')
  //   }
  // }
  //
  // request.send()

  path = `https://infinite-escarpment-26993.herokuapp.com/${element}`

  fetch(path).then(function(res) {
    return res.json()
  }).then(function(json) {

    let element = JSON.parse(json)

    console.log(element)
    return element

  }).catch(function(err) {
    console.log(err.message)

  })


}

function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("GET", "Your Rest URL Here", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("Your JSON Data Here");

}


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
  },
  canvas: {
      styles: [
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      ],
      scripts: [
          'https://code.jquery.com/jquery-3.3.1.slim.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
      ],
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
  callApi('image')
});


var canvas = []

const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {

    // Final commands string
    const speechToText = event.results[0][0].transcript;

    // Show text to user
    voiceMessage.innerHTML = speechToText

    // Seperate user speech to commands list
    const speechCommands = speechToText.split(" ")

    // Get first commands ex. 'Operation command'
    const command = speechCommands[0]

    // print speech array
    console.log(speechCommands)
    // print first command from speech
    console.log(command)

    // TODO:
    // 1. loop over the speechCommands and generate element attributes
    // 2. Commands to listen to: 'Create', 'Color', 'text center',
    // 2. call specific function with element attributes passed as class id

    if (speechToText.includes('create') || speechToText.includes('add')) {
      // TODO: check for words after create
      if (speechToText.includes('text') || speechToText.includes('paragraph')) {
        var textEl = createText(speechToText)
        canvas.push(textEl)
      }
      else if (speechToText.includes('image') || speechToText.includes('img')) {
        var imageEl = createImage(speechToText)
        canvas.push(imageEl)
      }
      else if (speechToText.includes('box') || speechToText.includes('div')) {
        var div = createDiv(speechToText)
        canvas.push(div)
      }
    }
  }

  console.log(canvas)



  recognition.onstart = function() {
    showProgressBar(true)
  }
  recognition.onspeechend = function() {
    showProgressBar(false)
  }

  // recognition.continue()

}

function showProgressBar(onOff) {
  if (onOff == true) {
    voiceMessage.innerHTML = 'Voice recognition activated. Try speaking into the microphone.'
    document.getElementById("progress").style.display = "block";
    // document.getElementById("mic").style.display = "none";
    circle.animate(10);
  }
  else {
    voiceMessage.innerHTML = 'You were quiet for a while so voice recognition turned itself off.'
    // document.getElementById("mic").style.display = "block";
    document.getElementById("progress").style.display = "None";
  }
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
  editor.addComponents(`<p class="text-success text-center">${text}</p>`);
}

// Append components directly to the canvas
function createImage(text) {
  speak('Creating an image')
  var image = editor.addComponents(``);
  return image
}

// Append components directly to the canvas
function createDiv(text) {
  speak('Creating a div')
  var div = editor.addComponents(`<div>${text}</div>`);
  console.log(canvas)
  return div
}

// speak a message to user
function speak(message) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(message));
}

window.onload = function onLoad() {

};



// to do:
// put functions in one file
// >>>>>>> 0cdd415602f61078f86276c7decc19512eaac971
