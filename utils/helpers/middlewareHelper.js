const _ = require('lodash');

function hasNumber(path) {
  return path.search(/\d+/g) !== -1;
}

/**
 * Funcion para verificar si un endpoint pertenece a un arreglo de endpoints
 * Se acepta valores de /:id y /15
 */
function includes(currentPath, paths) {
  let newCurrentPath = currentPath;
  let newPaths = paths;
  if (hasNumber(currentPath)) {
    newCurrentPath = currentPath.replace(/\d+/g, '*');
  }

  newPaths = _.map(paths, (path) => {
    let newPath = path;
    if (_.includes(path, ':')) {
      newPath = path.replace(/:\w+/g, '*');
    }
    return newPath;
  });

  return newPaths.indexOf(newCurrentPath) !== -1;
}

module.exports = { includes };
