import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { fontPixel, widthPixel } from '@/constants/normalize'
import ImagePlaceholder from '@/assets/images/image.png'

interface UploadTileProps {
    title?: string;
    caption?: string;
    image?: any;
}

const UploadTile = ({
    image=ImagePlaceholder,
    title='Upload the front side of your Ghana Card',
    caption='Ensure the image is clear and all details are visible',
}:UploadTileProps) => {
    return (
        <TouchableOpacity style={styles.row}>
            <View style={styles.innerRow}>
                <Image style={styles.icon} source={image} />
                <View style={styles.textContainer}>
                    <ThemedText
                        type='default'
                        lightColor={Colors.light.text} 
                        darkColor={Colors.dark.text} 
                        style={styles.subtitle}
                    >
                        {title}
                    </ThemedText>
                    <ThemedText
                        type='subtitle'
                        lightColor={Colors.light.subText} 
                        darkColor={Colors.dark.subText} 
                        style={styles.caption}
                    >
                        {caption}
                    </ThemedText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default UploadTile

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: widthPixel(5),
        justifyContent: 'space-between',
        paddingHorizontal: widthPixel(16),
    },
    innerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPixel(5),
    },
    icon: {
        width: 40,
        height: 40
    },
    textContainer: {
        flexDirection: 'column',
        gap: widthPixel(5),
    },
    caption: {
        fontSize: fontPixel(12),
    },
    subtitle: {
        fontSize: fontPixel(14),
    }
})