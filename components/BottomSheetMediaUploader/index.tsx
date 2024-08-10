import { StyleSheet } from 'react-native'
import React from 'react'
import { widthPixel } from '@/constants/normalize'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { Fontisto } from '@expo/vector-icons';

export default function BottomSheetMediaUploader() {
    const backgroundColor = useThemeColor({ light: Colors.light.lightPrimary, dark: Colors.dark.lightPrimary }, 'text');
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor}]}>
            <Fontisto name="photograph" size={15} color={Colors.light.primary} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: widthPixel(40),
        height: widthPixel(40),
        borderRadius: widthPixel(10),
        justifyContent: 'center',
        alignItems: 'center',
    }
})