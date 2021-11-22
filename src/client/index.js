import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { clearResults } from './js/clearResults'
import { getServerData } from './js/getServerData'
import { postData } from './js/postData'
import { serverApiResults } from './js/results'
import { handleSubmitApi } from './js/formHandlerApi'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);
console.log(handleSubmit);
console.log(handleSubmitApi);
console.log(clearResults);
console.log(getServerData);
console.log(postData);
console.log(serverApiResults);

alert("I EXIST")
console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit,
    clearResults,
    getServerData,
    serverApiResults,
    postData,
    handleSubmitApi
    }