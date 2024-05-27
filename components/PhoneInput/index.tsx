import { Colors } from '@/constants/Colors';
import { widthPixel } from '@/constants/normalize';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
// @ts-ignore
import Ghana from '@/assets/svgs/ic_ghana.svg';

interface PhoneInputProps extends TextInputProps {
    containerStyle?: ViewStyle;
}

const PhoneInput = ({
    style,
    placeholder='Enter your phone number',
    keyboardType='phone-pad',
    textContentType='telephoneNumber',
    maxLength=10,
    containerStyle,
    clearButtonMode='while-editing',
    autoFocus,
    onChangeText
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
        <View style={[styles.inputContainer, containerStyle]}>
            <View
                style={styles.prefixContainer}
            >
                <Ghana 
                    height={widthPixel(24)}
                    width={widthPixel(32)}
                    style={styles.ghanaFlag}
                />
                <ThemedText
                    type='default'
                    lightColor={Colors.light.subText} 
                    darkColor={Colors.dark.subText} 
                    style={styles.prefixText}
                >
                    +233
                </ThemedText>
            </View>
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
                autoFocus={autoFocus}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    fontSize: widthPixel(18),
    fontFamily: 'Lato',
    paddingVertical: widthPixel(16),
    paddingLeft: widthPixel(105),
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: Colors.light.primary
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
        fontFamily: 'Lato',
        marginLeft: widthPixel(8),
    },
})

export default PhoneInput;
