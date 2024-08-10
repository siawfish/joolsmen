import React, { useRef } from 'react';
import { StyleSheet, View, ViewStyle, Animated, Easing, TextInputProps, TextInput } from 'react-native';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { widthPixel } from '@/constants/normalize';
import Ghana from '@/assets/svgs/ic_ghana.svg';

interface PhoneInputProps extends TextInputProps {
    containerStyle?: ViewStyle;
}

const PhoneInput = ({
    style,
    placeholder = 'Enter your phone number',
    keyboardType = 'phone-pad',
    textContentType = 'telephoneNumber',
    maxLength = 10,
    containerStyle,
    clearButtonMode = 'while-editing',
    autoFocus,
    onChangeText,
}: PhoneInputProps) => {
    const backgroundColor = useThemeColor({
        light: Colors.light.inputBackground,
        dark: Colors.dark.inputBackground,
    }, 'inputBackground');
    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.text,
    }, 'text');

    // Animated borderWidth
    const borderWidthAnim = useRef(new Animated.Value(0.3)).current;

    const onFocus = () => {
        Animated.timing(borderWidthAnim, {
            toValue: 2, // Target borderWidth
            duration: 300, // Animation duration
            useNativeDriver: false, // borderWidth cannot be animated using native driver
            easing: Easing.inOut(Easing.ease), // Easing function
        }).start();
    };

    const onBlur = () => {
        Animated.timing(borderWidthAnim, {
            toValue: 0.3, // Return to original borderWidth
            duration: 300, // Animation duration
            useNativeDriver: false, // borderWidth cannot be animated using native driver
            easing: Easing.inOut(Easing.ease), // Easing function
        }).start();
    };

    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

    return (
        <View style={[styles.inputContainer, containerStyle]}>
            <View style={styles.prefixContainer}>
                <Ghana height={widthPixel(24)} width={widthPixel(32)} style={styles.ghanaFlag} />
                <ThemedText
                    type='default'
                    lightColor={Colors.light.subText}
                    darkColor={Colors.dark.subText}
                    style={styles.prefixText}
                >
                    +233
                </ThemedText>
            </View>
            <AnimatedTextInput
                style={[
                    styles.input,
                    {
                        backgroundColor,
                        color,
                        borderTopWidth: borderWidthAnim,
                        borderBottomWidth: borderWidthAnim, // Apply animated borderWidth
                    },
                    style,
                ]}
                cursorColor={Colors.light.primary}
                placeholder={placeholder}
                keyboardType={keyboardType}
                textContentType={textContentType}
                maxLength={maxLength}
                clearButtonMode={clearButtonMode}
                autoFocus={autoFocus}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
    },
    input: {
        fontSize: widthPixel(18),
        fontFamily: 'Regular',
        paddingVertical: widthPixel(16),
        paddingLeft: widthPixel(105),
        borderColor: Colors.light.primary,
    },
    prefixContainer: {
        position: 'absolute',
        top: widthPixel(30),
        left: widthPixel(16),
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ghanaFlag: {
        height: widthPixel(24),
        borderRadius: widthPixel(2),
    },
    prefixText: {
        fontSize: widthPixel(18),
        fontFamily: 'Regular',
        marginLeft: widthPixel(8),
    },
});

export default PhoneInput;