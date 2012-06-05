Easily register handlebars partials as all views in the path whose name is lead by an underscore.  In the example below, /views/_log_in_form and /views/_sign_up_form would be registered as partials logInForm and SignUpForm, respectively.

	var view_partials = require('./lib/view_partials')
		, partial_path = __dirname + '/views';
	
	view_partials.registerPartials(partial_path);
