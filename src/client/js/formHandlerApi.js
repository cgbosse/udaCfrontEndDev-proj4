function handleSubmitApi(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('textForApi').value
  let formTextJson = {formText};
    
  //Calls the postData function to post the form text to the server
  Client.postData('/textToAnalyze', formTextJson)
    .then (Client.getServerData())
    .then ((result) => {
      console.log(":::::serverApiResults:::::");
      console.log(result);
      Client.serverApiResults(result);
      //return logReceived
    })
    .then (console.log("Done"))
    ;
}

export { handleSubmitApi }
