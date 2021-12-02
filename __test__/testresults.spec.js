 // Import the js file to test
 import { serverApiResults } from "../src/client/js/results"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing that the response contains the different properties required for generating the Results contents.", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the serverApiResults() function", () => {
            // Define the input for the function, if any, in the form of variables/array
            const testResponseJson = {
                agreement: "Agreement",
                subjectivity: "Subjectivity",
                confidence: "100",
                irony: "Irony",  
            } 
            // Define the expected output, if any, in the form of variables/array
            const testResponseJsonContent = {
                agreement: expect.stringMatching("Agreement"),
                subjectivity: expect.stringMatching("Subjectivity"),
                confidence: expect.stringMatching("100"),
                irony: expect.stringMatching("Irony"),  
            } 
            // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
            // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
            expect(serverApiResults(testResponseJson)).toMatchObject(testResponseJsonContent);
})});