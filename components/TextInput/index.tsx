import { Colors } from '@/constants/Colors';
import { widthPixel } from '@/constants/normalize';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface PhoneInputProps extends TextInputProps {
    containerStyle?: ViewStyle;
    label?: string;
    labelStyle?: ViewStyle;
}

const InputField = ({
    style,
    placeholder='Enter your phone number',
    keyboardType='phone-pad',
    textContentType='telephoneNumber',
    maxLength=10,
    containerStyle,
    clearButtonMode='while-editing',
    label,
    labelStyle
}:PhoneInputProps) => {
    const backgroundColor = useThemeColor({
        light: Colors.light.inputBackground,
        dark: Colors.dark.inputBackground
    }, 'inputBackground') as string;
    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.text
    }, 'text') as string;
    return (
        <View style={[styles.container, containerStyle]}>
            {
                label && (
                    <ThemedText
                        type='default'
                        lightColor={Colors.light.subText} 
                        darkColor={Colors.dark.subText} 
                        style={labelStyle}
                    >
                        {label}
                    </ThemedText>
                )
            }
            <TextInput 
                style={[
                    styles.input, 
                    {
                        backgroundColor,
                        color
                    }, 
                    style
                ]}
                placeholder={placeholder}
                keyboardType={keyboardType}
                textContentType={textContentType}
                maxLength={maxLength}
                clearButtonMode={clearButtonMode}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: widthPixel(8)
    },
    input: {
        fontSize: widthPixel(18),
        fontFamily: 'Lato',
        padding: widthPixel(16),
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        borderColor: Colors.light.primary
    },
})

export default InputField;
