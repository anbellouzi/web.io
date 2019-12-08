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

    // paragraph.textContent = speechToText;
    document.getElementById('voice_message').innerHTML = speechToText
    if (event.results[0].isFinal) {

      if (speechToText.includes('time')) {
          speak(getTime);
      };

      if (speechToText.includes('date')) {
          speak(getDate);
      };

      if (speechToText.includes('weather')) {
          getTheWeather(speechToText);
      };

      if (speechToText.includes('create box')) {
          create_Image(speechToText)
      };

      if (speechToText.includes('add text')) {
          add_text(speechToText)
      };

    }
  }
}

const speak = (action) => {
  utterThis = new SpeechSynthesisUtterance(action());
  synth.speak(utterThis);
};

const getTime = () => {
  const time = new Date(Date.now());
  return `the time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
};

const getDate = () => {
  const time = new Date(Date.now())
  return `today is ${time.toLocaleDateString()}`;
};

const getTheWeather = (speech) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${speech.split(' ')[5]}&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`)
  .then(function(response){
    return response.json();
  })
  .then(function(weather){
    if (weather.cod === '404') {
      utterThis = new SpeechSynthesisUtterance(`I cannot find the weather for ${speech.split(' ')[5]}`);
      synth.speak(utterThis);
      return;
    }
    utterThis = new SpeechSynthesisUtterance(`the weather condition in ${weather.name} is mostly full of ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`);
    synth.speak(utterThis);
  });
};


var editor = grapesjs.init({
     container : '#gjs',
     components: '<div class="txt-red">Hello world!</div>',
     style: '.txt-red{color: red}',
 });



function create_Image(text) {

  editor.addComponents(`<div>
    <img src="https://path/image" />
    <span title="foo">${text}</span>
  </div>`);

}

function add_text(text) {
  // First we apply the new text in the selection
          editor.getSelected().set('content', text);
         // To update the HTML DOM we need to use render function.
          editorRTE.DomComponents.render();
}
