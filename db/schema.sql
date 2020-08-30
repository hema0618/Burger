DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int auto_increment not null PRIMARY KEY,
burger_name varchar (70) not null,
devoured boolean default false
);