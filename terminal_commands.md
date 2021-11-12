# Notes of Terminal Commands

## Git
--- 
- git branch -a -- Check for available branches
- git checkout < branch-name > -- Checks out the selected branch
- 


## NPM
---
### Basic
- npm -v -- indicates the node package manager version  
- npm install -g npm@latest -- installs the latest node package version  

### If there is an NPM error upon install:
> npm cache clean  
> [sudo] npm install -g npm  
> npm install

### If it asks to fix vulnerabilities:
> npm audit fix

### To start the app
- npm run start

### To build webpack
- npm run build-dev  -- Starts the development mode
- npm run build-prod -- Starts the production mode


_Note: the start command is defined in the package.json file under the scripts._
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/server/index.js",
    "build-prod": "webpack --config webpack.prod.js",
    "build-dev": "webpack-dev-server  --config webpack.dev.js --open"
  },
```

