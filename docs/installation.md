# Installing Nexus Grid

To install Nexus Grid, follow these steps:

1. Clone the repository: git clone https://github.com/KOSASIH/nexus-grid.git
2. Install the dependencies: npm install or yarn install
3. Set up the environment: cp .env.example .env and update the environment variables as needed
4. Start the application: npm start or yarn start

# Setting up the Project

After installation, you can set up the project by following these steps:

1. Create a new database: npx sequelize db:create
2. Run the migrations: npx sequelize db:migrate
3. Seed the database: npx sequelize db:seed:all
