const productos = [
  {
    nombre: 'Rellenitas',
    precio: 0.30,
    idCategoria : 2
  },
  {
    nombre: 'Glacitas',
    precio: 0.50,
    idCategoria : 2
  },
  {
    nombre: 'Coca Cola',
    precio: 3.00,
    idCategoria : 1
  },
  {
    nombre: 'Agua Cielo',
    precio: 1.50,
    idCategoria : 1
  }
];

const categoria = [
  {
    nombre: 'Bebidas'
  },
  {
    nombre: 'Snacks'
  },
];

const roles =[
  { 
    idRol: 1,
    nombre: 'Administrador'
  },
  {
    idRol: 2,
    nombre: 'Empleado'
  }
];

const usuarios = [
  {
    nombres: 'Jose Luis',
    apellidos: 'Duran Zarate',
    genero: 'Masculino',
    correo: 'jose.com',
    documentoIdentidad: '75089125',
    contrasena: '123456',
    idRol: 1,
    estado: 1
  }
];

const estado_boleta_habitacion = [
  {
    idEstadoBoletaHabitacion: 1,
    nombre: 'En curso'
  },
  {
    idEstadoBoletaHabitacion: 2,
    nombre: 'Expirada'
  }
];

const tipo_habitacion = [
  { 
    idTipoHabitacion: 1,
    nombre: 'Normal',
    plazas: 1,
  },
  { 
    idTipoHabitacion: 2,
    nombre: 'Normal',
    plazas: 2,
  },
  { 
    idTipoHabitacion: 3,
    nombre: 'Duplex',
    plazas: 1,
  },
  { 
    idTipoHabitacion: 4,
    nombre: 'Duplex',
    plazas: 2,
  },
];

const habitaciones = [
  {
    nombre: 'Habitacion 1',
    precio: 50,
    idTipoHabitacion: 2,
  },
  {
    nombre: 'Habitacion 2',
    precio: 80,
    idTipoHabitacion: 1,
  },
  {
    nombre: 'Habitacion 3',
    precio: 50,
    idTipoHabitacion: 3,
  },
  {
    nombre: 'Habitacion 4',
    precio: 50,
    idTipoHabitacion: 4,
  },
  {
    nombre: 'Habitacion 5',
    precio: 80,
    idTipoHabitacion: 1,
  }
];
exports.seed = async (knex) => {
  await knex.raw('SET @@SESSION.foreign_key_checks = 0;');
  await knex('rol').del();
  await knex('usuario').del();
  await knex('producto').del();
  await knex('categoria').del();
  await knex('estadoBoletaHabitacion').del();
  await knex('tipoHabitacion').del();
  await knex('habitacion').del();
  await knex.raw('SET @@SESSION.foreign_key_checks = 1;');
  await knex('rol').insert(roles);
  await knex('usuario').insert(usuarios);
  await knex('categoria').insert(categoria);
  await knex('producto').insert(productos);
  await knex('estadoBoletaHabitacion').insert(estado_boleta_habitacion);
  await knex('tipoHabitacion').insert(tipo_habitacion);
  await knex('habitacion').insert(habitaciones);
};
