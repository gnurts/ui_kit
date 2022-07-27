import React, { useState, useContext } from 'react'
import { Pressable, TextInput, Text, TouchableHighlight } from 'react-native'
import { SelectContext } from './Context'
import { isFunction } from '../utils/checkType'
import ActionSheet from './ActionSheet'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../assets/styles/select.styles'

const Option = ({ value, label }) => {
	const { setSelectedOption } = useContext(SelectContext)
	
	const handlePress = () => setSelectedOption({ value, label }) 

	return (
		<TouchableHighlight
			style={styles.option}
			underlayColor="#DDDDDD"
			onPress={handlePress}
		>
			{label && (
				<Text>{label}</Text>
			)}
		</TouchableHighlight>
	)
}

const Select = ({ placeholder, onchange, animateDuration, children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedLabel, setSelectedLabel] = useState(null)
	
	const handleCloseActionSheet = () => {
		setIsOpen(false)
	}

	const handleOpenActionSheet = () => {
		setIsOpen(true)
	}

	const setSelectedOption = ({ value, label }) => {
		setSelectedLabel(label)
		isFunction(onchange) && onchange(value)
		handleCloseActionSheet()
	}

	return (
		<SelectContext.Provider value={{ setSelectedOption }}>
			<Pressable
				style={styles.container}
				onPress={handleOpenActionSheet}
			>
				<TextInput
					style={styles.select}
					placeholder={placeholder}
					editable={false}
					value={selectedLabel}
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
				animateDuration={animateDuration}
			>
				{children}
			</ActionSheet>
		</SelectContext.Provider>
	)
}

Select.Option = Option

export default Select