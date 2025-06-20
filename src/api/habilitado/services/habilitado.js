'use strict';

/**
 * habilitado service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::habilitado.habilitado');
