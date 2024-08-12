import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { heightPixel, widthPixel } from '@/constants/normalize'
import { router } from 'expo-router'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Colors } from '@/constants/Colors'
import {AgendaEntry} from 'react-native-calendars';
import { ThemedView } from '../ThemedView'

interface BookingCardProps {
    readonly reservation: AgendaEntry;
    readonly isFirst?: boolean;
}

const BookingCard = ({
    reservation, 
    isFirst
}: BookingCardProps) => {
    const cardBackgroundColor = useThemeColor({ light: Colors.light.inputBackground, dark: Colors.light.navButtonBackground }, 'background');
    return (
        <TouchableOpacity
            onPress={() => router.push('details')}
            style={[styles.item, {backgroundColor: cardBackgroundColor}]}
        >
            <ThemedView 
                lightColor={Colors.light.primary}
                darkColor={Colors.dark.primary}
                style={styles.status} 
            />
            <View>
                <ThemedText style={styles.title} type='title'>{reservation.name}</ThemedText>
                <ThemedText lightColor={Colors.light.subText} darkColor={Colors.dark.subText} style={styles.subtitle} type='subtitle'>{`Scheduled for 01:12PM - 03:00PM`}</ThemedText>
                <ThemedText lightColor={Colors.light.subText} darkColor={Colors.dark.subText} style={styles.subtitle} type='subtitle'>{`Location: Achimota ABC`}</ThemedText>
                <ThemedText lightColor={Colors.light.subText} darkColor={Colors.dark.subText} style={styles.subtitle} type='subtitle'>{`Status: Ongoing`}</ThemedText>
            </View>            
        </TouchableOpacity>
    )
}

export default BookingCard

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderRadius: 10,
        padding: widthPixel(16),
        marginRight: widthPixel(16),
        marginTop: heightPixel(16),
        flexDirection: 'row',
        gap: widthPixel(8),
    },
    title: {
        fontSize: widthPixel(16),
    },
    subtitle: {
        fontSize: widthPixel(12),
        marginTop: heightPixel(5),
    },
    status: {
        width: widthPixel(3),
        height: '100%',
        borderRadius: widthPixel(5),
    }
})