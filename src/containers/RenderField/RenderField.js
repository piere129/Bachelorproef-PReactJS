import {h, Component} from 'preact';

const RenderField = ({
						 input,
						 label,
						 type,
						 t,
						 meta: {touched, error, warning}
					 }) =>
	<div>
		<label>{label}</label>
		<div>
			<input className="form-control" {...input} placeholder={label} type={type}/>
			{touched &&
			(error && <p className="error">{error}</p>
				|| warning && <p className="warning">{warning}</p>)}
		</div>
	</div>;

export default RenderField;

