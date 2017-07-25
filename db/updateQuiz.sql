UPDATE quiz
SET
data = $1
WHERE auth0_id = $2 and quiz_name = $3;
