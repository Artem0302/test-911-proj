import React, {
	ReactNode,
	memo,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import {
	DimensionValue,
	StyleProp,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native'

import { COLORS } from '@shared/constants/theme'
import { TCOLORS, TFontWeightForText } from '@shared/types'
import { LoadingIndicator, Text } from '@shared/ui'
import styles from './button.styles'

interface IButtonProps {
	startAdornment?: ReactNode
	endAdornment?: ReactNode
	width?: DimensionValue | undefined
	height?: DimensionValue | undefined
	disabled?: boolean
	onPress?: () => void | ReactNode | Promise<void> | Promise<() => void>
	fontSize?: number
	fontWeight?: TFontWeightForText
	children?: ReactNode | string
	loading?: boolean
	style?: StyleProp<ViewStyle>
	contentBoxStyle?: StyleProp<ViewStyle>
	textStyle?: StyleProp<TextStyle>
	color?: TCOLORS | string
}

export const Button = memo(
	({
		startAdornment,
		endAdornment,
		width = '100%',
		height = 55,
		disabled = false,
		onPress,
		fontSize = 16,
		fontWeight = '500',
		children,
		loading = false,
		style,
		contentBoxStyle,
		textStyle,
		color = COLORS.blue,
	}: IButtonProps) => {
		const [isLoading, setIsLoading] = useState<boolean>(loading)
		const mountStatusRef = useRef(true)

		const buttonHandler = async () => {
			if (onPress) {
				const handlerValue: unknown = onPress()

				if (handlerValue instanceof Promise) {
					setIsLoading(true)

					await handlerValue

					if (mountStatusRef.current) {
						setIsLoading(false)
					}
				}
			}
		}

		useEffect(() => {
			mountStatusRef.current = true

			return () => {
				mountStatusRef.current = false
			}
		}, [])

		useEffect(() => {
			setIsLoading(loading)
		}, [loading])

		const content = useCallback(() => {
			if (isLoading) {
				return (
					<View style={[styles.content, contentBoxStyle]}>
						<LoadingIndicator
							size="small"
							color={disabled ? COLORS.dark_gray : COLORS.white}
						/>
					</View>
				)
			}

			if (typeof children === 'string') {
				return (
					<View style={[styles.content, contentBoxStyle]}>
						{startAdornment && (
							<View style={styles.leftAdornment}>{startAdornment}</View>
						)}

						<Text
							size={fontSize}
							color={disabled ? COLORS.dark_gray : COLORS.white}
							style={[styles.text, textStyle]}
							fontWeight={fontWeight}
						>
							{children}
						</Text>

						{endAdornment && (
							<View style={styles.rightAdornment}>{endAdornment}</View>
						)}
					</View>
				)
			}

			return children
		}, [children, endAdornment, fontSize, isLoading, startAdornment, textStyle])

		return (
			<TouchableOpacity
				onPress={buttonHandler}
				disabled={disabled || isLoading}
				style={[
					{
						width,
						height,
						backgroundColor: disabled ? COLORS.light_gray : color,
					},
					styles.button,
					style,
				]}
			>
				{content()}
			</TouchableOpacity>
		)
	}
)
