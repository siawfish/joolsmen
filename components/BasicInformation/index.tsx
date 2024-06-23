import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import InputField from '@/components/TextInput'
import ArtisanOptions from '@/components/ArtisanOptions'

export default function BasicInformation() {
  return (
    <ScrollView>
        <View
            style={styles.contentContainer}
        >
            <ThemedText
                type='title'
                style={styles.title}
            >
                Basic Information
            </ThemedText>
            <ThemedText 
                lightColor={Colors.light.subText} 
                darkColor={Colors.dark.subText} 
                style={styles.subtitle} 
                type='subtitle'
            >
                To create an account, please provide the following information
            </ThemedText>
        </View>

        <View style={styles?.gap}>
            <ArtisanOptions />

            <InputField 
                label='Full Name'
                placeholder='Enter your full name'
            />

            <InputField 
                label='Email'
                placeholder='Enter your email address'
            />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    subtitle: {
        width: "90%",
        fontSize: fontPixel(16),
        marginTop: heightPixel(10)
    },
    title: {
        width: "55%",
    },
    contentContainer: {
        paddingHorizontal: widthPixel(16),
        marginBottom: "6%",
        marginTop: "3%"
    },
    gap: {
        flexDirection: 'column',
        gap: heightPixel(10),
    }
})