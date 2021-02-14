# GitHub Search TypeScript frontend
Github front end client which collect & return data from Github & caches it in REDIS.

[Backend Server](https://github.com/karim-ch/githubSearcherServer)

You can see live [demo](https://github-searcher-v0.netlify.app/).
> **Note**: You must allow insecure connections flag in your browser in order to make insecure http request to the backend server.

![alt Click](https://i.ibb.co/WPzzQGN/Screenshot-from-2021-02-15-00-26-31.png)

And then: 

![alt Click](https://i.ibb.co/V2YYFJn/Screenshot-from-2021-02-15-00-28-32.png)

Please refresh the page after allowing it.

# ScreenShots:

- Searching for repositories: 

![alt Click](https://i.ibb.co/QCWSST6/Screenshot-from-2021-02-15-00-32-27.png)

- Searching for users:

![alt Click](https://i.ibb.co/zfg4Br3/Screenshot-from-2021-02-15-00-39-19.png)


# 1. Getting Started

Install node modules: `npm install`

## 1.1. Set up the backend server

Please follow the steps to run the backend server 
[here](https://github.com/karim-ch/githubSearcherServer), we will need the server port in our .env file.

## 1.2. Include a .env file
Please follow the .env.example file.

Your .env should contain the following elements:

> REACT_APP_CLIENT_URL="http://localhost:7000"

`REACT_APP_CLIENT_URL` is the server url running of your local machine.

## 1.3. Scripts
### Run the development server
`npm run start`
### Build the application
`npm run build`
### Linting the code
`npm run lint:fix`

# 2. Requirements

### 2.1 Search components: 
* We will have two input fields, one search input field, and a dropdown where we can either 
pick "User" or "Repository" to define the entities that we want to search.

### 2.2 Search data: 
* When the user starts typing into the input, we will fetch the results and display them in 
  the form of a grid. The data should be cached in the store and persisted via redux-persist 
  and no more API calls should be made if we already have the results for the search term.

### 2.3 Responsiveness:
* The page must be responsive across small, medium and large screens.

# 3. Implementation

## 3.1 Dependencies
This project was build based on [CRA](https://github.com/facebook/create-react-app) TS template with the following dependencies:

- [axios](https://www.npmjs.com/package/axios)
  Promise based HTTP client for the browser and node.js
- [lodash](https://www.npmjs.com/package/lodash)
  A javaScript utility library delivering modularity, performance & extras.
- [react-redux](https://www.npmjs.com/package/react-redux)
  Official React bindings for **Redux**
- [redux-persist](https://www.npmjs.com/package/redux-persist)
  Useful for persisting and rehydrating a redux store.
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
  Middleware that allows writing actions creators that return a function instead of an action.
- [styled-components](https://www.npmjs.com/package/styled-components)
  CSS-in-JS library and theme provider
- [@styled-system/theme-get](https://www.npmjs.com/package/@styled-system/theme-get)
  Can be used in any style declaration to get a value from our theme
- [react-app-rewired]()
  Provides better CRA flexibility without ejecting
- [eslint](https://www.npmjs.com/package/eslint)
  A tool for identifying, reporting and fixing patterns found in javascript.


## 3.2 Project architecture
```
| src/
    |- components/
        |- atoms/
        |- molecules/
        |- icons/
    |- routes/   
    |- pages/
    |- redux/
        |- github/
            |- actions/
            |- reducer/
            |- selectors/
        |- rootReducer.ts
        |- store.ts
    |- shared/
    |- theme/
    |- utils/
    |- index.ts
```
* **index.ts** : is the main file of the front end application.
* **components/**: is a folder containing the app's custom reusable components.
  - **Atoms** are small components like Inputs, Headings, Image .etc.
  - **Molecules** are custom components making some custom composed components like Drawers, Dropdowns .etc.
  - **Icons** is where our svgs are defined as react components.

* **routes/**: This folder contains our react app routes that are grouped to ensure data encapsulation, 
  i.e:
  - **Routes.tsx** can contain our app public routes like the login & register pages, as well as the main route to the dashboard      
  - **AppRoutes.tsx** will contain our main app dashboard pages, this main route will contain our redux store.

* **pages/**: Pages are our app screens, each page will contain its own components. Every component is composed of 3 or more files:
    - **component.tsx** will contain basic tsx declarations and logic
    - **withStyle.ts** contains the css styling of the component. This way each component will have its own css.
    - **components/** If the page/component contains many sub-components, they will be defined in this folder.
    - **index.ts** will help import the main react tsx component
    - A component can contain other files like custom hooks for retrieving, or doing any other logic.

* **redux/**: Contains the redux definitions for the app. I've chosen to divide it this way: 
    - **The main folder** will contain the store file, and the mainReducer that will import other reducers 
      defined according to the context of the app. For example, in our case, we have the 
      **github/** folder. This folder will contain its own actions, reducer, and selectors 
      encapsulated within this folder to make it easier later to go to the files for debugging 
      or other things.
      
      If we were to have other context like a reducer for a user for example, we will have another folder
      next to the github/ folder, and it will contain its own actions, selectors and reducer.
      
    - The **root reducer** will contain the redux-persist declarations for persisting our redux store.
      I've chosen to work on the localstorage instead of the session for persisting the data because
      we need our data to be shared across multiple browser windows and tabs.
    - The redux store and the PersistGate will only wrap the AppRoutes, this can be changed later depending
    on the app's needs.
      

* **shared/**: This folder will have shared app layout (i.e. a navbar, footer ...), hooks, or other components to be used everywhere.
  
* **theme/**: In here we will define the theme for our application. I've chosen to work with styled components for its simplicity in creating a theme and
defining variables like colors, screen sizes, font sizes, etc ...

* **utils/**: Contains of subset of helper functions & constants, ... to be used everywhere in our app.

## 3.3 Explanation

### - Building our main components:
I've chosen to build our atoms and molecules components from scratch instead of importing ready-to-use components.
This will make our app scale later and will make us independent of other unnecessary npm packages.

For example the dropdown menu. Despite its simple implementation, 
it can be customized later to have for example icons in the dropdown content menu.

### - Creating custom hooks:
This will ensure separating the UI from the application logic, like retrieving the data or searching it.

### - Styling: 
- **Style wrapping:** In the entire app, I've chosen to style my components using a HOC pattern using the StyledComponent library.
This way we will avoid writing our CSS styled-components into our TSX file.
- **Responsiveness:** Our app is responsive and respond to the requirements:  ( for width <= 768px, the cards grid will contain 2 columns). 

### - Retrieving and persisting the data:
- Whenever a user search for github users or repositories, we will persist the data
  as well as the query, and the entity type in our store. 
  This way, whenever the user refreshes the page, he will find his last request stored.
  
### - Rewiring the application:
- This seems like the only solution to add absolute paths to CRA apps without ejecting.

# 4. Improvements
if I were to spend additional time on the project, I would definitely work on adding tests, 
improving the typescript types and adding some other pages for the /user and repository/.



