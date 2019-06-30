const publicRoutes = [];
const protectedRoutes = [
    '/usuario/agregar',
    '/usuario/editar',
    '/usuario/deshabilitar',
    '/usuario/habilitar',
    '/usuario/',
    '/usuario/asignacioncontrasena',
    '/usuario/contrasena',

    '/producto/',   
    '/producto/categorias',

    '/habitacion/',
    '/habitacion/todas',

    '/proforma/agregar',
    '/proforma/anular',
    '/proforma/procesar',

    '/huesped/',
];
const mixedRoutes = [];

module.exports = { publicRoutes, protectedRoutes, mixedRoutes };
