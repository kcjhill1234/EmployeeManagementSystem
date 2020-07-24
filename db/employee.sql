DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerdb;

USE employee_trackerdb;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(45) NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL,
department_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT ,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NUll,
manager_id INT NOT NULL,
PRIMARY KEY (id)
);

SELECT * FROM employee_trackerdb.role;
