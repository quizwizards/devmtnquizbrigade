insert into quiz (auth0_id, quiz_name, data) values ($1, $2, $3) returning data;