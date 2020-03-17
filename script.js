const colorsDic = {'white': true, 'red': true, 'white': true, 'black': true, 'blue': true, 'yellow': true, 'grey': true, 'gray': true, 'green': true, 'light blue': true, 'light white': true}
// commandsDic: {command: functionName}
const commandsDic = {'create': 'create', 'add': 'create', 'remove': 'remove', 'delete': 'remove'}
// commandsDic: {element: tagName}
const elementsDic = {'paragraph': 'p', 'image': 'img', 'box': 'div', 'text': 'p', 'header': 'h'}

var voiceMessage = document.getElementById('voice_message')

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


// api ↓↓↓↓↓↓↓↓↓↓↓

function callApi(element) {
  var request = new XMLHttpRequest()
  
  request.open('GET', `https://bootstrap-api.herokuapp.com/components/${element}`, true)
  request.onload = function() {
    var data = JSON.parse(this.response)
  
    if (request.status >= 200 && request.status < 400) {
      data.forEach(element => {
        return element
      })
    } else {
      console.log('error')
    }
  }
  
  request.send()

  path = `https://bootstrap-api.herokuapp.com/components/${element}`
  
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
          // google fonts
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
  callApi('navbar')
});

const domComponents = editor.DomComponents;
var wrapperChildren = domComponents.getComponents();


var canvas = []
console.log(wrapperChildren.models[0].attributes.type)


const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
    showProgressBar(false)


    const speechToText = event.results[0][0].transcript;

    voiceMessage.innerHTML = speechToText

    var color = '';
    var functionName = '';
    var elementName = '';




    // Seperate user speech to commands list
    const speechCommands = speechToText.split(" ")

    // console.log(speechCommands.length)


    for(var i=0; i<speechCommands.length; i++) {
      // check if there is a color
      if (speechCommands[i].toLowerCase() in colorsDic) {
        color = speechCommands[i]
      }
      // check if there is function name
      else if (speechCommands[i].toLowerCase() in commandsDic) {
        functionName = commandsDic[speechCommands[i]]
      }
      // check if there is an element name
      else if (speechCommands[i].toLowerCase() in elementsDic) {
        elementName = elementsDic[speechCommands[i]]
      }

      // console.log(`${i}: ${speechCommands[i].toLowerCase()}`)
    }

    // console.log(`Function Name: ${functionName}`)
    // console.log(`element Name: ${elementName}`)


    // get function name from string
    var functionCall = window[functionName]

    var params = [elementName, color, speechToText];

    if (typeof functionCall === 'function') functionCall.call(this, params)
  }

  recognition.onstart = function() {
    showProgressBar(true)
  }

  recognition.onspeechend = function() {
    showProgressBar(false)
  }

  recognition.speechstart = function() {
    showProgressBar(true)
  }

  recognition.onend = function() {
    showProgressBar(false)
  }
}


function create(elementArr) {
  const element = elementArr[0]
  const bootstrapColor = getColor(elementArr[1])
  const text = elementArr[2]
  var elementCreated = ''

  if (elementArr[1]) {
      speak(`Creating ${element} with color ${elementArr[1]}`)
  }
  else {
    speak(`Creating ${element}`)
  }

  if ((element == 'p')) {
    wrapperChildren.add(`<p class="${bootstrapColor} text-center">${text}</p>`)
  }
  else if ((element == 'img')) {
    wrapperChildren.add(`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>`)
  }
  else if ((element == 'div')) {
    wrapperChildren.add(`<div class="${bootstrapColor} text-center">${text}</div>`)
  }
  else if ((element == 'h1')) {
    wrapperChildren.add(`<h1 class="${bootstrapColor} bold text-center">${text}</h1>`)
  }
  
  canvas.push(elementCreated)
}


function remove(elementArr) {
  var element = elementArr[0]
  const text = elementArr[2]
  var elementExist = true;

  console.log(`Removing ${element}`)

  speak(`Removing ${element} tag`)

  // TODO:
  // change for loop to get one element only then remove
  for (var i=0; i< wrapperChildren.models.length; i++) {
    var model = wrapperChildren.models[i]
    if ((element == model.attributes.tagName) || (elementArr[0] == model.attributes.type)) {
      wrapperChildren.remove(model);
    }
    else {
      elementExist = false
    }
  }

  if (elementExist == false) {
    speak(`There is no ${element} to remove`)
  }
}



console.log(wrapperChildren.models[1].attributes)


// to get tagName
// wrapperChildren.models[0].attributes.tagName

// to get type of element
// wrapperChildren.models[0].attributes.type





function showProgressBar(onOff) {
  if (onOff == true) {
    voiceMessage.innerHTML = 'Voice Activated'
    document.getElementById("progress").style.display = "block";
    setInterval(loop, 5000);
  }
  else {
    voiceMessage.innerHTML = 'Click to activate'
    circle.animate(0);
    document.getElementById("progress").style.display = "None";

  }
}

function includes(object, arr) {
  arr.forEach(element => {
    if (object == element) {
      return true
    }
  });
  return false
}


function getColor(color) {
  if (color == "blue") {
    return 'text-primary'
  }
  else if (color == "gray") {
    return 'text-secondary'
  }
  else if (color == "green") {
    return 'text-success'
  }
  else if (color == "red") {
    return 'text-danger'
  }
  else if (color == "yellow") {
    return 'text-warning'
  }
  else if (color == "light blue") {
    return 'text-info'
  }
  else if (color == "light white") {
    return 'text-light'
  }
  else if (color == "black") {
    return 'text-dark'
  }
  else if (color == "grey") {
    return 'text-muted'
  }
  else if (color == "white") {
    return 'text-white'
  }
}

// speak a message to user
function speak(message) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(message));
}

window.onload = function onLoad() {

};



// Edge Cases
