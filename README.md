# Desafío Técnico: IACC
## Software Stack

Principalmente, la funcionalidad desarrollada ocupa los siguientes componentes:

* Framework - Express
* Base de Datos - MySQL
* ORM - Sequelize

## Configuraciones de Inicio

* Ejecutar el comando `npm i` para instalar las dependencias.
* Copiar el archivo `.env.example` y renombrar a `.env`
* Completar los campos dentro del .env
* Abrir un terminal en el directorio donde se clonó el proyecto y ejecutar el comando `npm start`.

## APIS

### Alumnos

* GET - `/api/alumnos`: Obtiene todos los datos de alumnos.
* GET - `/api/alumnos/(rut)`: Obtiene los datos de un alumno específico. De entrada requier un rut sin número verificador, sin puntos ni guión.
* POST - `/api/alumnos/(rut)`: Registra un nuevo alumno. De body, requiere un json de entrada con los siguientes campos.
  * rut: Rut del alumno sin número verificador, sin puntos ni guión.
  * dv: Número verificador del rut.
  * nombres: Nombres del alumno. Tiene un límite de 200 carácteres.
  * apellido_paterno: Apellido paterno del alumno. Límite de 100 caráceres.
  * apellido_materno: Apellido materno del alumno. Límite de 100 caráceres.
* PUT - `/api/alumnos/(rut)`: Actualiza los datos de un alumno. Requiere un body como el anterior, además de un rut como parámetro que indica cuál alumno se modificará según su rut.
* DELETE - `/api/alumnos/(rut)`: Elimina a un alumno. Solo requiere el rut del alumno como parámetro.

### Carreras

* GET - `/api/carreras`: Obtiene todas las carreras encontradas en la base de datos.
* GET - `/api/carreras/(codigo)`: Obtiene los datos de una carrera específica. De entrada requiere el código numérico que identifica a la carrera.
* POST - `/api/carreras/(codigo)`: Registra una nueva carrera. De body, requiere un json de entrada con los siguientes campos.
  * codigo: Código numérico que identificará a la carrera.
  * nombres: Nombres de la carrera. Límite de 200 carácteres.
* PUT - `/api/carreras/(codigo)`: Actualiza los datos de una carrera. Requiere un body como el anterior, además de el código identificador de la carrera a modificar.
* DELETE - `/api/carreras/(codigo)`: Elimina una carrera. Solo requiere el código de carrera como parámetro.

### Inscribir Alumno a Carrera

* GET - `/api/alumno_carrera`: Obtiene todos los datos de alumnos registrados en carreras.
* GET - `/api/alumno_carrera/(rut)/(codigo)`: Obtiene los datos de un alumno específico en una carrera. De entrada requiere un rut sin número verificador, sin puntos ni guión. Como segunda entrada, requiere el código de la carrera.
* POST - `/api/alumno_carrera/(rut)/(codigo)`: Registra a un alumno en una carrera. De body, requiere un json de entrada con los siguientes campos.
  * rut: Rut del alumno sin número verificador, sin puntos ni guión.
  * codigo: Código numérico que identifica a la carrera.
  * fecha_inicio: Fecha de inicio del registro.
  * fecha_final: Fecha de término de la carrera.
* PUT - `/api/alumno_carrera/(rut)/(codigo)`: Actualiza los datos del registro. Requiere un body como el anterior, además de un rut como parámetro que indica cuál alumno se modificará y a cuál carrera.
* DELETE - `/api/alumno_carrera/(rut)/(codigo)`: Elimina el registro. Requiere rut y código de carrera.

## Pruebas de Carga
