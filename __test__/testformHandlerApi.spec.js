// Import the js files to test
import { contentCheck } from "../src/client/js/contentChecker"
import { postData } from "../src/client/js/postData"
import { serverApiResults } from "../src/client/js/results"

//contentChecker setup
const url = 'http://localhost:8081/textToAnalyze';
const testText = "To be or not to be that is the question.";

//postaData setup
const mockResponse = {
    "status":{
        "code":"0",
        "msg":"OK",
        "credits":"1",
        "remaining_credits":"19975"
    },
    "model":"general_en",
    "score_tag":"NONE",
    "agreement":"AGREEMENT",
    "subjectivity":"OBJECTIVE",
    "confidence":"100",
    "irony":"NONIRONIC",
    "sentence_list":[
        {
            "text":"To be or not to be that is the question.",
            "inip":"0",
            "endp":"39",
            "bop":"y",
            "confidence":"100",
            "score_tag":"NONE",
            "agreement":"AGREEMENT",
            "segment_list":[
                {
                    "text":"To be",
                    "segment_type":"secondary",
                    "inip":"0",
                    "endp":"4",
                    "confidence":"100",
                    "score_tag":"NONE",
                    "agreement":"AGREEMENT",
                    "polarity_term_list":[
                    ]
                },
                {
                    "text":"not to be that is the question",
                    "segment_type":"main",
                    "inip":"9",
                    "endp":"38",
                    "confidence":"100",
                    "score_tag":"NONE",
                    "agreement":"AGREEMENT",
                    "polarity_term_list":[

                    ],
                    "sentimented_concept_list":[
                        {
                            "form":"question",
                            "id":"1b19e12452",
                            "variant":"question",
                            "inip":"31",
                            "endp":"38",
                            "type":"Top",
                            "score_tag":"NONE"
                        }
                    ]
                }
            ],
            "sentimented_entity_list":[
            ],
            "sentimented_concept_list":[
                {
                    "form":"question",
                    "id":"1b19e12452",
                    "type":"Top",
                    "score_tag":"NONE"
                }
            ]
        }
    ],
    "sentimented_entity_list":[
    ],
    "sentimented_concept_list":[
        {
            "form":"question",
            "id":"1b19e12452",
            "type":"Top",
            "score_tag":"NONE"
        }
    ]
};

describe("Testing formHandlerApi step sequence", () => {

    describe("Testing whether the submitted text from the form is not empty", () => {
        test("Testing the contentCheck() function", () => {
                // Define the input for the function, if any, in the form of variables/array
                const input = "";
                // Define the expected output, if any, in the form of variables/array
                // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
                // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
                expect(contentCheck(input)).toBeTruthy();
    })});

    //Setup adapted from https://medium.com/fernandodof/how-to-mock-fetch-calls-with-jest-a666ae1e7752

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(mockResponse)
    }));

    describe('Mock postData', () => {
        let testpostingData;
        
        describe('When the data is posted to the server for the api call', () => {
            beforeEach(async () => {
                testpostingData = await postData(url, testText);
            });

            it('Then the mockResponse JSON object should be returned', () => {
                expect(testpostingData).toEqual(mockResponse);
                //result posting Test
                describe("Testing that the response contains the different properties required for generating the Results contents.", () => {
                    // The test() function has two arguments - a string description, and an actual test as a callback function.  
                    test("Testing the serverApiResults() function", () => {
                            // Define the input for the function, if any, in the form of variables/array
                            const testResponseJson = {
                                agreement: "Agreement",
                                subjectivity: "Subjectivity",
                                confidence: "100",
                                irony: "Irony"  
                            } 
                        // Set up our document body
                            document.body.innerHTML = `
                                <section class="results">
                                <h2>Form Results</h2>
                                <div class="resultsbox">
                                    <div class="resultsboxitem">
                                    Agreement:
                                    </div>
                                    <div id="agreement" class="resultsboxitemapi">
                                        --------------
                                    </div>
                                </div>
                                <div class="resultsbox">
                                    <div class="resultsboxitem">
                                    Subjectivity:
                                    </div>
                                    <div id="subjectivity" class="resultsboxitemapi">
                                        --------------
                                    </div>
                                </div>
                                <div class="resultsbox">
                                    <div class="resultsboxitem">
                                    Confidence:
                                    </div>
                                    <div id="confidence" class="resultsboxitemapi">
                                        --------------
                                    </div>
                                </div>
                                <div class="resultsbox">
                                    <div class="resultsboxitem">
                                    Irony:
                                    </div>
                                    <div id="irony" class="resultsboxitemapi">
                                        --------------
                                    </div>
                                </div>
                                </section>
                            `;
                        
                            const agreement = document.getElementById('agreement');
                            const subjectivity = document.getElementById('subjectivity');
                            const confidence = document.getElementById('confidence');
                            const irony = document.getElementById('irony');

                            // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
                            // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
                            expect(serverApiResults(testResponseJson));
                            expect(agreement.innerHTML).toBe("Agreement");
                            expect(subjectivity.innerHTML).toBe("Subjectivity");
                            expect(confidence.innerHTML).toBe("100");
                            expect(irony.innerHTML).toBe("Irony");         
                            //expect(serverApiResults(testResponseJson)).resolves.toMatchObject(testResponseJsonContent);
                })});
            });
        });
    }); 
});