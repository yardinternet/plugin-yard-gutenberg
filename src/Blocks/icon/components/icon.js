const Icon = ( props ) => {
	const { attributes } = props;
	const { icon, altText } = attributes;
	console.log( icon );

	return <i className={ icon } title={ altText ? altText : null }></i>;
};

export default Icon;
