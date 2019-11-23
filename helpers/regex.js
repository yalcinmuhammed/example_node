
var regex = {
    "YYYY_MM_DD":{
        "format":/(^$|[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
        "message":"Invalid Value. Value must be YYYY-MM-DD format." 
    },
    "isInt":{
        "message":"Invalid Value. Value must be an integer."
    }
}

module.exports = regex;