
const serverApiResults = function(res){
  //Extracting the information from the stored API data obtained from the server
  //and filling out the results boxes
  console.log('Creating last logs entries HTML');
  
  document.getElementById('agreement').innerHTML = res.agreement;
  //document.getElementById('subjectivity').innerHTML = json.subjectivity;
  //document.getElementById('confidence').innerHTML = json.confidence;
  //document.getElementById('irony').innerHTML = json.irony
}

export {serverApiResults}
