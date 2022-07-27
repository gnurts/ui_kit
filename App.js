import React, { useEffect, useRef, useState } from 'react'
import { Button, Pressable, Text, View, ScrollView, Modal } from 'react-native'
import { TouchableOpacity, GestureHandlerRootView, NativeViewGestureHandler, BaseButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import Input from './src/components/Input'
import Select from './src/components/Select'
import ActionSheet from './src/components/ActionSheet'

const Addon = <Icon name='user' size={20} />

const App = () => {
    const [testValue, setTestValue] = useState(null)
    const [openActionSheet, setOpenActionSheet] = useState(false)

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
			</ActionSheet>
			<Select />
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