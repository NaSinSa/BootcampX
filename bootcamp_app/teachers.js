const { Pool } = require('pg');

const pool = new Pool({
  user: 'ubuntu',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv.slice(2)[0];

pool.query(`
  SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
  FROM cohorts
  JOIN students ON students.cohort_id = cohorts.id
  JOIN assistance_requests ON assistance_requests.student_id = students.id
  JOIN teachers ON assistance_requests.teacher_id = teachers.id
  WHERE cohorts.name LIKE '%${cohortName}%'
  ORDER BY teacher;
`)
.then(res => {
  console.log('connected');
  res.rows.forEach(ele => {
    console.log(`${ele.cohort}: ${ele.teacher}`);
  });
});