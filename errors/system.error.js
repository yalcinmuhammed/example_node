//1000
function APIException(msg){
    this.name = 'APIException';
    this.msg = msg || 'Ooops! Something went wrong.';
    this.code = 1000;
    this.status = 500;
}
APIException.prototype = Error.prototype;
module.exports.APIException = APIException;

function ServiceNotFound(msg){
    this.name = 'ServiceNotFound';
    this.msg = msg || 'Service not found.';
    this.code = 1001;
    this.status = 404;
}
ServiceNotFound.prototype = Error.prototype;
module.exports.ServiceNotFound = ServiceNotFound;

function NotImplemented(msg){
    this.name = 'NotImplemented';
    this.msg = msg || 'Service not implemented.';
    this.code = 1002;
    this.status = 501;
}
NotImplemented.prototype = Error.prototype;
module.exports.NotImplemented = NotImplemented;
