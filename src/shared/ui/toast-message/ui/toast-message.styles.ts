import { StyleSheet } from 'react-native'

import { COLORS } from '@shared/constants'
import { DEVICE_WIDTH, IS_ANDROID } from '@shared/constants/device'

export default StyleSheet.create({
	container: {
		width: DEVICE_WIDTH - 16,
		maxWidth: DEVICE_WIDTH - 16,
		minWidth: 32,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.16,
		shadowRadius: 1.51,
		elevation: 2,
		backgroundColor: 'red',
		marginBottom: 10,
	},
	main: {
		flex: 1,
		paddingVertical: 14,
		paddingLeft: 16,
		overflow: 'hidden',
	},
	button: {
		width: 'auto',
		paddingHorizontal: 18,
		justifyContent: 'center',
	},
	line: {
		position: 'absolute',
		height: '100%',
		width: IS_ANDROID ? 1 : 0.6,
		opacity: 0.7,
		backgroundColor: COLORS.white,
	},
	row_one: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 5,
	},
	row_two: {
		marginTop: 5,
	},
	title: {
		maxWidth: '82%',
	},
	subtitle: {
		maxWidth: '82%',
	},
	button_title: {
		maxWidth: 100,
		textAlign: 'center',
	},
})
