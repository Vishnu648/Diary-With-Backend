const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const diaryRouter = require('./router/diaryRoute')

const app = express();
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
  res.end("Server is running")
}
)

app.use("/diary", diaryRouter)


mongoose.connect('mongodb://127.0.0.1:27017/DiaryBackend')
  .then(() => {
    console.log("Connected to DB");
      app.listen(PORT, () => {
        console.log('Listening to http://localhost:' + PORT);
      }
      )
  }
  )

