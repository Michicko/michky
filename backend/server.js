const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

// DB connections
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

async function connectDb() {
	await mongoose.connect(db);
	console.log('Server connected to database successfully!!');
}

connectDb().catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})