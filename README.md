# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






DAY 1:
- Create react App
- install and configure tailwind css
- Header
- Routing
- Login Form
- SignIn, SignUp
- Form validation
- useRef Hook
- Firebase setup
- Deploying app to production using firebase
- Use Firebase for Authentication
- Implement SignUp and SignIn using API
- Created redux store with userSlice
- Implement Signout
- Update user data using update API

DAY 2
- BugFix: Redirect if user is not logged in then redirect /browse to login and viceversa
- BugFix: SignUp user displayName by using UpdateAPI
- Unsubscribed to OnAuthStateChanged callback
- Added Hardcoded values to the constants.js file.
- Register for TMDB API and create an App there to get Access Token.
- Go to documentation and get data from the API "Now playing" from the "Movies List" API
- Add API call in Browse page.
- Created custom Hook for nowPlaying movies and updated store
- created movie slice
- Fetch data for movie trailer and updates store with trailer
- Embedded the YouTube video into Video background file
- Added Video Title and made the div absolute with Video background div.
- Build Secondary Component
- Found out TMDB image CDN URL
- Improved UI
- Added multiple movie lists with different APIs (Popular, Trending, TopRated, UpComing)
- Made movie lists scrollable
- Created custom Hooks for each movie list


DAY 3
- Adding GPT search feature
- GPT Search Bar
- Multi-lingual feature for gptSearch page
- Integrate GPT(openai) APIs
- Create openai key in platform.openai.com (free only for 3 months)
- install openai
- Create openai.js file and add "dangerouslyAllowBrowser: true" otherwise browser throws an error saying openai key can be exposed.
- Use openai API to find results(movie names) from GPT for the entered query in GPT Search Bar page.
- Now call TMDB Search API call to get movie results for the movie names we got above and store the movie names and movie results in store 
- Re-used Movie List component to get the movie posters in the movie suggestions component.
- Make the openai and TMDB keys secure by using .env file
- Add .env file to gitignore
- Reduce no. of API calls to popularMovies, trending Movies etc by using memoization (if popularMovies or trendingMovies or nowPlayingMovies are already there in store then dont make API call)
- Made App responsive by using md:


# Features
- Login/SignUp
    - SignIn/SignUp page
    - redirect to browse page after login
- Browse (after authentication)
    - Header
    - Background Trailer video player
    - Title and Description
    - MovieSuggestions
        - Movieslists * N
- NetflixGPT
    - SearchBar
    - Movie Suggestions

