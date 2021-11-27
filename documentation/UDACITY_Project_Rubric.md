# List of Project Criteria to Meet Specifications by Area

## Project Architecture

---

### Architecture 
- [x] Project should have a structure like the one in the lessons. All files shown must be present and the app must successfully render a home page when started via an npm command like ‘npm run start’  
- [x] Update the README file. The README file should have non-default text in it that is specific to this project. Doesn’t have to be thorough but should have some basic info, such as project description, how-to run the app, dependencies, etc. Bonus if correct markdown is used.
- [x] Do not submit node_modules and dist folders. The .gitignore file must contain both the node_modules and dist folders at a minimum. |

### Configs

- [x] Both webpack config files must be present and should be set up similar to the course for development and production.

- [x] A build script must run successfully with no errors and generate a dist folder. Bonus if they customized their npm build scripts.

- [x] Students should also have a working dev mode, check that webpack dev server is set up and that they have an npm script that starts the server

### Content

- [x] Only one html file is required, but it must be at src/views/ or src/html. Must contain valid semantic html

- [x] There will be a minimum of 2 javascript files in the src/js folder. All files in the js folder must be found by webpack.

- [x] There must be a styles or scss folder. The project provides a base file, but the header, footer, form, and main files should be added to by the student, similar to the course.

## Functionality

---

### API

- [x] The app should make a successful call to the api on form submission. If this is successful, the api keys and response handling were done correctly. You can check that the api keys are found in server.js or a similar node file. It is not acceptable for an api key to be set in a client facing file (like index.js)

- [x] Information from the api response must show up in the view. It is not enough for the response to be logged to the console or saved in js, etc..

### Offline Functionality

The project must have set up service workers:

- [ ] Workbox plugin is implemented in webpack.prod.js
- [ ] The service is called from index.html

### Testing

- [ ] Check the project has Jest installed and npm run test script is implemented to run Jest.
- [ ] Every src/js file has at least one unit test.
- [ ] All tests have passed.

### Interactions

The page built can be very simple, but should include:

- [ ] A single field form that uses the correct HTML tags and structure.
- [ ] Validate the form input and return an error to alert the user.

    - [ ]  At the very minimum, the input field cannot be blank.
    - [ ] Bonus point: you can implement regex to check the URL validity.
