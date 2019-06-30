const publicRoutes = [];
const protectedRoutes = [
    '/usuario/agregar',
    '/usuario/editar',
    '/usuario/deshabilitar',
    '/usuario/habilitar',
    '/usuario/',

    '/producto/',   
    '/producto/categorias',

    '/habitacion/',

    '/proforma/agregar',
    '/proforma/anular',

    '/huesped/',
];
const mixedRoutes = [];

module.exports = { publicRoutes, protectedRoutes, mixedRoutes };
