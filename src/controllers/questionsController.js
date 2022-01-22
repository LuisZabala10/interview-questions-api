const Question = require('../models/Question')

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find({})
    const response = {
      success: true,
      total: questions.length,
      items: questions,
    }
    res.status(200)
    res.json(response)
  } catch (error) {
    res.status(500)
    res.json({ success: false, error: { message: error.message } })
  }
}

const getQuestion = async (req, res) => {
  try {
    const id = req.params.id

    if (id.length < 24) {
      res.status(404)
      return res.json({
        success: false,
        message: 'You must provide a valid id',
      })
    }

    const question = await Question.findOne({ _id: id })
    if (!question) {
      res.status(404)
      return res.json({
        success: false,
        message: `There is no question with id ${id}`,
      })
    }
    const response = {
      success: true,
      total: 1,
      items: question,
    }
    res.status(200)
    res.json(response)
  } catch (error) {
    res.status(500)
    res.json({ success: false, message: error.message })
  }
}

const getQuestionsByQuery = async (req, res) => {
  try {
    const { tech } = req.query
    const questions = await Question.find({ tech: tech })
    const response = {
      success: true,
      total: questions.length,
      items: questions,
    }
    res.status(200)
    res.json(response)
  } catch (error) {
    res.status(500)
    res.json({ success: false, message: error.message })
  }
}

const createQuestion = async (req, res) => {
  try {
    await Question.create(req.body)
    res.status(201)
    res.send()
  } catch (error) {
    res.status(400)
    res.json({ success: false, error: { message: error.message } })
  }
}

const updateQuestion = async (req, res) => {
  try {
    const id = req.params.id
    if (id.length < 24) {
      res.status(404)
      return res.json({
        success: false,
        message: 'You must provide a valid id',
      })
    }

    const question = await Question.findOneAndUpdate({ _id: id }, req.body)
    if (!question) {
      res.status(404)
      return res.json({
        success: false,
        message: `There is no question with id ${id}`,
      })
    }
    res.status(204)
    res.send()
  } catch (error) {
    res.status(500)
    res.json({ success: false, message: error.message })
  }
}

const deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id

    if (id.length < 24) {
      res.status(404)
      return res.json({
        success: false,
        message: 'You must provide a valid id',
      })
    }

    const question = await Question.findOneAndDelete({ _id: id })
    if (!question) {
      res.status(404)
      return res.json({
        success: false,
        message: `There is no question with id ${id}`,
      })
    }
    res.status(204)
    res.send()
  } catch (error) {
    res.status(500)
    res.json({ success: false, message: error.message })
  }
}

module.exports = {
  getAllQuestions,
  getQuestion,
  getQuestionsByQuery,
  createQuestion,
  updateQuestion,
  deleteQuestion,
}
