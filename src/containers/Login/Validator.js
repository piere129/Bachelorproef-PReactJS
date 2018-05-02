export const validate = values => {
	const errors = {};
	if (!values.identifier) {
		errors.identifier = 'Cannot be empty!';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.identifier)) {
		errors.identifier = 'Incorrect Email!';
	}
	if (!values.passwordLogin) {
		errors.passwordLogin = 'Cannot be empty!';
	} else if (values.passwordLogin.length < 3) {
		errors.passwordLogin = 'Must contain at least 3 characters!';
	}
	return errors;
};

export const warn = values => {
	const warnings = {};
	return warnings;
};
