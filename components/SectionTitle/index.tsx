import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import { ThemedText } from '../ThemedText';
import calendarIcon from "@/assets/images/calendar.png";

interface SectionTitleProps {
    readonly title?: string;
    readonly subtitle?: string;
    readonly icon?: React.ReactNode;
}

const SectionTitle = ({
    title="Upcoming Bookings",
    subtitle="Your bookings today",
    icon=<Image source={calendarIcon} style={styles.icon} />
} : SectionTitleProps) => {
    return (
        <View style={styles.titleContainer}>
            {icon}
            <View style={styles.titleContent}>
                <ThemedText lightColor={Colors.light.text} darkColor={Colors.dark.text} style={styles.title} type="title">{title}</ThemedText>
                {
                    !!subtitle && 
                    <ThemedText lightColor={Colors.light.subText} darkColor={Colors.dark.subText} style={styles.subtitle} type="subtitle">{subtitle}</ThemedText>
                }
            </View>
        </View>
    )
}

export default SectionTitle;

const styles = StyleSheet.create({
    icon: {
        width: widthPixel(30),
        height: widthPixel(30),
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPixel(8),
    },
    titleContent: {
        flexDirection: 'column',
    },
    mainStyle: {
        paddingHorizontal: widthPixel(16),
        marginBottom: "6%",
        gap: heightPixel(20)
    },
    title: {
        fontSize: fontPixel(16),
        lineHeight: 16,
        marginBottom: 0,
        paddingBottom: 0
    },
    subtitle: {
        fontSize: fontPixel(12),
    }
})