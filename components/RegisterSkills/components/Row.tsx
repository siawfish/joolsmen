import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import { Colors } from '@/constants/Colors'
import { useThemeColor } from '@/hooks/useThemeColor'

interface RowProps {
    title: string
    measure: string
    rate: string
}

const Row = ({
    title,
    measure,
    rate
}:RowProps) => {
    const backgroundColor = useThemeColor({
        light: Colors.light.background,
        dark: Colors.dark.background
    }, 'inputBackground');
    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.text
    }, 'inputBackground');
    return (
        <View style={[styles.header, {backgroundColor}]}>
            <View style={[styles.headerTextContainer, styles.longCol]}>
                <ThemedText style={[styles.headerText, {color}]}>{title}</ThemedText>
            </View>
            <View style={[styles.headerTextContainer, styles.border]}>
                <ThemedText style={[styles.headerText, {color}]}>{measure}</ThemedText>
            </View>
            <View style={styles.headerTextContainer}>
                <ThemedText style={[styles.headerText, {color}]}>{rate}</ThemedText>
            </View>
        </View>
    )
}

export default Row

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    headerText: {
        fontSize: fontPixel(14),
        padding: widthPixel(8),
        paddingLeft: widthPixel(16),
        color: Colors.light.subText,
    },
    headerTextContainer: {
        flex: 1,
    },
    border: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: Colors.light.primary,
    },
    longCol: {
        minWidth: widthPixel(120),
    }
})