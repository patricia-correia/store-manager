const codeStatus = require('../utils/codeStatus');
const errorMessages = require('../utils/errorMessages');

const validateName = (req, response, next) => {
  const { name } = req.body;

  if (!name) {
    return response
      .status(codeStatus.HTTP_INALIDE_STATUS).json({ message: errorMessages.NAME_IS_REQUIRED });
  }
  if (name.length < 5) {
    return response
      .status(codeStatus.HTTP_INSUFFICIENT_STATUS).json({ message: errorMessages.SHOT_CHARACTER });
  }
  next();
};

module.exports = validateName;