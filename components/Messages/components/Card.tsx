import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';

interface CardProps {
    readonly title?: string;
    readonly subtitle?: string;
    readonly timestamp?: string;
    readonly read?: boolean;
}

const Card = ({
    title="Kofi Siaw",
    subtitle="Sunt adipisicing ea cillum pariatur. Sunt officia irure pariatur aliquip dolore id ea. Minim dolor dolor sunt magna ullamco duis. Sint elit velit ad quis enim. Irure irure laborum est cillum esse ipsum dolor eu commodo. Dolore nisi mollit dolor officia.",
    timestamp="12:00 PM",
    read=true
}:CardProps) => {
    return (
        <TouchableOpacity style={styles.messageCard}>
            <View style={styles.avatarContainer}>
                <Image />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.row}>
                    <ThemedText type='title' style={styles.title}>
                        {title}
                    </ThemedText>
                    <ThemedText style={styles.timestamp} type='subtitle'>
                        {timestamp}
                    </ThemedText>
                </View>
                <View style={styles.row}>
                    <ThemedText numberOfLines={2} type='subtitle' style={styles.subtitle}>
                        {subtitle}
                    </ThemedText>
                    <ThemedView style={read ? styles.dot : styles.unread} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    messageCard: {
        flexDirection: 'row',
        gap: widthPixel(16),
        alignItems: 'center',
    },
    avatarContainer: {
        width: widthPixel(50),
        height: widthPixel(50),
        borderRadius: widthPixel(8),
        backgroundColor: Colors.light.lightPrimary,
    },
    contentContainer: {
        flex: 1,
        gap: heightPixel(2),
    },
    title: {
        marginBottom: 0,
        paddingBottom: 0,
        fontSize: fontPixel(15),
    },
    subtitle: {
        fontSize: fontPixel(14),
        width: '90%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: widthPixel(8),
        alignItems: 'center',
    },
    timestamp: {
        fontSize: fontPixel(12),
        lineHeight: 14,
        marginBottom: 0,
        paddingBottom: 0,
        color: Colors.light.subText
    },
    dot: {
        width: widthPixel(8),
        height: widthPixel(8),
        borderRadius: widthPixel(4),
        backgroundColor: Colors.light.primary,
    },
    unread: {
        backgroundColor: Colors.light.lightPrimary,
        width: widthPixel(8),
        height: widthPixel(8),
        borderRadius: widthPixel(4),
    }
})