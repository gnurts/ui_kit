import React, { useState } from 'react'
import { Pressable, TextInput, Text, View } from 'react-native'
import ActionSheet from './ActionSheet'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../assets/styles/select.styles'

const Item = ({ value, children }) => {
	return (
		<Pressable>
			<Text>{children}</Text>
		</Pressable>
	)
}

const Select = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	
	const handleCloseActionSheet = () => {
		setIsOpen(false)
	}

	const handleOpenActionSheet = () => {
		setIsOpen(true)
	}

	return (
		<>
			<Pressable
				style={styles.container}
				onPress={handleOpenActionSheet}
			>
				<TextInput
					style={styles.select}
					placeholder='select'
					editable={false}
					value='hello'
				/>
				<Icon
					style={styles.arrow}
					name='chevron-down'
					size={15}
				/>
			</Pressable>
			<ActionSheet
				isOpen={isOpen}
				onClose={handleCloseActionSheet}
			>
				{/* {children} */}
			</ActionSheet>
		</>
	)
}

export default Select