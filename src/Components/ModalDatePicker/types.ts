import React from 'react';

export interface ModalDatePickerProps {
	value: Date;
	onChange: (value: Date) => void;
	onClose: () => void;
	className?: string;
	style?: React.CSSProperties;
}
