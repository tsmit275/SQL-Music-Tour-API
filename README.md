# SQL Music Tour API

## Description
SQL Music Tour API is a Node.js application designed to manage music tours, including events, stages, set times, and meet and greets. This application provides a RESTful API for managing and querying data related to music tours, offering detailed information about each event and its associated stages.

## Technologies
- Node.js
- Express.js
- Sequelize
- PostgreSQL
- body-parser

## Technical Information 
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/SQL-Music-Tour-API.git
   cd SQL-Music-Tour-API
2. **Install dependencies**
npm install
3. **Set up the databse**
Ensure PostgreSQL is installed and running
Create a database named SQL-Music-Tour-API
4. **Run migration**
npx sequelize-cli db:migrate
5. **Start the server**
npm start

## Issues
Currently there is a Cannot GET / error when running the server