/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
var Listing 	= require('./listing'),
var Company 	= require('./company');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Locations = db.Model.extend({
	tablename: 'locations',
	listings: function(){
		return this.hasMany(Listing)
	},
	companies: function(){
		return this.belongsTo(Company, 'company_id');
	}
});

module.exports = Locations;