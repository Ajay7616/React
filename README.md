# React Projects

This repository contains two separate React projects: **Todolist** and **Portfolio**. Below are the instructions for setting up and running each project.

## Projects

### 1. Portfolio

The Portfolio project is a frontend application. It is built with React and can be run using npm.

#### Setup and Running

1. **Clone the Repository**
   - Clone this repository to your local machine.

2. **Navigate to the Portfolio Directory**
   - Open your terminal or command prompt.
   - Navigate to the `portfolio` folder using:
     ```bash
     cd portfolio
     ```

3. **Install Dependencies**
   - Install the required npm packages:
     ```bash
     npm install
     ```

4. **Run the Development Server**
   - Start the development server:
     ```bash
     npm run dev
     ```

5. **Access the Application**
   - Open your web browser and navigate to `http://localhost:3000` to view the Portfolio application.

### 2. Todolist

The Todolist project is a full-stack MERN (MongoDB, Express, React, Node.js) application. It includes both the frontend and backend components.

#### Backend Setup

1. **Navigate to the Server Directory**
   - Open your terminal or command prompt.
   - Navigate to the `server` folder using:
     ```bash
     cd server
     ```

2. **Install Dependencies**
   - Install the required npm packages:
     ```bash
     npm install
     ```

3. **Configure MongoDB Connection**
   - Ensure MongoDB is installed and running on your local machine.
   - In `server/index.js`, verify the MongoDB connection string:
     ```javascript
     mongoose.connect('mongodb://127.0.0.1:27017/test');
     ```

4. **Run the Server**
   - Start the server using nodemon:
     ```bash
     nodemon index.js
     ```

#### Frontend Setup

1. **Navigate to the Todolist Directory**
   - Open your terminal or command prompt.
   - Navigate to the `todolist` folder using:
     ```bash
     cd todolist
     ```

2. **Install Dependencies**
   - Install the required npm packages:
     ```bash
     npm install
     ```

3. **Run the Development Server**
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**
   - Open your web browser and navigate to `http://localhost:3001` (or the port specified in the configuration) to view the Todolist application.

## Conclusion

This repository contains two distinct projects: a Portfolio frontend application and a Todolist MERN stack application. Follow the setup instructions for each project to get them running locally. For the Portfolio, simply use `npm run dev` in the frontend directory. For the Todolist, ensure MongoDB is running, start the backend server with `nodemon`, and then run the frontend server.

Feel free to explore and modify the projects as needed!
