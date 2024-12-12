import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'

import { HIT_SLOP_15, adaptiveSize, COLORS } from '@shared/constants'
import { TCOLORS } from '@shared/types'
import CloseButtonIncognitoSvg from '../../../assets/input-close-incognito.svg'
import CloseButtonSvg from '../../../assets/input-close.svg'

type TInputClearButtonProps = {
	onPress?: () => void
	isDark?: boolean
	size?: number
	color?: TCOLORS | string
}

export const InputClearButton = memo(
	({
		onPress,
		isDark = false,
		size = 24,
		color = COLORS.gray_light,
	}: TInputClearButtonProps) => {
		return (
			<TouchableOpacity onPress={onPress} hitSlop={HIT_SLOP_15}>
				{isDark ? (
					<CloseButtonIncognitoSvg
						width={adaptiveSize(size)}
						height={adaptiveSize(size)}
					/>
				) : (
					<CloseButtonSvg
						fill={color}
						width={adaptiveSize(size)}
						height={adaptiveSize(size)}
					/>
				)}
			</TouchableOpacity>
		)
	}
)
