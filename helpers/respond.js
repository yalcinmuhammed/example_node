
var respond = {};

respond.success = (res, data)=>{
    return res.status(200).json({
        code: 0,
        msg: "Success",
        records: data
    });
}

respond.withError = (next, error, code)=>{
    code = code || error.status || 500;
    error.code = code;
    return next(error);
}

respond.withValidationError = (res, errors, code)=>{
    code = code || 500;
    return res.status(code).json({
        code: 2000,//custom code for validation errors
        error:{
            validationErrors: errors
        }
    });
}

module.exports = respond;
