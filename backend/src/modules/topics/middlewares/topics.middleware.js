const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  verifyPayloadForCreation() {
    return celebrate({
      [Segments.BODY]: {
        title: Joi.string().required(), // Título obrigatório
        content: Joi.string().allow(null, ''), // Conteúdo pode ser nulo ou vazio
        status: Joi.string().optional(), // Status booleano obrigatório
        responses_count: Joi.number().optional(), // Número de respostas pode ser nulo
        likes: Joi.number().optional(),
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
