// TODO: refactor function to return element when search is done. 
// -problem now: function returns before the end of search. thus returning none.

function getComponent(element) {
    var request = new XMLHttpRequest()
    var component = 'none'
    request.open('GET', `https://bootstrap-api.herokuapp.com/components/${element}`, true)
    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
    
      if (request.status >= 200 && request.status < 400) {
        // data.forEach(component => {
          // console.log(data.component[0].html)
          component = data.component[0].html
          
        // })
      } else {
        console.log('error')
      }
  
      // return component
    }
    
    request.send()
    return component
}