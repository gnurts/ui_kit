import React, { memo, useEffect, useRef, useState } from 'react'
import { Button, Pressable, View, ScrollView, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Input from './src/components/Input'
import Select from './src/components/Select'
import ActionSheet from './src/components/ActionSheet'
import Row from './src/components/layout/Row'
import Col from './src/components/layout/Col'
import Center from './src/components/layout/Center'
import Text from './src/components/Text'
import Container from './src/components/layout/Container'
import useAutoForus from './src/custom-hook/useAutoFocus'

const Addon = <Icon name='user' size={20} color='gray' />

const ActionSheetContent = () => {
	const [testValue, setTestValue] = useState(null)
	
	return (
		<ScrollView keyboardShouldPersistTaps='always'>
			<Row gutter={10}>
				<Col span={100}>
					<Input
						placeholder='ex: 192.168.0.1:8000'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={<Text style={{ borderRightWidth: 1, borderColor: 'gray', paddingRight: 10, width: 60, color: 'gray' }}>API</Text>}
					/>
				</Col>
				<Col span={100}>
					<Input
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={<Text style={{ borderRightWidth: 1, borderColor: 'gray', paddingRight: 10, width: 60, color: 'gray' }}>Socket</Text>}
					/>
				</Col>
				<Col span={100}>
					<Input
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={Addon}
					/>
				</Col>
				<Col span={100}>
					<Input
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={Addon}
					/>
				</Col>
				<Col span={100}>
					<Input
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={Addon}
					/>
				</Col>
				<Col span={100}>
					<Input
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={Addon}
					/>
				</Col>
				<Col span={100}>
					<Input
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={Addon}
					/>
				</Col>
				<Col span={100}>
					<Input
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={Addon}
					/>
				</Col>
				<Col span={100}>
					<Input
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={Addon}
					/>
				</Col>
				<Col span={100}>
					<Input
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={Addon}
					/>
				</Col>
			</Row>
		</ScrollView>
	)
}

const App = () => {
    const [openActionSheet, setOpenActionSheet] = useState(false)
	const [testValue, setTestValue] = useState(null)
	const refs = [useRef(), useRef(), useRef(), useRef(), useRef()]
	const { nextFocus, changeFocus } = useAutoForus({
		refs,
		order: [0, 1, 2, 3, 4],
		start: 0
	})
	

	useEffect(() => {
		console.log(openActionSheet)
	}, [openActionSheet])

    return (
		<Container>
			<ActionSheet
				isOpen={openActionSheet}
				onClose={() => setOpenActionSheet(false)}
			>
				<ActionSheetContent />
			</ActionSheet>
			<Select
				placeholder='test select'
				onchange={value => console.log(value)}
			>
				<Select.Option value={1} label='test1' />
				<Select.Option value={2} label='test2' />
				<Select.Option value={3} label='test3' />
				<Select.Option value={4} label='test4' />
			</Select>
			<View
				style={{ zIndex: 0 }}
			>
				<Button
					title='openActionSheet'
					onPress={() => {
						console.log('press')
						setOpenActionSheet(true)
					}}
				/>
			</View>
			<Row gutter={[12, 12]}>
				<Col span={50}>
					<View style={{
						width: '100%',
						height: 100,
						backgroundColor: 'red'
					}}>
					</View>
				</Col>
				<Col span={50}>
					<View style={{
						width: '100%',
						height: 100,
						backgroundColor: 'blue'
					}}></View>
				</Col>
			</Row>
			<Input
				ref={refs[0]}
				onPressIn={() => changeFocus(0)}
				onSubmitEditing={nextFocus}
				showSoftInputOnFocus={false}
				placeholder='ex: 192.168.0.1:8000'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={<Text style={{ borderRightWidth: 1, borderColor: 'gray', paddingRight: 10, width: 60, color: 'gray' }}>API</Text>}
			/>
			<Input
				ref={refs[1]}
				onPressIn={() => changeFocus(1)}
				onSubmitEditing={nextFocus}
				showSoftInputOnFocus={false}
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={<Text style={{ borderRightWidth: 1, borderColor: 'gray', paddingRight: 10, width: 60, color: 'gray' }}>Socket</Text>}
			/>
			<Input
				ref={refs[2]}
				onPressIn={() => changeFocus(2)}
				onSubmitEditing={nextFocus}
				showSoftInputOnFocus={false}
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
			<Input
				ref={refs[3]}
				onPressIn={() => changeFocus(3)}
				onSubmitEditing={nextFocus}
				showSoftInputOnFocus={false}
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
			<Input
				ref={refs[4]}
				onPressIn={() => changeFocus(4)}
				onSubmitEditing={nextFocus}
				showSoftInputOnFocus={false}
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
		</Container>
    )
}

export default App;