import { StyleSheet } from 'react-native'
import React from 'react'
import { OtpInput } from 'react-native-otp-entry'
import { widthPixel } from '@/constants/normalize'
import { Colors } from '@/constants/Colors'
import { useThemeColor } from '@/hooks/useThemeColor'

const OtpField = () => {
    const backgroundColor = useThemeColor({
        light: Colors.light.background,
        dark: Colors.dark.background
    }, 'inputBackground') as string;
    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.text
    }, 'text') as string;
    return (
        <OtpInput 
            theme={{
                containerStyle: {
                    ...styles.containerStyle,
                    backgroundColor,
                },
                pinCodeContainerStyle: styles.pinCodeContainerStyle,
                pinCodeTextStyle: {
                    ...styles.pinCodeTextStyle,
                    color,
                },
            }}
            focusColor={Colors.light.primary}   
            numberOfDigits={4} 
            onTextChange={(text) => console.log(text)} 
        />
    )
}

export default OtpField

const styles = StyleSheet.create({
    containerStyle: {
        marginRight: "20%",
        marginLeft: widthPixel(16),
    },
    pinCodeContainerStyle: {
        width: widthPixel(60),
        height: widthPixel(60),
    },
    pinCodeTextStyle: {
        fontFamily: 'Bold',
    }
})