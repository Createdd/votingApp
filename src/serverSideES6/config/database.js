import mongoose from 'mongoose';
import constants from './constants';

// Remove warning with Promise
mongoose.Promise = global.Promise;

try {
  mongoose.connect(constants.MONGO_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

const db = mongoose.connection;

db
	.once('open', () => {
  console.log('MongoDB is connected!');
})
	.on('error', (err) => {
  console.error(`Error while connecting to ${err.message}`);
  throw err;
});

export default db;
