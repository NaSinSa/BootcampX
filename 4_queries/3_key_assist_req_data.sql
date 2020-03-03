SELECT teachers.name AS teacher, students.name AS student, assignments.name AS assignment, completed_at - started_At AS duration 
FROM assistance_requests
JOIN students ON students.id = assistance_requests.student_id
JOIN assignments ON assignments.id = assistance_requests.assignment_id
JOIN teachers ON teachers.id = assistance_requests.teacher_id
ORDER BY duration
