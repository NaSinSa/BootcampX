SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM cohorts
JOIN students ON students.cohort_id = cohorts.id
JOIN assistance_requests ON assistance_requests.student_id = students.id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher