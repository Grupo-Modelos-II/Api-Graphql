# Repaso Principios de diseño (POO)

Api de Graphql para realizar un CRUD de clientes usando principios de diseño

## Descarga Dependencias

```console
yarn install
```
```console
npm install
```
Cualquiera de los dos anteriores son validos para descargar las dependencias del proyecto

## Construccion

```console
yarn build
```
```console
npm run build
```
Cualquiera de los dos anteriores son validos para construir el proyecto

## Ejecución

### Para entornos de desarrollo

```console
yarn dev
```
```console
npm run dev
```
Cualquiera de los dos anteriores son validos para ejecutar el proyecto


### Para entornos de produccion

```console
yarn start
```
```console
npm start
```
Cualquiera de los dos anteriores son validos para ejecutar el proyecto

## Acerca de

### Variables de entorno

```console
DATABASE_HOST
DATABASE_USER
DATABASE_PASSWORD
DATABASE_NAME
```
El valor almacenado en estas variables no cambia en ejecución, por lo tanto, si se desea utilizar de las tres bases de datos, se recomienda que los datos de conexión para todos los gestores, sean los mismos.

### Principios de diseño

Aplicamos principalmente el principio KISS, responsabilidad única y Sustitución de Liskov.
- KISS: Gran mayoría del proyecto está escrito de tal forma que todo se mantenga simple.
- Responsabilidad única: Al buscar que el proyecto se mantenga con una estructura simple, todas las clases tienen exclusivamente una única cosa por la cual hacerse cargo.
- Sustitución de Liskov: Al buscar poder trabajar con mútiples bases de datos, se diseñó una clase abstracta y tres clases hijas, teniendo las hijas el mismo comportamiento sin modificación alguna, se puede usar cualquiera de las tres clases sin grandes inconvenientes.

### Diagrama de Clases

![Diagrama de clases](https://github.com/Grupo-Modelos-II/Api-Graphql-Principios-Dise-o/blob/master/docs/Principios_Diseno_Graphql_Clients.jpg)

## Integrantes 
- Jesús Manuel Leiva Bermúdez - 20191020132 
- Jesus Alberto Lozada Montiel - 20191020098
- Sergio David Paez Suarez - 20191020167
