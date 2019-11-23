const express = require("express");
const router = express.Router();
const respond = require("../helpers/respond");
const logger = require("../helpers/winston");
const validator = require("../validators/record.validator");
const RecordController = require("../controllers/record.controller");

/**
 * @apiVersion 1.0.0
 * @api {post} /api/v1/records Request Records Information
 * @apiName Search Records
 * @apiGroup Record
 *
 * @apiParam {String} startDate Optional Field will contain the date in a "YYYY-MM-DD" format.
 * @apiParam {String} endDate 	Optional Field will contain the date in a "YYYY-MM-DD" format.
 * @apiParam {Number} minCount 	Optional Minimum count in records.
 * @apiParam {Number} maxCount 	Optional Maximum count in records.
 * 
 *
 * @apiSuccess {Number} 	code 		Custom status code.
 * @apiSuccess {String} 	msg 		Message for code.
 * @apiSuccess {Object[]} 	records  	List for records.
 * @apiSuccessExample {json} Success-Response:
 *		HTTP/1.1 200 OK
 *		{
 *			"code": 0,
 *			"msg": "Success",
 *			"records": [
 *				{
 *					"key": "xqT9N0XwJ4qwU0GQ",
 *					"createdAt": "2016-07-06T06:54:46.169Z",
 *					"totalCount": 2700
 *				}
 *			]
 *		}
 * @apiSampleRequest http://localhost:3000/api/v1/records
 */
router.post('/records', [validator.getList], function(req, res, next){
	RecordController.getList(
		req.body.startDate,
		req.body.endDate,
		req.body.minCount,
		req.body.maxCount
		).then((instance)=>{
		respond.success(res, instance);
	}).catch((err)=>{
		respond.withError(next, err);
	});
});

module.exports = router;
