import React, { memo, useMemo } from 'react'
import { Insets, StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

import { COLORS, HIT_SLOP_10 } from '@shared/constants'
import { TCOLORS } from '@shared/types'
import { LoadingIndicator, Typography } from '@shared/ui'

interface ITextButtonProps {
	children: string
	onPress?: () => void
	disabled?: boolean
	size?: number
	style?: StyleProp<ViewStyle>
	hitSlop?: Insets | number
	loading?: boolean
	textColor?: TCOLORS | string
	activeColor?: TCOLORS | string
	disabledColor?: TCOLORS | string
}

export const TextButton = memo(
	({
		children,
		onPress,
		disabled = false,
		size,
		style,
		hitSlop = HIT_SLOP_10,
		loading = false,
		textColor,
		activeColor = COLORS.blue,
		disabledColor = COLORS.gray,
	}: ITextButtonProps) => {
		const color = useMemo(
			() => (disabled ? disabledColor : activeColor),
			[disabled, activeColor, disabledColor]
		)

		if (loading) {
			return <LoadingIndicator color={color} size="small" />
		}

		return (
			<TouchableOpacity
				onPress={onPress}
				disabled={disabled}
				style={style}
				hitSlop={hitSlop}
			>
				<Typography variant="medium_16" color={textColor || color} size={size}>
					{children}
				</Typography>
			</TouchableOpacity>
		)
	}
)
