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
  table.boolean('estado').defaultTo(1);
  table.boolean('flagcontrasena').defaultTo(1); 
}

function proforma(table){
  table.increments('idProforma').primary();
  table.date('fechaRealizacion').defaultTo(knex.fn.now());
  table.integer('dias');
  table.string('nombre').notNullable();
  table.float('monto');
  table.string('documentoIdentidad').notNullable();
}

function detalleProforma(table){
  table.increments('idDetalleProforma').primary();
  table.integer('idHabitacion').unsigned().notNullable();
  table.foreign('idHabitacion').references('idHabitacion').inTable('habitacion');
  table.integer('idProforma').unsigned().notNullable();
  table.foreign('idProforma').references('idProforma').inTable('proforma');
}

function tipoHabitacion(table){
  table.increments('idTipoHabitacion').primary();
  table.string('nombre', 60).notNullable();
  table.integer('plazas');
}

function habitacion(table){
  table.increments('idHabitacion').primary();
  table.string('nombre', 60).notNullable();
  table.float('precio');
  table.enu('estadoHabitacion', ['Activo', 'Inactivo', 'En limpieza']).defaultTo('Activo');
  table.integer('idTipoHabitacion').unsigned().notNullable();
  table.foreign('idTipoHabitacion').references('idTipoHabitacion').inTable('tipoHabitacion');
}

function detalleBoletaHabitacion(table){
  table.increments('idDetalleBoletaHabitacion').primary();
  table.integer('idHuesped').unsigned().notNullable();
  table.foreign('idHuesped').references('idHuesped').inTable('huesped');
  table.integer('idBoletaHabitacion').unsigned().notNullable();
  table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
  table.boolean('representante');
}

function boletaHabitacion(table){
  table.increments('idBoletaHabitacion').primary();
  table.integer('idEstadoBoletaHabitacion').unsigned().notNullable();
  table.foreign('idEstadoBoletaHabitacion').references('idEstadoBoletaHabitacion').inTable('estadoBoletaHabitacion');
  table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
  table.integer('dias');
  table.float('monto');
  table.datetime('fechaFin');
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
  table.string('documentoIdentidad').unique();
}

function informe(table){
  table.increments('idInforme').primary();
  table.text('descripcion');
  table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
  table.integer('idBoletaHabitacion').unsigned().notNullable();
  table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
}

function boletaConsumo(table){
  table.increments('idBoletaConsumo').primary();
  table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
  table.integer('idBoletaHabitacion').unsigned().notNullable();
  table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
}

function detalleBoletaConsumo(table){
  table.increments('idDetalleBoletaConsumo').primary();
  table.integer('idBoletaConsumo').unsigned().notNullable();
  table.foreign('idBoletaConsumo').references('idBoletaConsumo').inTable('boletaConsumo');
  table.string('descripcion');
  table.string('monto');
}

function producto(table){
  table.increments('idProducto').primary();
  table.string('nombre').notNullable();
  table.float('precio').notNullable();
  table.integer('idCategoria').unsigned().notNullable();
  table.foreign('idCategoria').references('idCategoria').inTable('categoria');
}

function categoria(table){
  table.increments('idCategoria').primary();
  table.string('nombre');
}

function reembolso(table){
  table.increments('idReembolso').primary();
  table.text('descripcion').notNullable();
  table.float('monto');
  table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
  table.integer('idBoletaHabitacion').unsigned().notNullable();
  table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
  table.boolean('estado').defaultTo(1);
}

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable('rol', rol),
    knex.schema.createTable('usuario', usuario),
    knex.schema.createTable('tipoHabitacion', tipoHabitacion),
    knex.schema.createTable('habitacion', habitacion),
    knex.schema.createTable('proforma', function (table){
      table.increments('idProforma').primary();
      table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
      table.integer('dias');
      table.float('monto');
      table.string('nombre').notNullable();
      table.string('documentoIdentidad').notNullable();
      table.integer('estado').defaultTo(1);
    }),
    knex.schema.createTable('detalleProforma', detalleProforma),
    knex.schema.createTable('detalleBoletaHabitacion', detalleBoletaHabitacion),
    knex.schema.createTable('boletaHabitacion', function (table){
      table.increments('idBoletaHabitacion').primary();
      table.integer('idEstadoBoletaHabitacion').unsigned().notNullable();
      table.foreign('idEstadoBoletaHabitacion').references('idEstadoBoletaHabitacion').inTable('estadoBoletaHabitacion');
      table.date('fechaRealizacion').defaultTo();
      table.float('monto');
      table.integer('dias');
      table.date('fechaFin');
      table.integer('idProforma').unsigned().notNullable();
      table.foreign('idProforma').references('idProforma').inTable('proforma'); 
    }),
    knex.schema.createTable('estadoBoletaHabitacion', estadoBoletaHabitacion),
    knex.schema.createTable('huespedHabitacion', huespedHabitacion),
    knex.schema.createTable('huesped', huesped),
    knex.schema.createTable('informe', function (table){
      table.increments('idInforme').primary();
      table.text('descripcion');
      table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
      table.integer('idBoletaHabitacion').unsigned().notNullable();
      table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
    
    }),
    knex.schema.createTable('boletaConsumo', function (table){
      table.increments('idBoletaConsumo').primary();
      table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
      table.integer('idBoletaHabitacion').unsigned().notNullable();
      table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
    }
    ),
    knex.schema.createTable('detalleBoletaConsumo', detalleBoletaConsumo),
    knex.schema.createTable('producto', producto),
    knex.schema.createTable('categoria', categoria),
    knex.schema.createTable('reembolso', function (table){
      table.increments('idReembolso').primary();
      table.text('descripcion').notNullable();
      table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
      table.integer('idBoletaHabitacion').unsigned().notNullable();
      table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
      table.boolean('estado');
    }
    )
  ]);
};

exports.down = async (knex) => {
  await Promise.all([
    knex.raw('SET foreign_key_checks = 0;'),
    knex.schema.createTable('rol', rol),
    knex.schema.createTable('usuario', usuario),
    knex.schema.createTable('tipoHabitacion', tipoHabitacion),
    knex.schema.createTable('habitacion', habitacion),
    knex.schema.createTable('proforma', function (table){
      table.increments('idProforma').primary();
      table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
      table.integer('dias');
      table.float('monto');
      table.string('nombre').notNullable();
      table.string('documentoIdentidad').notNullable();
      table.boolean('estado').defaultTo(1);

    }),
    knex.schema.createTable('detalleProforma', detalleProforma),
    knex.schema.createTable('detalleBoletaHabitacion', detalleBoletaHabitacion),
    knex.schema.createTable('boletaHabitacion', function (table){
      table.increments('idBoletaHabitacion').primary();
      table.integer('idEstadoBoletaHabitacion').unsigned().notNullable();
      table.foreign('idEstadoBoletaHabitacion').references('idEstadoBoletaHabitacion').inTable('estadoBoletaHabitacion');
      table.date('fechaRealizacion').defaultTo();
      table.float('monto');
      table.integer('dias');
      table.date('fechaFin');
      table.integer('idProforma').unsigned().notNullable();
      table.foreign('idProforma').references('idProforma').inTable('proforma');
    } ),
    knex.schema.createTable('estadoBoletaHabitacion', estadoBoletaHabitacion),
    knex.schema.createTable('huespedHabitacion', huespedHabitacion),
    knex.schema.createTable('huesped', huesped),
    knex.schema.createTable('informe', function (table){
      table.increments('idInforme').primary();
      table.text('descripcion');
      table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
      table.integer('idBoletaHabitacion').unsigned().notNullable();
      table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
    
    }),
    knex.schema.createTable('boletaConsumo', function (table){
      table.increments('idBoletaConsumo').primary();
      table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
      table.integer('idBoletaHabitacion').unsigned().notNullable();
      table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
    }),
    knex.schema.createTable('detalleBoletaConsumo', detalleBoletaConsumo),
    knex.schema.createTable('producto', producto),
    knex.schema.createTable('categoria', categoria),
    knex.schema.createTable('reembolso', function (table){
      table.increments('idReembolso').primary();
      table.text('descripcion').notNullable();
      table.datetime('fechaRealizacion').defaultTo(knex.fn.now());
      table.integer('idBoletaHabitacion').unsigned().notNullable();
      table.foreign('idBoletaHabitacion').references('idBoletaHabitacion').inTable('boletaHabitacion');
      table.boolean('estado');
    }
    ),
    knex.raw('SET foreign_key_checks = 1;'),
  ]);
};
