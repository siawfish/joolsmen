import { StyleSheet, View } from 'react-native'
import React from 'react'
import Thumbnail from '../Thumbnail'
import { ThemedText } from '../ThemedText'
import { Colors } from '@/constants/Colors'
import { fontPixel, widthPixel } from '@/constants/normalize'

const ImageThumbnailUploader = () => {
    return (
        <View
            style={styles.row}
        >
            <View
                style={styles.textContainer}
            >
                <ThemedText
                    type='default'
                    lightColor={Colors.light.text} 
                    darkColor={Colors.dark.text} 
                >
                    Take a photo
                </ThemedText>
                <ThemedText
                    type='subtitle'
                    lightColor={Colors.light.subText} 
                    darkColor={Colors.dark.subText} 
                    style={styles.caption}
                >
                    Open your camera to take a photo of yourself
                </ThemedText>
            </View>
            <Thumbnail />
        </View>
    )
}

export default ImageThumbnailUploader;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: widthPixel(5),
        justifyContent: 'space-between',
    },
    textContainer: {
        flexDirection: 'column',
    },
    caption: {
        fontSize: fontPixel(12),
    },
})