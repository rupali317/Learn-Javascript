const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')

const app = express()
app.use(cors()) // Allow all origins

app.get('/wiki', async (req, res) => {
  const topic = req.query.topic
  const url = `https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' })
  }
})

app.listen(3000, () => {
  console.log('Proxy running on port 3000')
})
