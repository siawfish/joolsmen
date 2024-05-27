import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

export default function login() {
  return (
    <ThemedView style={styles.containerStyle}>
      <ThemedText type='title'>Login</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})