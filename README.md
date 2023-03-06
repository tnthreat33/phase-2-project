Center Grove Softball React App
This is a simple React application that allows users to view, add, and remove players from a softball roster and add them to a lineup. It uses React Router for navigation and useState and useEffect hooks for state management.

How to Run
Clone the repository: git clone git@github.com:tnthreat33/phase-2-project.git
Navigate to the project directory: cd phase-2-project
Install dependencies: npm install
Start the server: npm start
Open your web browser and navigate to http://localhost:3000
Navigate to json-server: cd json-server-template
Start db.json: npm run dev 

Features
View a list of players on the roster
Add a new player to the roster
Remove a player from the roster
Add a player to the lineup
Remove a player from the lineup
Navigate between pages using React Router

Dependencies
This application uses the following dependencies:
React
React Router


Folder Structure
├── App.js
├── index.js
├── NavBar.js
├── Roster.js
├── Home.js
├── Lineup.js
├── PlayerForm.js
├── App.css
├── index.css
└── README.md

App.js - The main component that contains the React Router setup and state management for players and lineup.
index.js - The entry point for the application that renders the App component.
NavBar.js - A reusable component that contains links to navigate between pages.
Roster.js - A component that displays the roster of players and allows for adding and removing players.
Home.js - A component that serves as the home page and contains a form to add new players.
Lineup.js - A component that displays the current lineup and allows for removing players from the lineup.
PlayerForm.js - A component that contains a form to add a new player to the roster.
App.css and index.css - CSS files for styling the application.

API Reference
This project uses a JSON server with the following endpoints:

GET /players - returns a list of all players
GET /players/:id - returns a specific player by ID
POST /players - creates a new player
PUT /players/:id - updates an existing player by ID
DELETE /players/:id - deletes a player by ID

The server is located in the db.json file.