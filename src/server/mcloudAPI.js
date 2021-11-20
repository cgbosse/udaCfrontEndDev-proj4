
const formdata = new FormData();
formdata.append("key", "MYKEY");
formdata.append("txt", "Bruce Lee is recognized as a legend of martial Arts. His skill was extreme and his legacy remains.");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));


 //  Boiler Template MeaningCloud
  // Boiler template end
