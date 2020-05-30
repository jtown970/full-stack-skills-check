update products
set name = $2, img_url = $3, price = $4
where product_id = $1;