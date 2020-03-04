const { Pool } = require('pg');

const pool = new Pool({
  user: 'ubuntu',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv.slice(2)[0];
const howManyToShow = process.argv.slice(2)[1];

const values = [`%${cohortName}%`, howManyToShow];

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cohortName}%'
ORDER BY students.id
LIMIT ${howManyToShow};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
});