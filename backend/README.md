# LearnLink Backend Setup and Installation Notes

## Cloning the Repository:

- Clone the project using the GitHub link in your terminal or command prompt.
  Command: `git clone https://github.com/hikmetbozkurt/LearnLink`

## Navigate to the Folder:

- Change to the directory of the cloned project.
  Command: `cd learnlink-backend`

## Node.js Installation:

- If Node.js is not installed, download and install it from the official Node.js website.

## Install Required Packages:

- Run the command `npm install` in the project folder to install the necessary dependencies.
  This will automatically install all dependencies listed in the `package.json` file.

## Edit the .env File:

- Locate the `.env` file in the project directory and enter the appropriate MongoDB connection URL and port.
  Example content:

MONGO_URI=mongodb://localhost:27017/learnlink PORT=3000


## Check Database Connection:

- Ensure that MongoDB is running locally. If it is not running, use the necessary commands to start MongoDB.
Command: `mongod` (if MongoDB is installed locally)

## Start the Server:

- Use the command `npm run dev` to start the server. (This depends on the `dev` script in your `package.json` file.)

## Test in the Browser:

- Verify that the server is running by visiting `http://localhost:3000` in your browser.

## Test Socket.IO Functionality (Optional):

- To test Socket.IO functionality, use an appropriate client application or browser console to try sending and receiving messages.

## Additional Notes:

- If you encounter errors, check the error messages in the terminal.
- If you want to add new dependencies, use the command `npm install <package_name>` where `<package_name>` can be:
  - `express` for the Express framework
  - `mongoose` for MongoDB object modeling
  - `dotenv` for managing environment variables
  - `socket.io` for real-time communication
