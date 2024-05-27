import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import { Colors } from '@/constants/Colors'
import PhoneInput from '@/components/PhoneInput'
import Button from '@/components/Button'
import { router } from 'expo-router'

export default function login() {
  return (
    <ThemedSafeAreaView 
      style={styles.containerStyle}
    >
      <View style={styles.mainStyle}>
        <ThemedText 
          type='title'
        >
          Enter your phone
        </ThemedText>
        <ThemedText 
          lightColor={Colors.light.subText} 
          darkColor={Colors.dark.subText} 
          style={styles.subtitle} 
          type='subtitle'
        >
          You will receive a 4 digit code to verify your account
        </ThemedText>
      </View>
      <PhoneInput 
        style={{marginTop: widthPixel(16)}}
        containerStyle={{marginBottom: '8%'}}
      />
      <Button 
        onPress={()=>router.push('otp')}
        label='Continue'
      />
    </ThemedSafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  mainStyle: {
    paddingHorizontal: widthPixel(16),
    marginTop: "20%",
    marginBottom: "6%",
  },
  subtitle: {
    width: "90%",
    fontSize: fontPixel(16),
    marginTop: heightPixel(10)
  },
})