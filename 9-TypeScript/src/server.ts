import app from './app';
import config from './config'

const PORT = config.APP_PORT

app.listen(PORT, ()=>{
  console.log(`Listening on port: ${PORT}`);
})