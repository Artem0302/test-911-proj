import { StyleSheet } from 'react-native'

import { COLORS, FONTS } from '@shared/constants/theme'

export default StyleSheet.create({
	input: {
		height: 48,
		alignSelf: 'stretch',
		alignItems: 'center',
		fontSize: 16,
		fontFamily: FONTS.INTER,
		borderColor: COLORS.light_gray,
		backgroundColor: COLORS.white,
	},
	label: {
		marginBottom: 8,
	},
	isDisabled: {
		opacity: 0.6,
	},
	prefix_element: {
		zIndex: 9,
		position: 'absolute',
		top: 14,
		left: 16,
	},
	suffix_element: {
		zIndex: 9,
		position: 'absolute',
		top: 14,
		right: 16,
	},
	error_label: {
		marginTop: 8,
	},
})
