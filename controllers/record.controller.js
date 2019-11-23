const RecordModel = require("../models/record.model");
const regex = require("../helpers/regex");

const recordController = {};

recordController.getList = (startDate, endDate, minCount, maxCount)=>{
    return new Promise((resolve, reject)=>{
        minCount = +minCount || 0;
        maxCount = +maxCount || Number.MAX_VALUE;
        let filter = [
            {
				$project: {
                    key: 1, createdAt: 1, _id: 0,
                    totalCount: {$sum: '$counts'},
				}
			},
			{
				$match: {
                    $and: [ { "totalCount": { $gte: minCount } }, { "totalCount": { $lte: maxCount } } ]
				}
			}
        ];
        if(startDate){
            startDate = new Date(startDate);
            filter.push(
            {
				$match: {
					$and: [ { "createdAt": { $gte: startDate } } ]
				},
			});
        }
        if(endDate){
            endDate = new Date(endDate);
            filter.push(
            {
                $match: {
                    $and: [ { "createdAt": { $lte: endDate } } ]
                },
            });
        }
        RecordModel.aggregate(filter).then((response)=>{
			return resolve(response);
        }).catch((err)=>{
            return reject(err);
        });
    });
}

module.exports = recordController;