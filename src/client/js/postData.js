// Async postData function to send the text and country to the server for him to call the A = 
async function postData( url = '', data = {}){
    
    console.log("Inside postData() posting app data: ");
    console.log(data);
    
    const response = await fetch(url, {
          method: 'POST', 
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json',
          },
          // Body data type must match "Content-Type" header        
          body: JSON.stringify(data), 
    });
      try {
        const newData = await response.json();
        //console.log('Posting New Data: ' + newData);
        return newData;
      } 
      catch(error) {
        console.log("error", error);
      }
  };

  export { postData }
