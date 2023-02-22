select first_name as First, last_name as Last from employees;

select distinct department_id from employees;

select first_name last_name,email, phone_number,hire_date from employees
order by first_name desc;

select first_name, last_name, salary, (salary*.15) as PF from employees;

select employee_id,first_name, last_name, salary from employees
order by salary;

select sum(salary) from employees;

select min(salary) as min_salary, max(salary) as max_salary from employees;

select avg(salary) from employees;

select count(*) from employees;

select UPPER(first_name) from employees;

select substring(first_name,1,3) from employees;

select first_name, last_name, concat(first_name,' ', last_name) as full_name from employees;

select first_name, last_name,(length(first_name)+length(last_name)+1) as fullname_length
from employees;

select first_name, first_name::varchar !~ '[^0-9\-\.]' from employees;

select * from employees limit 10;
