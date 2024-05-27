import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '@/constants/normalize';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

interface IconButtonProps extends TouchableOpacityProps {
    children: React.ReactNode;
}

const IconButton = ({
    onPress,
    children,
    style
}: IconButtonProps) => {
    const backgroundColor = useThemeColor({
        light: Colors.light.navButtonBackground,
        dark: Colors.dark.navButtonBackground
    }, 'background') as string;
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
