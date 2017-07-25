select * from quiz
where auth0_id = $1 
and quiz_name = $2;