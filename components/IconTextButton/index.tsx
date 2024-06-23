import { StyleSheet,ViewStyle } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemedText } from '../ThemedText'
import { Colors } from '@/constants/Colors'
import { useThemeColor } from '@/hooks/useThemeColor'
import { heightPixel } from '@/constants/normalize'

interface IconTextButtonProps {
    icon: React.ReactNode
    text: string
    containerStyle?: ViewStyle | ViewStyle[]
    textColor?: string
    onPress?: () => void
}

const IconTextButton = ({
    icon,
    text,
    containerStyle,
    textColor,
    onPress
}:IconTextButtonProps) => {
    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.primary
    }, 'background');
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            {icon}
            <ThemedText style={[styles.text, {color: textColor ?? color}]}>{text}</ThemedText>
        </TouchableOpacity>
    )
}

export default IconTextButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: heightPixel(8),
        marginTop: heightPixel(16),
        paddingHorizontal: heightPixel(16),
        borderRadius: 4,
    },
    text: {
        fontSize: heightPixel(16),
    }
})