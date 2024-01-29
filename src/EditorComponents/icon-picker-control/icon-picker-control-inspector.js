/**
 * Internal dependencies
 */
import { IconPickerControl } from '@components/icon-picker-control';

export const IconPickerControlInspector = ( {
	icon,
	onChange,
	displayDeleteIcon = false,
	handleRemove,
} ) => {
	return (
		<IconPickerControl
			icon={ icon }
			onChange={ onChange }
			displayIconPreview={ true }
			displayAsPopover={ true }
			displayDeleteIcon={ displayDeleteIcon }
			handleRemove={ handleRemove }
		/>
	);
};
