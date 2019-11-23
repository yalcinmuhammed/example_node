const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
	createdAt:{
		type: Date, 
		unique:true
	},
	counts:{
		type: Array
	},
	key:{
		type: String, 
		unique:true
	},
	value:{
		type: String, 
		unique:true
	},

});

module.exports = mongoose.model('records', recordSchema);