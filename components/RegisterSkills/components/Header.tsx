import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import { Colors } from '@/constants/Colors'
import { useThemeColor } from '@/hooks/useThemeColor'

const Header = () => {
    const backgroundColor = useThemeColor({
        light: Colors.light.lightPrimary,
        dark: Colors.dark.lightPrimary
    }, 'inputBackground');
    return (
        <View style={[styles.header, {backgroundColor}]}>
            <View style={[styles.headerTextContainer, styles.longCol]}>
                <ThemedText style={styles.headerText}>Cost Item</ThemedText>
            </View>
            <View style={[styles.headerTextContainer, styles.border]}>
                <ThemedText style={styles.headerText}>Measure</ThemedText>
            </View>
            <View style={styles.headerTextContainer}>
                <ThemedText style={styles.headerText}>Rate</ThemedText>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthPixel(16),
        marginTop: heightPixel(16),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: heightPixel(16),
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