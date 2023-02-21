CREATE TABLE book(
 book_id SERIAL PRIMARY KEY,
 title VARCHAR (100) NOT NULL,
 author VARCHAR (100) NOT NULL 
);

insert into book (title, author) values('Alice In Wonderland','Lewis Carroll');
insert into book (title, author) values('Harry Potter','J.K Rowling');
insert into book (title, author) values('To kill a mockingbird','Harper Lee');

CREATE TABLE student(
 student_id SERIAL PRIMARY KEY,
 name VARCHAR (100) NOT NULL unique,
 age integer NOT NULL check (age<=15)
);

insert into student (name,age) values('John',12);
insert into student (name,age) values('Lera',11);
insert into student (name,age) values('Patrick',10);
insert into student (name,age) values('Bob',14);


CREATE TABLE library(
 book_fk_id integer not null references book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
 student_fk_id integer not null references student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
 borrowed_date date not null,
 Primary key (book_fk_id,student_fk_id)
);

insert into library (book_fk_id,student_fk_id,borrowed_date)
select book_id, student_id, '2022-02-15' from book, student
where title ='Alice In Wonderland' and name='John';

insert into library (book_fk_id,student_fk_id,borrowed_date)
select book_id, student_id, '2021-03-03' from book, student
where title ='To kill a mockingbird' and name='Bob';

insert into library (book_fk_id,student_fk_id,borrowed_date)
select book_id, student_id, '2021-05-23' from book, student
where title ='Alice In Wonderland' and name='Lera';

insert into library (book_fk_id,student_fk_id,borrowed_date)
select book_id, student_id, '2021-08-12' from book, student
where title ='Harry Potter' and name='Bob';

select * from library;

select name, title from library
left join book on book_fk_id=book_id
left join student on student_fk_id=student_id;

select avg(age) from library
left join book on book_fk_id=book_id
left join student on student_fk_id=student_id
where title='Alice In Wonderland';

delete from student where student_id=2;
// it was also deleted from the junction table


