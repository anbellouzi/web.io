// TODO: refactor function to return element when search is done. 
// -problem now: function returns before the end of search. thus returning none.

function getComponent(element) {
    // var request = new XMLHttpRequest();
    // var component = 'none';
    // request.open('GET', `https://bootstrap-api.herokuapp.com/components/${element}`, true);
    // request.send();
    // request.onload = () => {
    //   // Begin accessing JSON data here
      
    
    //   if (request.status === 200) {
    //       var data = JSON.parse(this.response)
    //       component = data.component[0].html
    //       console.log(component)
    //   } else {
    //     console.log('error')
    //   }
  
    // }
    // return component

    result = 'none';

    fetch(`https://bootstrap-api.herokuapp.com/components/${element}`)
      .then(response => {
        return response.json()
      })
      .then(component => {
        result = component.component[0].html;
        console.log(result);
        // return result;
        addComponent(result, element);
      });
}