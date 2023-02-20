select * from customer;

select concat(first_name,' ', last_name) as full_name from customer;

select distinct(create_date) from customer;

select first_name,last_name,email from customer order by first_name desc;

select film_id, title, description, release_year, rental_rate from film order by rental_rate;

select address, phone from address where district = 'Texas';

select title, description, release_year, rental_rate from film where film_id in(15,150);

select film_id, title, description, length, rental_rate from film where title ='Cider Desire';

select film_id, title, description, length, rental_rate from film where title like 'Ci%';

select title, description, rental_rate from film order by rental_rate limit 10;

select title, description, rental_rate from film order by rental_rate limit 10 offset 10;

select first_name,last_name, amount, date(payment_date) from payment
left join customer using(customer_id)
order by payment.customer_id;

select title, description from film 
left join inventory using(film_id)
where inventory_id is null;

select country, city from city
left join country using(country_id)
order by country, city;


select staff_id, staff.first_name as staff_first_name ,staff.last_name as staff_last_name,
customer.first_name, customer.last_name, amount, date(payment_date) from payment
left join customer using(customer_id)
left join staff using(staff_id)
order by staff_id,customer.first_name, customer.last_name;


