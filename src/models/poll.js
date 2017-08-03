import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  answer: {
    type: String,
    unique: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

AnswerSchema.method('vote', function voting(vote, cb) {
  this.votes += 1;
  this.parent().save(cb);
});

const PollSchema = new Schema(
  {
    question: {
      type: String,
      unique: true,
    },
    answers: [AnswerSchema],
  },
	// { versionKey: false },
);

const Poll = mongoose.model('Poll', PollSchema);
export default Poll;
