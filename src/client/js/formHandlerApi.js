function handleSubmitApi(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textForApi').value;
    let formTextJson = {formText};

    console.log("::: Form content obtained :::");

    postData('/textToAnalyze', formTextJson);
    console.log(formTextJson);
    console.log("::: Form contents posted to the server :::");  

}

// .............Taken From proj 03...............
// Async postData function to send the text and country to the server for him to call the API
const postData = async ( url = '', data = {})=>{
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
      console.log('Posting New Data: ' + newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};
// ..........

export { handleSubmitApi }
