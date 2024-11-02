# LearnLink Frontend

This repository contains the frontend part of the **LearnLink** project, developed using **Electron** and **React**. The frontend is responsible for providing a desktop interface for users, built with modern web technologies packaged as a desktop application.

## Project Overview

LearnLink is a desktop application designed to provide a rich user interface using the power of **React** and **Electron**. This part of the project includes the entire frontend codebase that integrates React with Electron, allowing it to function as a cross-platform desktop application.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

Before running the project, ensure you have the following prerequisites installed on your system:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager)

Once you have Node.js and npm installed, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/hikmetbozkurt/LearnLink.git
   cd LearnLink/learnlink_gui
   ```

2. **Install Dependencies**: After cloning the repository, install all required dependencies:

   ```bash
   npm install
   ```

3. **Run the Development Server**: To start the development environment:

   ```bash
   npm start
   ```

   This command will:

   - Start the React development server for the renderer (frontend).
   - Start Electron with hot-reloading enabled.

4. **Build the Production Version**: To build the app for production:
   ```bash
   npm run build
   ```

## Usage

Once the development server is running, you can view the application in an Electron window. You can modify the React components, and changes will be reflected in real-time.

### How to Run the Electron App:

- **In Development**: The `npm start` command will open the Electron window with the React app running inside.

- **In Production**: After running the `npm run build` command, the production files will be generated. To package the app as a desktop executable:
  ```bash
  npm run package
  ```
  This will generate platform-specific executables (e.g., `.exe` for Windows, `.dmg` for macOS) in the `dist` folder.

## Folder Structure

Below is the folder structure of the `learnlink_gui` directory:

```bash
learnlink_gui/
  |-- assets/
      |-- icons/                # Icon files
      |-- images/               # Image files
      |-- other-assets/         # Other static files
  |-- src/
      |-- components/           # Reusable UI components
          |-- Chat/
              |-- ChatWindow.tsx
              |-- MessageInput.tsx
              |-- MessageList.tsx
          |-- LoginPage/
              |-- login_page.tsx    # Combined login and sign-up page (animated login and sign-up)
              |-- new_style.css     # Styles for login and sign-up
          |-- Main/
              |-- MainDashboard.tsx # Main dashboard for users
          |-- Navbar/
              |-- Navbar.tsx
          |-- Sidebar/
              |-- Sidebar.tsx
          |-- UserProfile/
              |-- Profile.tsx
              |-- EditProfile.tsx
      |-- config/               # Configuration files
          |-- apiConfig.ts      # API URLs, endpoints, and environment settings
          |-- electronConfig.ts # Electron-specific configuration
      |-- dtos/                 # Data Transfer Objects (DTOs)
          |-- userDTO.ts
          |-- chatDTO.ts
      |-- electron/             # Electron-specific setup files
          |-- main.js           # Main process file for Electron
          |-- preload.ts        # Preload scripts for Electron
      |-- features/             # Features for Redux slices
          |-- chat/
              |-- chatSlice.ts
          |-- user/
              |-- userSlice.ts
      |-- hooks/                # Custom React hooks
          |-- useAuth.ts
          |-- useChat.ts
      |-- pages/                # Page-level components (different screens)
          |-- LoginPage.tsx     # Login page screen, reuses LoginPage components
          |-- ChatPage.tsx      # Chat screen, uses Chat components
          |-- ProfilePage.tsx   # User profile page
          |-- ForgotPasswordPage.tsx # Forgot password page
      |-- routes/               # Routing
          |-- AppRoutes.tsx
      |-- security/             # Security and session management
          |-- authGuard.ts      # Route protection to ensure authenticated access
      |-- services/             # API calls and other services
          |-- chatService.ts
          |-- authService.ts
      |-- sockets/              # WebSocket setup for real-time features
          |-- chatSocket.ts     # Manages WebSocket connection for chat updates
      |-- store/                # Redux store configuration
          |-- store.ts
      |-- styles/               # Global styles and individual CSS modules
          |-- global.css        # General global styles
          |-- Chat.module.css   # Module styles for chat components
          |-- styles.css        # Additional global styles
      |-- validations/          # Validation logic for form inputs
          |-- loginValidation.ts
          |-- signupValidation.ts
      |-- utils/                # Utility functions
          |-- logger.ts         # Logging for the frontend
          |-- formatter.ts      # Generic formatting functions
      |-- renderer/             # Electron preload script
          |-- preload.ts        # Preload scripts for Electron
      |-- App.tsx               # Main app entry
      |-- index.tsx             # Entry point for the React app
      |-- .env                  # Environment variables (sensitive information)
```

### Important Folders:

- **`src/components`**: Contains React components such as the login page and the main dashboard.
- **`src/styles`**: Contains the CSS files for styling the components.
- **`.erb/`**: Contains Webpack and Electron-related configuration files.

## Scripts

Here is a list of all the available npm scripts:

- **`npm start`**: Runs the app in development mode. The window will reload if you make edits to the code.
- **`npm run build`**: Builds the app for production to the `dist` folder.
- **`npm run package`**: Builds and packages the app into an executable file for your operating system.
- **`npm run lint`**: Lints the code using ESLint.
- **`npm run lint:fix`**: Lints and automatically fixes any linting issues.

## Features

- **Cross-Platform Desktop Application**: Built with Electron, the app can be packaged and run on Windows, macOS, and Linux.
- **React for UI**: Utilizes the power of React for building dynamic and reusable UI components.
- **Hot Module Reloading**: Development server with hot reloading allows for faster development cycles.
- **Electron Integration**: Electron APIs are exposed to the frontend through the preload script, allowing integration with native features.

## Contributing

Contributions are welcome! If you have suggestions or want to contribute to this project, feel free to create an issue or submit a pull request.

### How to Contribute:

1. **Fork the Repository**.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/LearnLink.git
   ```
3. **Create a branch for your feature**:
   ```bash
   git checkout -b my-new-feature
   ```
4. **Make your changes and commit them**:
   ```bash
   git commit -m "Add my feature"
   ```
5. **Push to your fork**:
   ```bash
   git push origin my-new-feature
   ```
6. **Create a pull request** to the main repository.

## License

This project is licensed under the MIT License.
