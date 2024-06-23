import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { widthPixel } from '@/constants/normalize'
import { useThemeColor } from '@/hooks/useThemeColor'

const Thumbnail = () => {
    const backgroundColor = useThemeColor({
        light: Colors.light.lightPrimary,
        dark: Colors.dark.subText
    }, 'primary');
    return (
        <TouchableOpacity style={[styles.thumbnail, {backgroundColor}]}>
            <EvilIcons name="camera" size={40} color={Colors.light.text} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        width: widthPixel(80),
        height: widthPixel(80),
        borderRadius: widthPixel(10),
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Thumbnail;