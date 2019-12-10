var voiceMessage = document.getElementById('voice_message')

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

var editor = grapesjs.init({
  height: '100%',
  showOffsets: 1,
  noticeOnUnload: 0,
  storageManager: { autoload: 0 },
  container: '#gjs',
  fromElement: true,

  plugins: ['gjs-preset-webpage'],
  pluginsOpts: {
    'gjs-preset-webpage': {}
  }
});

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();

const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
const sound = document.querySelector('.sound');

icon.addEventListener('click', () => {
  dictate();
});

const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;

    voiceMessage.innerHTML = speechToText

    if (speechToText.includes('create')) {
      if (speechToText.includes('box')) {
        createBox(speechToText)
      }
      if (speechToText.includes('image')) {
        createImage(speechToText)
      }
    }

  }
  recognition.onstart = function() {
    voiceMessage.innerHTML = 'Voice recognition activated. Try speaking into the microphone.'
  }
  recognition.onspeechend = function() {
    voiceMessage.innerHTML = 'You were quiet for a while so voice recognition turned itself off.'
  }

  // recognition.continue()

}

function createBox(text) {
    // Append components directly to the canvas
  editor.addComponents(`<div>
    <span title="foo">${text}</span>
  </div>`);
}

function createDiv(text) {
  // Append components directly to the canvas
editor.addComponents(`<div>
  <img src="https://path/image" />
  <span title="foo">${text}</span>
</div>`);
}

function createImage(text) {
  // Append components directly to the canvas
editor.addComponents(`<img src="https://path/image" />`);
}
// to do:
// put functions in one file