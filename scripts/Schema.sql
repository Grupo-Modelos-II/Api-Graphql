CREATE TABLE Cliente(
    id int primary key not null,
    nombre varchar not null,
    apellido varchar,
    edad integer not null
);

INSERT INTO Cliente VALUES(1,'Sergio','Paez',19);