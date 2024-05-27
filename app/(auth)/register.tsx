import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView'
import { ThemedText } from '@/components/ThemedText'

const Register = () => {
  return (
    <ThemedSafeAreaView
        style={styles.containerStyle}
    >
      <ThemedText type='title'>Register Screen</ThemedText>
    </ThemedSafeAreaView>
  )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
})

export default Register;
