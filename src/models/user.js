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

userSchema.methods.generateHash = password =>
	bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

userSchema.methods.validPassword = password => bcrypt.compareSync(password, this.local.password);

export default mongoose.model('User', userSchema);
