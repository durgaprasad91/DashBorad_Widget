# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Dashboard Application

--> This is a React-based dashboard application using Vite, Redux for state management, Material UI for     design,and Framer Motion for animations.

Technologies Used
-->React: A JavaScript library for building user interfaces.
-->Vite: A build tool that provides a fast development environment.
-->Redux: State management library used without slices.
-->Material UI: A React component library for building modern UIs.
-->Framer Motion: A library for animations in React.
   Prerequisites
-->Before you begin, ensure you have met the following requirements:

Node.js: Make sure you have Node.js installed. You can download it from Node.js official website.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository
Install dependencies:

Run the following command to install the required dependencies:

bash
Copy code
npm install
Running the Application Locally
Start the development server:

bash
Copy code
npm run dev
This command will start the Vite development server and the application should be available at http://localhost:5173.

Build the application (for production):

If you want to build the application for production, use the following command:

bash
Copy code
npm run build
The built application will be available in the dist folder.

Project Structure
src/: Contains the source code of the application.
components/: Contains React components.
Redux/: Contains Redux-related files (actions, reducers).
App.jsx: The main application component.
index.jsx: Entry point of the application.
public/: Contains static assets.
vite.config.js: Vite configuration file.


Usage


Adding a Widget: Click the "+ Add Widget" button in the dashboard to add a new widget.
Removing a Widget: Click the red cross icon on the widget card to remove it.
Searching Widgets: Use the search bar to filter widgets by name or text.
Contributing
If you would like to contribute to this project, please fork the repository and make a pull request.