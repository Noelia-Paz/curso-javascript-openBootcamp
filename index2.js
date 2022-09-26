const logger = require('./Javascript_basico/logger/index');

function showError() {
  throw new Error('showError function');
}

try {
  showError();
} catch (e) {
  logger.log('error', e.toString());
}

//logger.log('hola estoy saliendo por pantalla'); este no lo toma xq no esta en el objeto
logger.info('hola esto es un mensaje informativo');
logger.debug('esto es un mensaje de debu');
logger.warn('esto es un mensaje de advertencia');
logger.error('esto es un error');
