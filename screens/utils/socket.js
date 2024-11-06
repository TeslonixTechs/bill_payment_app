import { io } from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
const getToken = async() => {
	const token = await AsyncStorage.getItem('token')
	return token	
}
const socket = io('http://192.168.43.41:7000');
export default socket;