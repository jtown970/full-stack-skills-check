-- test table friends
CREATE TABLE if not exists friends (
    friend_id serial primary key,
    friend_name varchar(50)
);

-- 
create table if not exists products(
    product_id serial primary key,
    name varchar(100),
    img_url varchar(200),
    price float(3)
);