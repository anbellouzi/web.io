// commandsDic: {command: functionName}
const commandsDic = {'create': 'create', 'add': 'create', 
                    'remove': 'remove', 'delete': 'remove', 'show': 'showAllComponents',
                     'hide': 'hideListComponents', 'redo': 'redo', 'undo': 'undo', 
                     'full screen': 'fullscreen' ,'preview': 'preview', 'clear': 'clearCanvas',
                    'mobile': 'setMobile', 'tablet': 'setTablet','desktop': 'setDesktop', 
                    }



const editorCommands = editor.Commands;


function setMobile() {
    editor.runCommand('set-device-mobile');
}

function setTablet() {
    editor.runCommand('set-device-tablet');
}

function setDesktop() {
    editor.runCommand('set-device-desktop');
}

function allCommands() {
    console.log(editorCommands.getAll())
}

function clearCanvas() {
    editor.runCommand('tlb-delete');
}

function redo() {
    // or it would be the same...
    editor.runCommand('core:redo');
}

function undo() {
    // or it would be the same...
    editor.runCommand('core:undo');
}

function preview() {
    // or it would be the same...
    editor.runCommand('core:preview');
}

function fullscreen() {
    // or it would be the same...
    alert('fullscreensdcasd')
    editor.runCommand('core:fullscreen');
}







setTimeout(function() {
    //your code to be executed after 1 second
    allCommands();
}, 2000);
