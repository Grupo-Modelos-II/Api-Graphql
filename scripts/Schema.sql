CREATE TABLE Cliente(
    id integer primary key,
    nombre varchar(25) not null,
    apellido varchar(25) not null,
    edad integer not null
);

INSERT INTO Cliente VALUES(1,'Jesús','Leiva',19);
INSERT INTO Cliente VALUES(2,'Sergio','Paez',19);