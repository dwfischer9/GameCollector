const express = require('express');
const app = express();
const port = 3001;

var mysql = require('mysql2');
const strSql = 'SELECT * FROM dbo.GameMaster;';
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Daniel87"
});
app.post('/execute-code', (req, res) => {
  // Logic to execute code when endpoint is hit
  console.log('Executing code...');
  // Add your code execution logic here
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  }); 

  con.connect(function(err) {
    if (err) throw err;
    con.query(strSql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  // Send a response back to the client
  res.send('Code executed successfully');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});



