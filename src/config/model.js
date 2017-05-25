import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  text: {
    type: String,
    unique: true,
  },
  votes: Number,
});

const PollSchema = new Schema({
  question: {
    type: String,
    unique: true,
  },
  answers: [AnswerSchema],
});

const Poll = mongoose.model('Poll', PollSchema);
export default Poll;
