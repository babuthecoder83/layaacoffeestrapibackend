'use strict';

/**
 * owner-talk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::owner-talk.owner-talk');
