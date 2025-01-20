# pollmaker

This is a web application that lets you create, share, and participate in custom polls. [Try it out here!](pollmaker-two.vercel.app)

The frontend is developed using React.js and the backend is built with Node.js and Sequelize for managing a PostgreSQL database.

## Backend Setup

1. Clone the repository:
```
git clone <repository-url>
cd backend
```

2. Install dependencies:
```
npm install
```

3. Configure environment variables:
Create a .env file with the following variables:
```
PORT=3000
DATABASE_URL=your_database_url
ORIGIN=http://localhost:5173
```

4. Run database migrations:
```
npx sequelize-cli db:migrate
```

5. Start the server:
```
npm run dev
```

## Frontend Setup

1. Navigate to the frontend folder:

```
cd frontend
```

2. Install dependencies:
```
npm install
```

3. Configure environment variables:
Create a .env file with the following variables:
```
VITE_SERVER=http://localhost:3000/
VITE_BASE_URL=http://localhost:5173/
```

4. Start the development server:
```
npm run dev
```

## Usage

1. Visit [here](pollmaker-two.vercel.app) to make a new poll.

2. Create a new poll by filling in the form and submitting.

3. Share the poll link with others to collect votes.

4. View results on the poll page.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
