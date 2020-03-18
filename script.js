const colorsDic = {'red': 'text-danger', 'white': 'text-white', 'black': 'text-dark', 'blue': 'text-primary', 'yellow': true, 'grey': 'text-muted', 'gray': 'text-secondary', 'green': 'text-success', 'light blue': 'text-info', 'light white': 'text-light'}
// commandsDic: {command: functionName}
const commandsDic = {'create': 'create', 'add': 'create', 'remove': 'remove', 'delete': 'remove'}
// commandsDic: {element: tagName}
const elementsDic = {'alert primary': 'alert primary', 'alert secondary': 'alert secondary', 'alert success': 'alert success', 'container fluid': 'container fluid', 'container': 'container', 'navbar': 'navbar', 
                  'three column': 'three column', 'badge': 'h1 badge', 'notification': 'notification', 
                  'link': 'link', 'breadcrumb': 'breadcrumb', 'button': 'button', 'tag': 'tag', 'outline': 'outline', 
                  'group': 'button-group', 'toolbar': 'toolbar', 'nested': 'button-group-nested', 'vertical': 'button-group-vertical',
                   'card': 'card', 'carousel': 'carousel', 'collapse': 'collapse', 'accordion': 'accordion', 'drop': 'dropdown', 
                   'form': 'form', 'input': 'input group', 'jumbo': 'jumbotron', 'list': 'list group', 'modal': 'modal', 'demo': 'demo', 
                   'popover': 'modal dialog centered', 'nav': 'nav', 'navbar': 'navbar', 'pagination': 'pagination', 'progress bar': 'progress bar',
                  'scrollspy': 'scroll spy', 'menu': 'menu', 'footer': 'footer' }

var voiceMessage = document.getElementById('voice_message')


// import function to import other js files 
function include(file) { 
  
  var script  = document.createElement('script'); 
  script.src  = file; 
  script.type = 'text/javascript'; 
  script.defer = true; 
  
  document.getElementsByTagName('head').item(0).appendChild(script); 
  
}

// import voice recognition api ↑↑↑↑↑↑↑↑
include('./modules/voice-recognition.js');
// import bootstrap api ↑↑↑↑↑↑↑↑
include('./modules/bootstrap-api.js');
// import create command ↑↑↑↑↑↑↑↑
include('./modules/create-command.js');
// import remove command ↑↑↑↑↑↑↑↑
include('./modules/remove-command.js');
// import add component to canvas ↑↑↑↑↑↑↑↑
include('./modules/add-component.js');


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






function includes(object, arr) {
  arr.forEach(element => {
    if (object == element) {
      return true
    }
  });
  return false
}




