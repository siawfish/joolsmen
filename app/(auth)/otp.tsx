import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import Button from '@/components/Button'
import OtpField from '@/components/Otp'
import BackButton from '@/components/BackButton'
import { router } from 'expo-router'

const Otp = () => {
  return (
    <ThemedSafeAreaView
        style={styles.container}
    >
        <BackButton 
            containerStyle={styles.backButton}
            onPress={()=>router.back()}
        />
        <View style={styles.mainStyle}>
            <ThemedText 
                type='title'
            >
                Enter the confirmation code
            </ThemedText>
            <ThemedText 
                lightColor={Colors.light.subText} 
                darkColor={Colors.dark.subText} 
                style={styles.subtitle} 
                type='subtitle'
            >
                To confirm your phone number, please enter the 4 digit code sent to your phone 0800 000 000
            </ThemedText>
        </View>
        <OtpField />
        <Button 
            label='Continue'
            onPress={() => router.push('register')}
            style={{
                marginTop: heightPixel(40)
            }}
        />
    </ThemedSafeAreaView>
  )
}

export default Otp

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        margin: widthPixel(16),
    },
    mainStyle: {
      paddingHorizontal: widthPixel(16),
      marginBottom: "6%",
    },
    subtitle: {
      width: "90%",
      fontSize: fontPixel(16),
      marginTop: heightPixel(10)
    },
})