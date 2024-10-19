import * as MediaLibrary from 'expo-media-library';
import * as Camera from 'expo-camera';
import * as AV from 'expo-av';
import { requestPermissionsAsync } from 'expo-av/build/Audio';
export const Permissions = async () => {
    const status = await MediaLibrary.requestPermissionsAsync();
    const camera = await Camera.useCameraPermissions();
    const audio = await AV.Audio.requestPermissionsAsync();
    console.log(status, camera, audio);
};