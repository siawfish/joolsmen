import { View, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

interface RadioButtonProps {
    style?: ViewStyle;
    checked?: boolean;
}

const RadioButton = ({
    style,
    checked
}:RadioButtonProps) => {
    const borderColor = useThemeColor({
        light: Colors.light.grey,
        dark: Colors.dark.grey
    }, 'primary');
    const checkedBorderColor = useThemeColor({
        light: Colors.light.primary,
        dark: Colors.dark.primary
    }, 'primary');
  return (
    <View style={[styles.container, checked && styles.checked, style, {borderColor : checked ? checkedBorderColor : borderColor}]} />
  )
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  checked: {
    borderWidth: 5,
  }
})

export default RadioButton