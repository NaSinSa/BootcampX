SELECT assignments.day, COUNT(assignments.chapter) AS total_assignments
FROM assignments
GROUP BY assignments.day
ORDER BY day