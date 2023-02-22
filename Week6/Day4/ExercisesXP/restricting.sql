select first_name, last_name, salary from employees
where salary between 10000 and 15000;

select first_name, last_name, hire_date from employees
where date_part('year',hire_date)=1987;

select first_name from employees
where first_name ilike '%a%' and first_name ilike '%e%';

select first_name, job_title, salary from employees
left join jobs using(job_id)
where employees.job_id not in(9,17)
and salary not in(4500,10000,15000);

select last_name from employees
where length(last_name)=6;

select last_name from employees
where substring(last_name,3,1)='e';

select distinct(job_title) from employees
left join jobs using(job_id);

select first_name, last_name,email, phone_number, hire_date, department_name
from employees
left join departments using(department_id)
where UPPER(last_name) in ('JONES','BLAKE','SCOTT','KING','FORD');

