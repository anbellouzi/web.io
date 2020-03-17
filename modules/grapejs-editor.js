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