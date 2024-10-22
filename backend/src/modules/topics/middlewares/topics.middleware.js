const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  verifyPayloadForCreation() {
    return celebrate({
      [Segments.BODY]: {
        title: Joi.string().required(), // Título obrigatório
        content: Joi.string().allow(null, ''), // Conteúdo pode ser nulo ou vazio
        status: Joi.boolean().required(), // Status booleano obrigatório
        responses_count: Joi.number().allow(null), // Número de respostas pode ser nulo
        views: Joi.number().allow(null),
      },
    });
  },

  verifyTopicsIdInParams() {
    return celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    });
  },

  verifyPayloadForGetOne() {
    return celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    });
  },

  verifyPayloadForDeleted() {
    return celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    });
  },
};
