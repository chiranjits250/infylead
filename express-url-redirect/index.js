const express = require("express")
const app = express()
const path = require("path")

// Set the path for the HTML file

app.use((req, res, next) => {
  if (req.headers.host.startsWith("infylead.com")) {
    return res.redirect(301, `https://www.infylead.com${req.originalUrl}`)
  }
  next()
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})
