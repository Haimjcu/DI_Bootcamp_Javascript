CREATE TABLE product_orders(
 order_id SERIAL PRIMARY KEY,
 customer_id integer not null,
 order_total numeric(11,2) NOT NULL
);

CREATE TABLE itemss(
 items_id SERIAL PRIMARY KEY,
 order_id integer references product_orders(order_id),
 item_name VARCHAR (100) NOT NULL,
 price numeric(11,2) NOT NULL
);

insert into product_orders(customer_id, order_total) values(1,0);
insert into itemss (order_id,item_name, price) values(1,'shirt', 10.99);
insert into itemss (order_id,item_name, price) values(1,'pants', 23.97);
insert into itemss (order_id,item_name, price) values(1,'shorts', 14.95);

CREATE or REPLACE FUNCTION get_order_total(fn integer) 
RETURNS numeric(11,2) AS $order_total$
BEGIN
   RETURN(SELECT sum(price) FROM itemss WHERE itemss.order_id = fn);
END;
$order_total$ LANGUAGE plpgsql;

select * from get_order_total(1);