UPDATE quiz
SET
data = $2,
quiz_name = $3
WHERE id = $1;
