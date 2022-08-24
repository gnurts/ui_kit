import React, { useState, useContext, isValidElement, useEffect, useRef, memo } from 'react'
import { Pressable, TextInput, TouchableHighlight } from 'react-native'
import { SelectContext } from './Context'
import { isFunction } from '../utils/checkType'
import Text from './Text'
import Center from './layout/Center'
import ActionSheet from './ActionSheet'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../assets/styles/select.styles'

const Option = ({ value, label }) => {
	const { handleSelect } = useContext(SelectContext)
	
	const select = () => handleSelect({ value, label })

	return (
		<TouchableHighlight
			style={styles.option}
			underlayColor="#DDDDDD"
			onPress={select}
		>
			{label && (
				<Text>{label}</Text>
			)}
		</TouchableHighlight>
	)
}

const Empty = ({ message }) => {
	return (
		<Center>
			<Icon
				name='copy'
				size={50}
				color='gray'
				style={{
					marginTop: 20
				}}
			/>
			<Text style={{ marginVertical: 20 }}>
				{ message }
			</Text>
		</Center>
	)
}

const Select = ({
	placeholder,
	onchange,
	animateDuration,
	value,
	children,
	empty = 'no data'
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState({ label: null, value: null })
	const selected = useRef(false)
	
	const handleCloseActionSheet = () => {
		setIsOpen(false)
	}

	const handleOpenActionSheet = () => {
		setIsOpen(true)
	}

	const handleSelect = ({ value, label }) => {
		selected.current = true
		setSelectedOption({ value, label })
		isFunction(onchange) && onchange(value)
		handleCloseActionSheet()
	}

	useEffect(() => {
		if(selected.current) {
			selected.current = false
		} else {
			value && children.forEach(child => {
				console.log('check')
				if(child.props.value === value) {
					setSelectedOption({ label: child.props.label, value: child.props.value })
				}
			})
		}
	}, [value])

	return (
		<SelectContext.Provider value={{ handleSelect, value }}>
			<Pressable
				style={styles.container}
				onPress={handleOpenActionSheet}
			>
				<TextInput
					style={styles.select}
					placeholder={placeholder}
					placeholderTextColor={styles.placeholderColor}
					editable={false}
					value={selectedOption.label}
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
				{children.length ? (
					children
				) : (
					<Empty message={empty} />
				)}
			</ActionSheet>
		</SelectContext.Provider>
	)
}

Select.Option = Option

export default Select