const diaryModel=require('../model/diarySchema')
const mongoose=require('mongoose')

//get all diary
const getAll=async (req,res) => {
  const diary=await diaryModel.find({});

  res.status(200).json(diary)
}

//get a single one
const getOne = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Nothing found'})
  }

  const diary = await diaryModel.findById(id)

  if (!diary) {
    return res.status(404).json({error: 'Nothing found'})
  }

  res.status(200).json(diary)
}

//create a new diary
const createOne = async (req, res) => {
    const {date,body} = req.body
  
    try {
      const diary = await diaryModel.create({ date,body })
      res.status(200).json(diary)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
}

//delete one diary
const deleteOne = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Nothing found'})
  }

  const diary = await diaryModel.findOneAndDelete({_id: id})

  if(!diary) {
    return res.status(400).json({error: 'Nothing found'})
  }

  res.status(200).json(diary)
}

module.exports={getAll,getOne,createOne,deleteOne}