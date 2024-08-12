import { StyleSheet, Image, View, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import { ThemedText } from '../ThemedText';
import calendarIcon from "@/assets/images/calendar.png";

interface SectionTitleProps {
    readonly title?: string;
    readonly subtitle?: string;
    readonly icon?: React.ReactNode;
    children?: React.ReactNode;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    subtitleStyle?: TextStyle;
}

const SectionTitle = ({
    title="Upcoming Bookings",
    subtitle="Your bookings today",
    icon=<Image source={calendarIcon} style={styles.icon} />,
    children,
    containerStyle={},
    titleStyle={},
    subtitleStyle={},
} : SectionTitleProps) => {
    return (
        <View style={[styles.titleContainer, containerStyle]}>
            <View style={styles.left}>
                {icon}
                <View style={styles.titleContent}>
                    <ThemedText lightColor={Colors.light.text} darkColor={Colors.dark.text} style={[styles.title, titleStyle]} type="title">{title}</ThemedText>
                    {
                        !!subtitle && 
                        <ThemedText lightColor={Colors.light.subText} darkColor={Colors.dark.subText} style={[styles.subtitle, subtitleStyle]} type="subtitle">{subtitle}</ThemedText>
                    }
                </View>
            </View>
            {children}
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
        justifyContent: 'space-between',
    },
    titleContent: {
        flexDirection: 'column',
    },
    title: {
        fontSize: fontPixel(16),
        lineHeight: 16,
        marginBottom: 0,
        paddingBottom: 0,
        textTransform: 'capitalize',
    },
    subtitle: {
        fontSize: fontPixel(12),
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPixel(8),
    }
})