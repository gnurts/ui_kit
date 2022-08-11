import React, { memo, useEffect, useRef, useState } from 'react'
import { Pressable, View, ScrollView, Modal, TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Input from './src/components/Input'
import Select from './src/components/Select'
import Radio from './src/components/Radio'
import ActionSheet from './src/components/ActionSheet'
import Row from './src/components/layout/Row'
import Col from './src/components/layout/Col'
import Center from './src/components/layout/Center'
import Text from './src/components/Text'
import Container from './src/components/layout/Container'
import useAutoForus from './src/custom-hook/useAutoFocus'
import Button from './src/components/Button'

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
	const refs = [useRef(), useRef(), useRef()]
	// const { nextFocus, changeFocus } = useAutoForus({
	// 	refs,
	// 	order: [0, 1, 2],
	// 	start: 0
	// })
	
    return (
		<Container>
			<ActionSheet
				isOpen={openActionSheet}
				onClose={() => setOpenActionSheet(false)}
			>
				<ActionSheetContent />
			</ActionSheet>
			<Row gutter={[12, 12]}>
				{/* <Col span={100}>
					<Select
						placeholder='test select'
						onchange={value => console.log(value)}
					>
						<Select.Option value={1} label='test1' />
						<Select.Option value={2} label='test2' />
						<Select.Option value={3} label='test3' />
						<Select.Option value={4} label='test4' />
					</Select>
				</Col>
				<Col span={100}>
					<Radio>
						<Radio.Option value={1} label='test1' />
						<Radio.Option value={2} label='test2' />
						<Radio.Option value={3} label='test3' />
						<Radio.Option value={4} label='test4' />
					</Radio>
				</Col> */}
				<Col span={100}>
					<Button
						title='openActionSheet'
						onPress={() => setOpenActionSheet(true)}
					/>
				</Col>
			</Row>
			<Row gutter={10}>
				<Col span={100}>
					<Input
						// ref={refs[0]}
						// onPressIn={() => changeFocus(0)}
						// onSubmitEditing={nextFocus}
						showSoftInputOnFocus={true}
						placeholder='ex: 192.168.0.1:8000'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={<Text style={{ borderRightWidth: 1, borderColor: 'gray', paddingRight: 10, width: 60, color: 'gray' }}>API</Text>}
					/>
				</Col>
				<Col span={100}>
					<Input
						// ref={refs[1]}
						// onPressIn={() => changeFocus(1)}
						// onSubmitEditing={nextFocus}
						showSoftInputOnFocus={true}
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={<Text style={{ borderRightWidth: 1, borderColor: 'gray', paddingRight: 10, width: 60, color: 'gray' }}>Socket</Text>}
					/>
				</Col>
				<Col span={100}>
					<Input
						// ref={refs[2]}
						// onPressIn={() => changeFocus(2)}
						// onSubmitEditing={nextFocus}
						showSoftInputOnFocus={true}
						label='test in put'
						placeholder='test in put'
						value={testValue}
						onChangeText={setTestValue}
						leftAddon={Addon}
					/>
				</Col>
				<Col span={100}>
				</Col>
				<Col span={100}>
					<View
						style={{
							borderRadius: 3,
							overflow: 'hidden',
							elevation: 2
						}}
					>
						<Pressable
							android_ripple={{
								color: 'rgba(0, 0, 0, 0.15)',
							}}
							style={{
								backgroundColor: 'red',
								paddingVertical: 10,
								paddingHorizontal: 20,
								alignItems: 'center'
							}}
							onPress={() => {}}
						>
							<Text style={{ color: 'white', fontWeight: 'bold' }}>test</Text>
						</Pressable>
					</View>
				</Col>
				<Col span={100}>
					<Button
						title='test 2'
						icon={<Text>hello</Text>}
						loading={false}
					/>
				</Col>
			</Row>
		</Container>
    )
}

export default App;