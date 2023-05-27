const express=require('express')
const {getAll,getOne,createOne,deleteOne}=require('../controller/diaryController')

const appRouter=express();

appRouter.get("/",getAll)
appRouter.get('/:id',getOne)
appRouter.post("/",createOne);
appRouter.delete("/:id",deleteOne)

module.exports=appRouter;