// server.js



const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL user
    password: 'Root', // Replace with your MySQL password
    database: 'ScholarshipDB' // Ensure this database exists
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to database');
});

// Route to fetch student details by ID
app.get('/students/:id', (req, res) => {
    const studentId = req.params.id;
    const sql = 'SELECT * FROM students WHERE std_id = ?'; // Change 'id' to 'std_id' here
    db.query(sql, [studentId], (err, results) => {
        if (err) {
            return res.status(500).send('Server error');
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(results[0]);
    });
});

  
// Route to insert applicant with std_id and scholarship_name
app.post('/applicants', (req, res) => {
  const { std_id, scholarship_name } = req.body;
  const sql = 'INSERT INTO applicants (std_id, scholarship_name) VALUES (?, ?)';

  db.query(sql, [std_id, scholarship_name], (err, result) => {
    if (err) {
      console.error('Error inserting into applicants:', err);
      return res.status(500).json({ message: 'Error inserting into applicants' });
    }
    res.json({ appln_id: result.insertId }); // Respond with the generated appln_id
  });
});

// Route to insert bank details with retrieved appln_id
app.post('/bank-details', (req, res) => {
  const { acc_no, UBI, NEFT_IFSC_code, bank_branch_code, student_id } = req.body;
  const sql = 'INSERT INTO bank_details (acc_no, UBI, NEFT_IFSC_code, bank_branch_code, student_id) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [acc_no, UBI, NEFT_IFSC_code, bank_branch_code, student_id], (err) => {
    if (err) {
      console.error('Error inserting into bank_details:', err);
      return res.status(500).json({ message: 'Error inserting into bank_details' });
    }
    res.sendStatus(201);
  });
});

// server.js

app.post('/awardhistory', (req, res) => {
  const { scholarship_name, std_id } = req.body;

  const insertSQL = 'INSERT INTO awardhistory (scholarship_name, std_id) VALUES (?, ?)';
  db.query(insertSQL, [scholarship_name, std_id], (err, result) => {
    if (err) {
      console.error('Error inserting into awardhistory:', err);
      return res.status(500).json({ message: 'Error inserting into award history' });
    }
    res.sendStatus(201);
  });
});


  

// Route to get all students
app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students'; // Assuming your table name is 'students'
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching students:', err);
            return res.status(500).json({ error: 'Database error fetching students' });
        }
        res.json(results); // Send back the results as a JSON array
    });
});

// server.js



// Other routes

// Route to fetch all award history records
app.get('/award-history', (req, res) => {
  const sql = 'SELECT * FROM awardhistory';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching award history:', err);
      return res.status(500).json({ error: 'Database error fetching award history' });
    }
    res.json(results);  // Send the results back as a JSON array
  });
});



// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
