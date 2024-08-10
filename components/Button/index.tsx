import { StyleSheet, TouchableOpacity, TouchableOpacityProps, TextStyle } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { heightPixel, widthPixel } from '@/constants/normalize';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

interface ButtonProps extends TouchableOpacityProps {
  labelStyle?: TextStyle;
  label?: string;
  icon?: React.ReactNode;
}

const Button = ({
    style,
    labelStyle,
    label='Button',
    onPress,
    icon
}:ButtonProps) => {
    const backgroundColor = useThemeColor({
        light: Colors.dark.background,
        dark: Colors.dark.primary
    }, 'primary');
    const color = useThemeColor({
        light: Colors.dark.text,
        dark: Colors.dark.background
    }, 'text');
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={[
            styles.button, 
            {
                backgroundColor
            },
            style
        ]}
    >
        {icon}
        <ThemedText 
            type='defaultSemiBold'
            style={[
                {
                    color
                },
                labelStyle
            ]}
        >
            {label}
        </ThemedText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    height: heightPixel(48),
    alignItems: 'center',
    marginHorizontal: widthPixel(16),
    borderRadius: widthPixel(10),
    flexDirection: 'row',
    gap: widthPixel(10)
  }
})

export default Button