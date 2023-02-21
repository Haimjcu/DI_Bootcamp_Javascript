update film set language_id=2 where film_id between 7 and 10;
update film set language_id=4 where film_id between 77 and 83;

// customer_address_id - address_id to address table
// address_id needs to exist in address table

drop table customer_review;
// easy because not a parent to anything

select count(*) from rental where return_date is null;
// 183 not returned

select title, rental_rate from rental
left join inventory using (inventory_id)
left join film using(film_id)
where return_date is null
order by rental_rate desc limit 30;

select film_id from actor
left join film_actor using(actor_id)
left join film_category fc using(film_id)
where first_name='Penelope' and last_name='Monroe'
and fc.category_id=6

//6
//1
select title, description from actor
left join film_actor using(actor_id)
left join film using(film_id)
where first_name='Penelope' and last_name='Monroe'
and description ilike '%sumo%'

//2
select title, description from category c
left join film_category using(category_id)
left join film using(film_id)
where c.category_id=6
and length < 60
and rating ='R'

//3
select title, description from customer
left join rental using(customer_id)
left join payment using(rental_id)
left join inventory using(inventory_id)
left join film using(film_id)
where first_name='Matthew' and last_name='Mahan'
and return_date between '2005-07-28' and '2005-08-01'
and amount >4

//4
select title, description, replacement_cost from customer
left join rental using(customer_id)
left join inventory using(inventory_id)
left join film using(film_id)
where first_name='Matthew' and last_name='Mahan'
and (title ilike '%boat%' or description ilike '%boat%')



