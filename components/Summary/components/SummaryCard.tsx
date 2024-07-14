import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'

interface SummaryCardProps {
    lightColor?: string
    darkColor?: string
    title: string
    value: string
}

const SummaryCard = ({
    lightColor,
    darkColor,
    title,
    value,
}:SummaryCardProps) => {
  return (
    <ThemedView
        style={styles.container}
        lightColor={lightColor}
        darkColor={darkColor}
    >
      <ThemedText style={styles.title} type='title'>{title}</ThemedText>
      <ThemedText style={styles.value} type='title'>{value}</ThemedText>
    </ThemedView>
  )
}

export default SummaryCard

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthPixel(16),
        borderRadius: 16,
        height: heightPixel(120),
        flex: 1,
        paddingVertical: heightPixel(18),
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        justifyContent: 'space-between',
    },
    title: {
        color: Colors.light.inputBackground,
        fontSize: fontPixel(18),
        maxWidth: '65%',
    },
    value: {
        color: Colors.light.inputBackground,
        fontSize: fontPixel(24),
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
})