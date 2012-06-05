

var fs = require('fs')
	, Handlebars = require('handlebars');

var convertToCamelCase = function(string) {
	string = string.replace(/_(\w)/g, function(beginning) {
		return beginning.replace(/_/,'').toUpperCase();
	});
	return string;
};

var registerPartials = function(partial_path) {
	fs.readdir(partial_path, function(error, files) {
		files.forEach(function(file, i) {
			var file_name = partial_path + '/' + file
				, helper_name = convertToCamelCase(file.replace(/^_/,'').replace(/.handlebars/,''));

			fs.readFile(file_name, 'utf8', function(err, content) {
				Handlebars.registerPartial(helper_name, content);
			});
		});
	});
};

module.exports = {
	registerPartials: registerPartials
};
