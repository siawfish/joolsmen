import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import { ThemedText } from '../ThemedText'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useThemeColor } from '@/hooks/useThemeColor'
import Status from './Status'
import { BookingStatuses, Media, MediaType } from '@/types'
import { ThemedView } from '../ThemedView'
import Thumbnails from '../Thumbnails'
import ContactCard from './ContactCard'
import Button from '../Button'

const IMAGES:Media[] = [
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '1',
    },
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '2',
    },
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '3',
    },
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '4',
    },
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '5',
    },
]

const BookingDetails = () => {
    const labelColor = useThemeColor(
        {
          light: Colors.light.subText,
          dark: Colors.dark.subText,
        },
        "text"
      );
    return (
        <ScrollView 
            contentContainerStyle={styles.mainContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.row}>
                <Status status={BookingStatuses.ONGOING} />
                <View>
                    <ThemedText style={[styles.label, { color:labelColor}]}>Estimated Fees: <ThemedText type='defaultSemiBold'>GHS 2.00</ThemedText></ThemedText>
                </View>
            </View>
            <View>
                <ThemedText>
                    Excepteur Lorem sunt mollit aliquip. Et consequat consequat ad in minim amet minim aliqua. Amet do voluptate proident tempor aute veniam ullamco. Voluptate dolore commodo in velit officia excepteur Lorem cupidatat ut sit quis occaecat exercitation anim. Est dolore commodo dolore duis sit aliqua nostrud elit sunt labore eu ex. Aliqua fugiat qui aliqua pariatur sunt.
                </ThemedText>
                <Thumbnails data={IMAGES} />
            </View>
            <ContactCard />
        </ScrollView>
    )
}

export default BookingDetails

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: widthPixel(16),
        gap: heightPixel(20),
        paddingBottom: heightPixel(70),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: fontPixel(14),
    }
});