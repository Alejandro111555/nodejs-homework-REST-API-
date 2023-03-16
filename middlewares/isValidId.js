const { isValidObjectId } = require("mongoose");

<<<<<<< Updated upstream
const { HttpError } = require("../helpers");
=======
const { HttpError } = require("../utils/HttpError");
>>>>>>> Stashed changes

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not valid id`));
  }
  next();
};

module.exports = isValidId;
