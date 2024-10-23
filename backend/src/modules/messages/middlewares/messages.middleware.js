const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  verifyPayloadForCreation() {
    return celebrate({
      [Segments.BODY]: {
        topic_id: Joi.number().required(),

        content: Joi.string().allow(null, ''),
      },
    });
  },

  verifyMessagesIdInParams() {
    return celebrate({
      [Segments.PARAMS]: {
        messageId: Joi.string().required(),
      },
    });
  },
};
