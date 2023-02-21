CREATE TABLE Customer(
 id SERIAL PRIMARY KEY,
 first_name VARCHAR (100) NOT NULL,
 last_name VARCHAR (100) NOT NULL
);

CREATE TABLE Customer_profile(
 id SERIAL PRIMARY KEY,
 customer_id integer not null,
 isLoggedIn boolean DEFAULT false
);

insert into Customer (first_name,last_name) values('John','Doe');
insert into Customer (first_name,last_name) values('Jerome','Lalu');
insert into Customer (first_name,last_name) values('Lea','Rive');

insert into Customer_profile (customer_id,isLoggedIn)
select id, true from Customer where first_name='John';
insert into Customer_profile (customer_id,isLoggedIn)
select id, false from Customer where first_name='Jerome';

select first_name from Customer_profile cp
left join Customer c on cp.customer_id=c.id
where cp.isLoggedIn=true;

select first_name, coalesce(isLoggedIn,false) as isLoggedIn from Customer c
left join Customer_profile cp on c.id=cp.customer_id;

select count(*) from Customer c
left join Customer_profile cp on c.id=cp.customer_id
where cp.isLoggedIn=false or cp.isLoggedIn is null;



