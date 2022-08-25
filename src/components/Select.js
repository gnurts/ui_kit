import React, { useState, useContext, useEffect, useRef } from 'react'
import uuid from 'react-native-uuid'
import { Pressable, TextInput, TouchableHighlight } from 'react-native'
import { SelectContext } from './Context'
import { isFunction } from '../utils/checkType'

import { VirtualizedList } from 'react-native'
import Text from './Text'
import Center from './layout/Center'
import ActionSheet from './ActionSheet'
import Row from './layout/Row'
import Col from './layout/Col'
import Input from './Input'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../assets/styles/select.styles'

const key = uuid.v4()

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


const List = ({ data, emptyMessage, search = '' }) => {
	
	const getItem = (data, index) => data[index]

	const getItemCount = (data) => data.length

	const renderItem = ({ item }) => {
		if(search && String(item.props.label).toLowerCase().indexOf(search.toLowerCase()) === -1) return
		return item
	}

	const keyExtractor = (item, index) => `${key}-${index}`
	
	return (
		<VirtualizedList
			data={data}
			getItem={getItem}
			getItemCount={getItemCount}
			renderItem={renderItem}
			ListEmptyComponent={<Empty message={emptyMessage} />}
			keyExtractor={keyExtractor}
			initialNumToRender={5}
			updateCellsBatchingPeriod={1000}
			windowSize={3}
			removeClippedSubviews={true}
		/>
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
	const [search, setSearch] = useState('')
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

	const handleResetSearch = () => {
		console.log('end close')
		setSearch('')
	}

	useEffect(() => {
		if(selected.current) {
			selected.current = false
		} else {
			if(value) {
				children.forEach(child => {
					if(child.props.value === value) {
						setSelectedOption({ label: child.props.label, value: child.props.value })
					}
				})
			} else {
				setSelectedOption({ label: null, value: null })
			}
		}
	}, [value])

	return (
		<SelectContext.Provider value={{ handleSelect, value, search }}>
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
				onEndClose={handleResetSearch}
			>
				<List
					data={children}
					emptyMessage={empty}
					search={search}
				/>
				<Row gutter={10}>
					<Col span={100}>
						<Input
							placeholder='search'
							value={search}
							onChangeText={setSearch}
						/>
					</Col>
				</Row>
			</ActionSheet>
		</SelectContext.Provider>
	)
}

Select.Option = Option

export default Select