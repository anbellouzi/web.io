// import voice recognition api ↑↑↑↑↑↑↑↑
include('./modules/voice-recognition.js');
// import bootstrap api ↑↑↑↑↑↑↑↑
include('./modules/bootstrap-api.js');
// import create command 
include('./modules/create-command.js');
// import remove command 
include('./modules/remove-command.js');
// import add component to canvas 
include('./modules/add-component.js');
// import add component to canvas 
include('./modules/commands.js');
// import add component to canvas 
include('./modules/components.js');
// import draggable feature for mic 
include('./modules/draggable.js');







var voiceMessage = document.getElementById('voice_message')


// import function to import other js files 
function include(file) { 
  
  var script  = document.createElement('script'); 
  script.src  = file; 
  script.type = 'text/javascript'; 
  script.defer = true; 
  
  document.getElementsByTagName('head').item(0).appendChild(script); 
  
}




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

  plugins: ['gjs-preset-webpage', 'gjs-navbar'],
  pluginsOpts: {
    'gjs-preset-webpage': {},
    'gjs-navbar': {}
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



const domComponents = editor.DomComponents;
var wrapperChildren = domComponents.getComponents();
console.log(wrapperChildren.models[0].attributes.type)


// console.log(wrapperChildren.models[1].attributes)


// to get tagName
// wrapperChildren.models[0].attributes.tagName

// to get type of element
// wrapperChildren.models[0].attributes.type


// walkthrough code
const introDriver = new Driver();
//  driver.highlight('#mydiv')
introDriver.defineSteps([
 {
   element: document.getElementById('mydiv'),
   popover: {
     className: 'first-popover',
     title: 'Control Panel',
     description: 'Welcome to your control panel! Here, you will have a chance to use the voice recognition feature to build your first website!',
     position: 'right',
     offset: 40,
     closeBtnText: 'Close',
     nextBtnText: 'Next',
     prevBtnText: 'Previous',
     keyboardControl: true
   }
 },
 {
  element: '#mic',
  popover: {
    title: 'The Microphone',
    description: 'This is the main mic that you will use to build your site. Simple click on it, speak to it and it will do as you say.',
    position: 'right',
    offset: 20,
    closeBtnText: 'Close',
    nextBtnText: 'Next',
    prevBtnText: 'Previous',
    keyboardControl: true
    }
  },
  {
    element: '#box-settings',
    popover: {
      title: 'Components',
      description: 'Sometimes you might not feel like talking to the computer, and that\'s okay, which is why we put all of them in this list. Simply click on the component and it will be added to your website. <br>\nIn addition, you can drag and drop from the components list to the right of your screen.',
      position: 'bottom',
      offset: 20,
      closeBtnText: 'Close',
      nextBtnText: 'Next',
      prevBtnText: 'Previous',
      keyboardControl: true
    }
  },
  {
    element: '#person-settings',
    popover: {
      title: 'Voice Settings',
      description: 'Check out our Google Translate implementation.',
      position: 'bottom',
      // offset: 20,
      closeBtnText: 'Close',
      nextBtnText: 'Next',
      prevBtnText: 'Previous',
      keyboardControl: true
    }
  },
  {
    element: '#voice-settings',
    popover: {
      title: 'Voice Tone Settings',
      description: 'With this tool, you can change the volume, pitch, and rate the website speaks back to you :)',
      position: 'bottom',
      // offset: 20,
      closeBtnText: 'Close',
      nextBtnText: 'Next',
      prevBtnText: 'Previous',
      keyboardControl: true
    }
  },
  {
    element: '#mydivheader',
    popover: {
      title: 'Draggable Box',
      description: 'We made the control panel draggable, so it\'s easier for you to see your entire site :) Go ahead, try it...',
      position: 'bottom',
      // offset: 20,
      closeBtnText: 'Close',
      nextBtnText: 'Next',
      prevBtnText: 'Previous',
      keyboardControl: true
    }
  }
]);

introDriver.start();



function includes(object, arr) {
  arr.forEach(element => {
    if (object == element) {
      return true
    }
  });
  return false
}




