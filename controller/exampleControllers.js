const { handleError } = require('../utils/helpers/expressHelper');

async function getExample(req, res) {
  try {
    console.log('hola')
    return res.json({ message: 'GAAAAAAAAAAAAAAAAAAAAA'});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function getExample2(req, res) {
  const { message } = req.body;
  try {
    console.log('hola')
    return res.json({ message : message + ' GAAAAAAAAAAAAAAAAAAA'});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

module.exports = {
  getExample,
  getExample2
};
