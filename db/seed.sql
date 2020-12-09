DROP DATABASE IF EXISTS employeeManagementSystem_db;
CREATE DATABASE employeeManagementSystem_db;

USE employeeManagementSystem_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
  PRIMARY KEY (id)
);


CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50),
  salary INT default 0,
  department VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  role_id INT default 0,
  manager_id VARCHAR(50),
  PRIMARY KEY (id)
);

INSERT INTO department (name) VALUES ("sales"), ("finance"), ;

INSERT INTO roles (title, salary, department_id) VALUES ("salesperson", 10000, 1);

INSERT INTO roles (title, salary, department_id) VALUES ("sales manager", 10000, 2);


INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("engineer");

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("John", "Joe", 3, 4);

