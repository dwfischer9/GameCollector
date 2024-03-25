const express = require('express');
const app = express();
const PORT = 3001;

var mysql = require('mysql2');
const strSql = 'SELECT * FROM dbo.GameMaster;';
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "Daniel87",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });
// app.get('/data', async (req, res) => {
//   try {
//       const connection = await pool.getConnection();
//       const [rows] = await connection.query(strSql);
//       connection.release();
//       console.log(rows); // Log fetched data to console
//       res.json(rows);
//   } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});