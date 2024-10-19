import * as Picker from 'expo-image-picker';
export const uploadMedia = (type) => {
    if(type === 'picture') {
        const result = Picker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: Picker.MediaTypeOptions.Images,
            aspect: [4, 3 ],
            presentationStyle: Picker.UIImagePickerPresentationStyle.FULL_SCREEN,
            preferredAssetRepresentationMode: Picker.UIImagePickerPreferredAssetRepresentationMode.Automatic,
            base64: true,
            quality: 0.5,
        });
        return result;
    } else {
        const result = Picker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: Picker.MediaTypeOptions.Videos,
            aspect: [4, 3 ],
            base64: true,
            videoQuality: Picker.UIImagePickerControllerQualityType.Medium,
            presentationStyle: Picker.UIImagePickerPresentationStyle.FULL_SCREEN,
            preferredAssetRepresentationMode: Picker.UIImagePickerPreferredAssetRepresentationMode.Automatic,
            quality: 0.5,
        });
        return result;
    }
};