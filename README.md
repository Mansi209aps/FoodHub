# FoodHub - MERN Stack Website

FoodHub is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to discover and order various food items listed by FoodHub.

<img width="960" alt="image" src="https://github.com/Mansi209aps/FoodHub/assets/78530251/855d48c1-5db5-40df-9568-255afaa34d0a">

## Features

- ### User Registration and Authentication:
  Users can sign up and log in to the application to access their personalized account.

- ### Food Menu:
  Menu, showcasing the available food items and their prices.

- ### Cart Functionality: 
  Users can add or remove food items from their cart as per their requirements.

- ### Order Placement:
  Users can place orders, specifying the desired items and quantities.  

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/foodhub.git
   ```

2. Navigate to the project directory:

   ```
   cd foodhub
   ```

3. Install the dependencies for both the backend and frontend:

   ```
   cd backend && npm install
   ```
   ```
   cd ../frontend && npm install
   ```

4. Set up environment variables:

  - Create a .env file in the backend directory.
  - Add the following variables to the .env file:

     ```
     PORT=5000
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     ```

5. Start the backend server:

   ```
   cd backend && npm start
   ```

5. Start the frontend development server:

   ```
   cd frontend && npm start
   ```

6. Access the application by visiting `http://localhost:3000` in your web browser.


## Technologies Used

- ### Backend:
 - Node.js
 - Express.js
 - Postman
 - MongoDB (with Mongoose)
 - JWT (JSON Web Tokens) for authentication

- ### Frontend:
 - React.js
 - Redux (for state management)
 - Axios (for API requests)
 - React Router (for routing)
 - Material-UI (for UI components)

## Contributing

Contributions to FoodHub are always welcome! If you find any issues or would like to suggest improvements, please create a new issue or submit a pull request.

## Contributors
<table>
<tbody>
    <tr>
      <td align="center"><a href="https://github.com/ritik2358"><img src="https://avatars.githubusercontent.com/u/98156555" width="100px;" alt="Ritik Raj"/><br /><sub><b>Ritik Raj</b></sub></a></td>
      <td align="center"><a href="https://github.com/Mansi209aps"><img src="https://avatars.githubusercontent.com/u/78530251" width="100px;" alt="Mansi"/><br /><sub><b>Mansi</b></sub></a></td>
       </tr>
</tbody>
</table>


## Acknowledgements

FoodHub is developed as a learning project, and it wouldn't have been possible without the valuable resources and tutorials available online. Special thanks to the open-source community for their contributions and the MERN stack creators.

If you have any questions or feedback, feel free to contact us at [mansisharma209aps@gmail.com](mailto:mansisharma209aps@gmail.com) or [ritikraj2358@outlook.com](mailto:ritikraj2358@outlook.com).

Enjoy using FoodHub!


