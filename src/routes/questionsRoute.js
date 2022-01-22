const {
  getAllQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
  createQuestion,
  getQuestionsByQuery,
} = require('../controllers/questionsController')

const express = require('express')
const router = express.Router()

router.get('/', getAllQuestions)
router.get('/query', getQuestionsByQuery)
router.get('/:id', getQuestion)
router.post('/', createQuestion)
router.patch('/:id', updateQuestion)
router.delete('/:id', deleteQuestion)

module.exports = router
