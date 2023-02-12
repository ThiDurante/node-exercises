const app = require('./app.js')

const PORT = process.env.PORT || 3001

app.listen(PORT, '127.0.0.1', ()=>{
  console.log(`Server listenning on port: ${PORT}`)
})