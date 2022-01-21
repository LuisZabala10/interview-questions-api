const {
  getAllQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
} = require('../controllers/questionsController')

const express = require('express')
const router = express.Router()

router.get('/', getAllQuestions)
router.get('/:id', getQuestion)
router.patch('/:id', updateQuestion)
router.delete('/:id', deleteQuestion)

module.exports = router
