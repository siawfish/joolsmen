import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { widthPixel } from '@/constants/normalize';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

interface IconButtonProps extends TouchableOpacityProps {
    children: React.ReactNode;
    lightColor?: string;
    darkColor?: string;
}

const IconButton = ({
    onPress,
    children,
    style,
    lightColor,
    darkColor,
}: IconButtonProps) => {
    const backgroundColor = useThemeColor({
        light: lightColor ?? Colors.light.navButtonBackground,
        dark: darkColor ?? Colors.dark.navButtonBackground
    }, 'background');
    return (
        <TouchableOpacity 
            style={[styles.container, {backgroundColor}, style]}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPixel(48),
        height: widthPixel(48),
        borderRadius: widthPixel(24),
    }
})

export default IconButton
