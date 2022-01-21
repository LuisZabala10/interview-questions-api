const getAllQuestions = (req, res) => {
  res.send('get all')
}

const getQuestion = (req, res) => {
  res.send('get single question')
}

const updateQuestion = (req, res) => {
  res.send('update question')
}

const deleteQuestion = (req, res) => {
  res.send('delete question')
}

module.exports = {
  getAllQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
}
