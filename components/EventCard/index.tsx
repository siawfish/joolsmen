import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

interface EventCardProps {
    readonly startTime?: string;
    readonly endTime?: string;
    readonly title?: string;
}

const EventCard = ({
    startTime = '10:00 AM',
    endTime = '11:00 AM',
    title = 'Plumbing working with Kofi Siaw'
} : EventCardProps) => {
    const backgroundColor = useThemeColor({ light: Colors.light.lightPrimary, dark: Colors.dark.lightPrimary }, 'text');

  return (
    <View style={styles.eventCard}>
        <View style={styles.timestampContainer}>
            <ThemedText style={styles.timestamp} type='defaultSemiBold'>
                {startTime}
            </ThemedText>
            <ThemedText style={styles.timestamp} type='subtitle'>
                {endTime}
            </ThemedText>
        </View>
        <View style={[styles.eventContainer, {backgroundColor}]}>
            <View style={styles.eventBorder}>
                <ThemedText style={styles.event} type='title'>
                    {title}
                </ThemedText>
            </View>
        </View>
    </View>
  )
}

export default EventCard;

const styles = StyleSheet.create({
    eventCard: {
        width: '100%',
        borderRadius: 16,
        marginBottom: heightPixel(10),
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPixel(16),
    },
    timestampContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: heightPixel(5)
    },
    timestamp: {
        fontSize: fontPixel(12),
        lineHeight: 14,
        marginBottom: 0,
        paddingBottom: 0
    },
    event: {
        fontSize: fontPixel(16),
        lineHeight: 16,
        marginBottom: 0,
        paddingBottom: 0
    },
    eventContainer: {
        flexDirection: 'column',
        paddingVertical: heightPixel(20),
        paddingHorizontal: widthPixel(16),
        flex: 1,
        borderRadius: 16
    },
    eventBorder: {
        borderLeftWidth: 2,
        borderLeftColor: Colors.light.primary,
        paddingLeft: widthPixel(10),
        paddingVertical: heightPixel(5)
    }
})