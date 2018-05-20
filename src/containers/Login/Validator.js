export const validate = values => {
	const errors = {};
    if (!values.username) {
        errors.username = 'Can not be empty!';
    } else if (values.username.length < 3) {
        errors.username = 'Must be at least 3 characters!';
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
