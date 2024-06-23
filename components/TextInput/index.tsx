import { Colors } from '@/constants/Colors';
import { fontPixel, widthPixel } from '@/constants/normalize';
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
    labelStyle,
    multiline=false
}:PhoneInputProps) => {
    const backgroundColor = useThemeColor({
        light: Colors.light.inputBackground,
        dark: Colors.dark.inputBackground
    }, 'inputBackground');
    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.text
    }, 'text');
    return (
        <View style={[styles.container, containerStyle]}>
            {
                label && (
                    <ThemedText
                        type='default'
                        lightColor={Colors.light.subText} 
                        darkColor={Colors.dark.subText} 
                        style={[styles.label, labelStyle]}
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
                selectionColor={Colors.light.primary}
                cursorColor={Colors.light.primary}
                placeholder={placeholder}
                keyboardType={keyboardType}
                textContentType={textContentType}
                maxLength={maxLength}
                clearButtonMode={clearButtonMode}
                multiline={multiline}
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
    label: {
        fontSize: fontPixel(14),
        fontFamily: 'Lato',
        fontWeight: 'bold',
        marginLeft: widthPixel(16)
    }
})

export default InputField;
