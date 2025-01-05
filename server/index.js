const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post('/create', (req, res) => {
  const comment = req.body.comment
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
