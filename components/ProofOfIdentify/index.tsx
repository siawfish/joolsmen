import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { ThemedText } from '../ThemedText'
import { Colors } from '@/constants/Colors'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import ImageThumbnailUploader from '../ImageThumbnailUploader'
import InputField from '../TextInput'
import GhanaCardUploader from '../GhanaCardUploader'

export default function ProofOfIdentify() {
    return (
        <ScrollView>
            <View
                style={styles.contentContainer}
            >
                <ThemedText
                    type='title'
                    style={styles.title}
                >
                    Prove Your Identity
                </ThemedText>
                <ThemedText 
                    lightColor={Colors.light.subText} 
                    darkColor={Colors.dark.subText} 
                    style={styles.subtitle} 
                    type='subtitle'
                >
                    Provide a valid means of identification
                </ThemedText>
                <ImageThumbnailUploader />
            </View>

            <View style={styles?.gap}>
                <ThemedText 
                    lightColor={Colors.light.text} 
                    darkColor={Colors.dark.text} 
                    type='default'
                    style={styles?.ghanaCard}
                >
                    Ghana Card Details
                </ThemedText>
                <InputField 
                    placeholder='Enter your Ghana Card Number'
                />
                
                <GhanaCardUploader />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: fontPixel(16),
        marginTop: heightPixel(10),
        marginBottom: heightPixel(16),
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
        gap: heightPixel(20),
    },
    ghanaCard: {
        fontSize: fontPixel(18),
        marginBottom: heightPixel(10),
        paddingHorizontal: widthPixel(16),
    }
})
