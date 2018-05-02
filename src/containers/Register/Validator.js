export const validate = values => {
	const errors = {};
	if (!values.username) {
		errors.username = 'Can not be empty!';
	} else if (values.username.length < 3) {
		errors.username = 'Must be at least 3 characters!';
	}
	if (!values.email) {
		errors.email = 'Can not be empty!';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Email is invalid!';
	}
	if (!values.password) {
		errors.password = 'Can not be empty!';
	} else if (values.password.length < 3) {
		errors.password = 'Must be at least 3 characters';
	}
	return errors;
};

export const warn = values => {
	const warnings = {};
	if (values.username !== undefined && values.username.length < 6) {
		warnings.username = 'Could be a bit longer';
	}
	return warnings;
};
