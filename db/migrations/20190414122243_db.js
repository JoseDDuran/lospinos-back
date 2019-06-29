// jose

function rol(table){
  table.increments('idRol').primary();
  table.string('nombre',60);
}

function usuario(table){
  table.increments('idUsuario').primary();
  table.string('nombres', 60).notNullable();
  table.string('apellidos', 60).notNullable();
  table.enu('genero', ['Masculino', 'Femenino']).notNullable();
  table.string('correo').unique().notNullable();
  table.string('documentoIdentidad').unique();
  table.string('contrasena').notNullable();
  table.integer('idRol').unsigned().notNullable();
  table.foreign('idRol').references('idRol').inTable('rol');
  table.boolean('estado');
}

function tipoHabitacion(table){
  table.increments('idTipoHabitacion').primary();
  table.string('nombre', 60).notNullable();
  table.float('precio').notNullable();
}

function habitacion(table){
  table.increments('idHabitacion').primary();
  table.string('nombre', 60).notNullable();
  table.integer('idTipoHabitacion').unsigned().notNullable();
  table.foreign('idTipoHabitacion').references('idTipoHabitacion').inTable('tipoHabitacion');
}

function detalleBoletaHabitacion(table){
  table.increments('idDetalleBoletaHabitacion').primary();
  table.integer('idHabitacion').unsigned().notNullable();
  table.foreign('idHabitacion').references('idHabitacion').inTable('habitacion');
}

function boletaHabitacion(table){
  table.increments('idBoletaHabitacion').primary();
  table.integer('idEstadoBoletaHabitacion').unsigned().notNullable();
  table.foreign('idEstadoBoletaHabitacion').references('idEstadoBoletaHabitacion').inTable('estadoBoletaHabitacion');
  table.datetime('fechaRealizacion').notNullable();
  table.string('nombre').notNullable();
  table.string('documentoIdentidad').notNullable();
}

function estadoBoletaHabitacion(table){
  table.increments('idEstadoBoletaHabitacion').primary();
  table.string('nombre');
}

function huespedHabitacion(table) {
  table.increments('idHuespedHabitacion').primary();
  table.integer('idHuesped').unsigned().notNullable();
  table.foreign('idHuesped').references('idHuesped').inTable('huesped');
  table.integer('idBoletaHabitacion').unsigned().notNullable();
  table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
  table.boolean('representante');
}

function huesped(table){
  table.increments('idHuesped').primary();
  table.string('nombres', 60).notNullable();
  table.string('apellidos', 60).notNullable();
  table.enu('genero', ['Masculino', 'Femenino']).notNullable();
  table.integer('edad').notNullable();
}

function informe(table){
  table.increments('idInforme').primary();
  table.text('descripcion');
  table.datetime('fechaRealizacion');
  table.integer('idBoletaHabitacion').unsigned().notNullable();
  table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');

}

function boletaConsumo(table){
  table.increments('idBoletaConsumo').primary();
  table.datetime('fechaRealizacion').notNullable();
  table.integer('idBoletaHabitacion').unsigned().notNullable();
  table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
}

function detalleBoletaConsumo(table){
  table.increments('idDetalleBoletaConsumo').primary();
  table.integer('idBoletaConsumo').unsigned().notNullable();
  table.foreign('idBoletaConsumo').references('idBoletaConsumo').inTable('boletaConsumo');
}

function producto(table){
  table.increments('idProducto').primary();
  table.string('nombre').notNullable();
  table.float('precio').notNullable();
}

function categoria(table){
  table.increments('idCategoria').primary();
  table.string('nombre');
}

function reembolso(table){
  table.increments('idReembolso').primary();
  table.text('descripcion').notNullable();
  table.datetime('fechaRealizacion').notNullable();
  table.integer('idBoletaHabitacion').unsigned().notNullable();
  table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
  table.boolean('estado');
}

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable('rol', rol),
    knex.schema.createTable('usuario', usuario),
    knex.schema.createTable('tipoHabitacion', tipoHabitacion),
    knex.schema.createTable('habitacion', habitacion),
    knex.schema.createTable('detalleBoletaHabitacion', detalleBoletaHabitacion),
    knex.schema.createTable('boletaHabitacion', boletaHabitacion),
    knex.schema.createTable('estadoBoletaHabitacion', estadoBoletaHabitacion),
    knex.schema.createTable('huespedHabitacion', huespedHabitacion),
    knex.schema.createTable('huesped', huesped),
    knex.schema.createTable('informe', informe),
    knex.schema.createTable('boletaConsumo', boletaConsumo),
    knex.schema.createTable('detalleBoletaConsumo', detalleBoletaConsumo),
    knex.schema.createTable('producto', producto),
    knex.schema.createTable('categoria', categoria),
    knex.schema.createTable('reembolso', reembolso)
  ]);
};

exports.down = async (knex) => {
  await Promise.all([
    knex.raw('SET foreign_key_checks = 0;'),
    knex.schema.createTable('rol', rol),
    knex.schema.createTable('usuario', usuario),
    knex.schema.createTable('tipoHabitacion', tipoHabitacion),
    knex.schema.createTable('habitacion', habitacion),
    knex.schema.createTable('detalleBoletaHabitacion', detalleBoletaHabitacion),
    knex.schema.createTable('boletaHabitacion', boletaHabitacion),
    knex.schema.createTable('estadoBoletaHabitacion', estadoBoletaHabitacion),
    knex.schema.createTable('huespedHabitacion', huespedHabitacion),
    knex.schema.createTable('huesped', huesped),
    knex.schema.createTable('informe', informe),
    knex.schema.createTable('boletaConsumo', boletaConsumo),
    knex.schema.createTable('detalleBoletaConsumo', detalleBoletaConsumo),
    knex.schema.createTable('producto', producto),
    knex.schema.createTable('categoria', categoria),
    knex.schema.createTable('reembolso', reembolso),
    knex.raw('SET foreign_key_checks = 1;'),
  ]);
};
