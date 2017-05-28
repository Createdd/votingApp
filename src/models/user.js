import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },
});

export default mongoose.model('User', userSchema);
