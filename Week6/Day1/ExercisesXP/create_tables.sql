CREATE TABLE items(
 items_id SERIAL PRIMARY KEY,
 item_name VARCHAR (100) NOT NULL,
 price numerice(11,2) NOT NULL
);

CREATE TABLE customers(
 customer_id SERIAL PRIMARY KEY,
 first_name VARCHAR (100) NOT NULL,
 last_name VARCHAR (100) NOT NULL
);