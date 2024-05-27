import { ViewStyle } from 'react-native'
import React from 'react'
import IconButton from '../IconButton'
import { Feather } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Colors } from '@/constants/Colors'

interface BackButtonProps {
    containerStyle?: ViewStyle
    onPress?: () => void
}

export default function BackButton({
    containerStyle,
    onPress
}: BackButtonProps) {
    const color = useThemeColor({
        light: Colors.dark.text,
        dark: Colors.dark.primary
    }, 'background') as string;
    return (
        <IconButton onPress={onPress} style={containerStyle}>
            <Feather name="chevron-left" size={24} color={color} />
        </IconButton>
    )
}