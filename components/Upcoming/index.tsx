import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { Colors } from '@/constants/Colors'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import { ThemedText } from '../ThemedText'
import EventCard from '../EventCard'

const Upcoming = () => {
  return (
    <ThemedView
        lightColor={Colors.light.inputBackground}
        darkColor={Colors.dark.navButtonBackground}
        style={styles.container}
    >
        <View style={styles.titleContainer}>
            <ThemedText style={styles.subtitle} type='subtitle'>
                23 May 2021
            </ThemedText>
            <ThemedText style={styles.title} type='title'>
                Thursday
            </ThemedText>
        </View>
        <EventCard />
        <EventCard 
            startTime='12:00 PM'
            endTime='01:00 PM'
            title='Car cleaning for Kuuku Amankwah'
        />
    </ThemedView>
  )
}

export default Upcoming

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: widthPixel(16),
        paddingVertical: heightPixel(16),
        borderRadius: widthPixel(16),
        elevation: 2,
        shadowColor: Colors.light.text,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    titleContainer: {
        marginBottom: heightPixel(20)
    },
    title: {
        fontSize: fontPixel(20),
        lineHeight: 24,
        marginBottom: 0,
        paddingBottom: 0
    },
    subtitle: {
        fontSize: fontPixel(14),
        marginBottom: heightPixel(5)
    },
})