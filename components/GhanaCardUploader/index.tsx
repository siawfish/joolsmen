import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { Colors } from '@/constants/Colors'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import ImagePlaceholder from '@/assets/images/image-back.png'
import UploadTile from './components/UploadTile'

const GhanaCardUploader = () => {
    return (
        <View style={styles.container}>
            <ThemedText 
                lightColor={Colors.light.text} 
                darkColor={Colors.dark.text} 
                type='default'
                style={styles?.ghanaCard}
            >
                Ghana Card Photo
            </ThemedText>

            <UploadTile />

            <UploadTile 
                image={ImagePlaceholder}
                title='Upload the back side of your Ghana Card'
                caption='Ensure the image is clear and all details are visible'
            />
        </View>
    )
}

export default GhanaCardUploader

const styles = StyleSheet.create({
    container: {
        gap: heightPixel(16),
    },
    ghanaCard: {
        fontSize: fontPixel(18),
        marginBottom: heightPixel(10),
        paddingHorizontal: widthPixel(16),
    },
})