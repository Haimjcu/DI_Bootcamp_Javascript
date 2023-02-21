select name from language;

select f.title, f.description, l.name as film_language from film f
left join language l using(language_id);

select f.title, f.description, l.name as film_language from language l
left join film f  using(language_id);

create table new_film(
 id SERIAL PRIMARY KEY,
 name VARCHAR (300) NOT NULL
);

insert into new_film (name) values('film one');
insert into new_film (name) values('film two');
insert into new_film (name) values('film three');

create table customer_review(
 review_id SERIAL PRIMARY KEY,
 film_id integer references new_film (id) on delete cascade not null,
 language_id integer not null,
 title VARCHAR (100) NOT NULL,
 score integer not null,
 review_text VARCHAR (1000) NOT NULL,
 last_update date not null
);

insert into customer_review (film_id, language_id, title, score, review_text, last_update)
values (1, 1, 'review one', 7,'this moview was good',now() );
insert into customer_review (film_id, language_id, title, score, review_text, last_update)
values (2, 3, 'review two', 2,'this moview was bad',now() );

select * from customer_review;

delete from new_film where id=2;
// row also delted from customer_review table



