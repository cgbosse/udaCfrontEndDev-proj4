 // Import the js file to test
 import { postData } from "../src/client/js/postData"


// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Tests the postData Function with the correct url and a text sample", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the postData() function", () => {
            // Define the input for the function, if any, in the form of variables/array
            const url = 'http://localhost:8081/textToAnalyze';
            const testText = "To be or not to be that is the question.";
            // Define the expected output, if any, in the form of variables/array
            const testResponse = {
                "model":"general_en",
                "sentence_list":[
                    {
                        "text":"To be or not to be that is the question."
                    }
                ]
            }
            // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
            // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
            expect(postData(url, testText)).toMatchObject(testResponse);
})});

