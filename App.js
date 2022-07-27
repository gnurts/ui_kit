import React, { memo, useEffect, useRef, useState } from 'react'
import { Button, Pressable, Text, View, ScrollView, Modal } from 'react-native'
import { TouchableOpacity, GestureHandlerRootView, NativeViewGestureHandler, BaseButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import Input from './src/components/Input'
import Select from './src/components/Select'
import ActionSheet from './src/components/ActionSheet'

const Addon = <Icon name='user' size={20} />

const ActionSheetContent = () => {
	const [testValue, setTestValue] = useState(null)
	
	return (
		<ScrollView keyboardShouldPersistTaps='always'>
			<Input
				placeholder='ex: 192.168.0.1:8000'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={<Text style={{ borderRightWidth: 1, borderColor: 'gray', paddingRight: 10, width: 60 }}>API</Text>}
			/>
			<Input
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={<Text style={{ borderRightWidth: 1, borderColor: 'gray', paddingRight: 10, width: 60 }}>Socket</Text>}
			/>
			<Input
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
			<Input
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
			<Input
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
			<Input
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
			<Input
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
			<Input
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
			<Input
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
			<Input
				placeholder='test in put'
				value={testValue}
				onChangeText={setTestValue}
				leftAddon={Addon}
			/>
		</ScrollView>
	)
}

const App = () => {
    const [openActionSheet, setOpenActionSheet] = useState(false)

	// return (
	// 	<>
	// 		<Button
	// 			title='open'
	// 			onPress={() => setOpenActionSheet(true)}
	// 		/>
	// 		<Modal
	// 			visible={openActionSheet}
	// 			animationType='slide'
	// 		>
	// 			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	// 				<Button
	// 					title='close'
	// 					onPress={() => setOpenActionSheet(false)}
	// 				/>
	// 			</View>
	// 		</Modal>
	// 	</>
	// )

    return (
		<View
			style={{
				flex: 1
			}}
		>
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
		</View>
    )
}

export default App;