import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = mongoose.Schema({
  local: {
    email: String,
    password: String,
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// don't use arrow function here!
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

export default mongoose.model('User', userSchema);
