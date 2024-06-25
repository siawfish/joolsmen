import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle, Animated, Easing } from 'react-native';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { fontPixel, widthPixel } from '@/constants/normalize';

interface PhoneInputProps extends TextInputProps {
    containerStyle?: ViewStyle;
    label?: string;
    labelStyle?: ViewStyle;
}

const InputField = ({
    style,
    placeholder = 'Enter your phone number',
    keyboardType = 'phone-pad',
    textContentType = 'telephoneNumber',
    maxLength = 10,
    containerStyle,
    clearButtonMode = 'while-editing',
    label,
    labelStyle,
    multiline = false
}: PhoneInputProps) => {
    const backgroundColor = useThemeColor({
        light: Colors.light.inputBackground,
        dark: Colors.dark.inputBackground
    }, 'inputBackground');
    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.text
    }, 'text');

    // Animated borderWidth
    const borderWidthAnim = useRef(new Animated.Value(0.3)).current;

    const onFocus = () => {
        Animated.timing(borderWidthAnim, {
            toValue: 2, // Target borderWidth
            duration: 300, // Animation duration
            useNativeDriver: false, // borderWidth cannot be animated using native driver
            easing: Easing.inOut(Easing.ease) // Easing function
        }).start();
    };

    const onBlur = () => {
        Animated.timing(borderWidthAnim, {
            toValue: 0.3, // Return to original borderWidth
            duration: 300, // Animation duration
            useNativeDriver: false, // borderWidth cannot be animated using native driver
            easing: Easing.inOut(Easing.ease) // Easing function
        }).start();
    };

    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

    return (
        <View style={[styles.container, containerStyle]}>
            {label && (
                <ThemedText
                    type='default'
                    lightColor={Colors.light.subText}
                    darkColor={Colors.dark.subText}
                    style={[styles.label, labelStyle]}
                >
                    {label}
                </ThemedText>
            )}
            <AnimatedTextInput
                style={[
                    styles.input,
                    {
                        backgroundColor,
                        color,
                        borderTopWidth: borderWidthAnim, // Apply animated borderWidth
                        borderBottomWidth: borderWidthAnim // Apply animated borderWidth
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
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </View>
    );
};

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
        borderColor: Colors.light.primary
    },
    label: {
        fontSize: fontPixel(14),
        fontFamily: 'Lato',
        fontWeight: 'bold',
        marginLeft: widthPixel(16)
    }
});

export default InputField;