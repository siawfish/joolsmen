import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import { Colors } from '@/constants/Colors'
import { fontPixel, widthPixel } from '@/constants/normalize'
import Business from '@/assets/images/business.png';
import ArtisanOption from './components/ArtisanOption'
import { UserTypes } from '@/types'

export default function ArtisanOptions() {
    const [userType, setUserType] = useState<UserTypes>(UserTypes.INDIVIDUAL)
    return (
        <ThemedView
            style={styles.container}
        >
            <ThemedText
                type='default'
                lightColor={Colors.light.subText} 
                darkColor={Colors.dark.subText} 
                style={[styles.label]}
            >
                Select Account Type
            </ThemedText>
            <View style={styles.row}>
                <ArtisanOption 
                    checked={userType === UserTypes.INDIVIDUAL}
                    onPress={() => setUserType(UserTypes.INDIVIDUAL)}
                />
                <ArtisanOption 
                    title='Business'
                    caption='Create an account as a business'
                    source={Business}
                    checked={userType === UserTypes.BUSINESS}
                    onPress={() => setUserType(UserTypes.BUSINESS)}
                />
            </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: widthPixel(10),
        paddingHorizontal: widthPixel(16)
    },
    label: {
        fontSize: fontPixel(14),
        fontFamily: 'Lato',
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        gap: widthPixel(10),
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
})