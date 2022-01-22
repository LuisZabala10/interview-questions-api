const mongoose = require('mongoose')

const QuestionScheme = mongoose.Schema({
  question: {
    type: String,
    required: [true, 'You must provied a question'],
  },
  answer: {
    type: String,
    required: [true, 'You must provied the answer'],
  },
  tech: {
    type: String,
    required: [true, 'You must provied a tech that this question belong to'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Question', QuestionScheme)
