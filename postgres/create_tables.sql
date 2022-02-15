create table if not exists users(
id serial primary key,
name text not null,
date timestamp not null default now()
);