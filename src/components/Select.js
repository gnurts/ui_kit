import React, { useState, useContext, isValidElement } from 'react'
import { Pressable, TextInput, TouchableHighlight } from 'react-native'
import { SelectContext } from './Context'
import { isFunction } from '../utils/checkType'
import Text from './Text'
import Center from './layout/Center'
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
	defaultValue,
	children,
	empty = 'no data'
}) => {
	console.log(children)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedLabel, setSelectedLabel] = useState(() => {
		for(const child of children) {
			if(isValidElement(child)) {
				if(child.props.value === defaultValue) return child.props.label
			}
		}

		return null
	})
	
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