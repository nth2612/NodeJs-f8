import express from "express"

const app = express()
const port = 5173

app.get('/', (req, res) => {
  return res.send('Hello world11')
})

app.listen(port, () => console.log(`Example is running at port: ${port}`))