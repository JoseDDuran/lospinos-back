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
    nombre: 'Administrador'
  },
  {
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

exports.seed = async (knex) => {
  await knex.raw('SET @@SESSION.foreign_key_checks = 0;');
  await knex('rol').del();
  await knex('usuario').del();
  await knex('producto').del();
  await knex('categoria').del();
  await knex.raw('SET @@SESSION.foreign_key_checks = 1;');
  await knex('rol').insert(roles);
  await knex('usuario').insert(usuarios);
  await knex('categoria').insert(categoria);
  await knex('producto').insert(productos);
};
