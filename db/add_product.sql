insert into products (name, img_url, price)
values ($1, $2, $3) returning *;