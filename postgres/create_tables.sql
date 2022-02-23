create table if not exists users(
id serial primary key,
name text not null,
user_name text not null unique,
user_pass text not null,
create_date timestamp not null default now()
);