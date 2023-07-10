# FoodHub - MERN Stack Website

FoodHub is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to discover and order various food items listed by FoodHub.

<img width="960" alt="image" src="https://github.com/Mansi209aps/FoodHub/assets/78530251/855d48c1-5db5-40df-9568-255afaa34d0a">

## Features

### User Registration and Authentication:
Users can sign up and log in to the application to access their personalized account.

### Food Menu: 
Menu, showcasing the available food items and their prices.

### Cart Functionality: 
Users can add or remove food items from their cart as per their requirements.

### Order Placement:
Users can place orders, specifying the desired items and quantities.

## Installation

1. Clone the repository:

   ### `git clone https://github.com/your-username/foodhub.git`

2. Navigate to the project directory:

   ### `cd foodhub`

3. Install the dependencies for both the backend and frontend:

   ### `cd backend && npm install
   ### cd ../frontend && npm install`

4. Set up environment variables:

Create a .env file in the backend directory.
Add the following variables to the .env file:

   ### `PORT=5000`
  ### `MONGO_URI=<your-mongodb-connection-string>`
   ### `JWT_SECRET=<your-jwt-secret>`

5. Start the backend server:

   ### `cd backend && npm start`

6. Start the frontend development server:

   ### `cd frontend && npm start`

7. Access the application by visiting `http://localhost:3000` in your web browser.


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
