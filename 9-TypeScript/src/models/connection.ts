import mysql from 'mysql2/promise'
import config from '../config'

const connection = mysql.createPool({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
})

export default connection;