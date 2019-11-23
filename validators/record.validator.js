const respond = require('../helpers/respond');
const regex = require("../helpers/regex");
const exampleValidator = {};

exampleValidator.getList = function (req, res, next) {
    req.checkBody({
        startDate: {
            optional: true,
            matches: {
                options: [regex.YYYY_MM_DD.format],
                errorMessage: regex.YYYY_MM_DD.message
            }
        },
        endDate: {
            optional: true,
            matches: {
                options: [regex.YYYY_MM_DD.format],
                errorMessage: regex.YYYY_MM_DD.message
            }
        },
        minCount: {
            optional: {
                options: { checkFalsy: true }
            },
            isInt:{
                errorMessage: regex.isInt.message
            }
        },
        maxCount: {
            optional: {
                options: { checkFalsy: true }
            },
            isInt:{
                errorMessage: regex.isInt.message
            }
        }
    });
    if (req.validationErrors()) {
        return respond.withValidationError(res, req.validationErrors(true));
    }
    return next();
};

module.exports = exampleValidator;