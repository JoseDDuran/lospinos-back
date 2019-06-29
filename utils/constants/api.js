// Aqui es se pone un mapeo de todos los endpoints del proyecto
const publicRoutes = [];
const protectedRoutes = [
    '/usuario/agregar',
    '/usuario/editar',
    '/usuario/deshabilitar',
    '/usuario/habilitar',
    '/usuario/',
];
const mixedRoutes = [];

module.exports = { publicRoutes, protectedRoutes, mixedRoutes };
