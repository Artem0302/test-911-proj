import React, { ReactNode } from 'react'

import { COLORS } from '@shared/constants'
import { TToastIconVariants } from '@shared/core'
import SuccessIcon from '../../../assets/check.svg'
import DownloadIcon from '../../../assets/download.svg'
import ErrorIcon from '../../../assets/error.svg'
import TicketIcon from '../../../assets/ticket.svg'
import WarningIcon from '../../../assets/warning.svg'
import styles from './toasts-icon.styles'

interface IToastsIconProps {
	icon?: TToastIconVariants | ReactNode
}

export const ToastsIcon = ({ icon }: IToastsIconProps) => {
	if (typeof icon === 'string') {
		switch (icon) {
			case 'download':
				return (
					<DownloadIcon
						width={28}
						height={28}
						fill={COLORS.white}
						style={styles.icon}
					/>
				)
			case 'error':
				return (
					<ErrorIcon
						width={28}
						height={28}
						fill={COLORS.white}
						style={styles.icon}
					/>
				)
			case 'check':
				return (
					<SuccessIcon
						width={28}
						height={28}
						fill={COLORS.white}
						style={styles.icon}
					/>
				)
			case 'warning':
				return (
					<WarningIcon
						width={28}
						height={28}
						fill={COLORS.white}
						style={styles.icon}
					/>
				)
			default:
				return (
					<TicketIcon
						width={28}
						height={28}
						fill={COLORS.white}
						style={styles.icon}
					/>
				)
		}
	} else if (React.isValidElement(icon)) {
		return icon
	}

	return null
}
