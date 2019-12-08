
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
    }
  }
