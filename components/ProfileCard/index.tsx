import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import { Colors } from '@/constants/Colors'
import user from "@/assets/images/individual.png";
import { ThemedText } from '../ThemedText'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import IconButton from '../IconButton'

export default function ProfileCard() {
  return (
    <ThemedView
        lightColor={Colors.light.inputBackground}
        darkColor={Colors.dark.navButtonBackground}
        style={styles.container}
    >
        <View style={styles.detailsContainer}>
            <Image
                source={user}
                style={{ width: widthPixel(65), height: widthPixel(65) }}
            />
            <View style={styles.details}>
                <ThemedText type='title' style={styles.name}>John Doe</ThemedText>
                <ThemedText darkColor={Colors.dark.subText} lightColor={Colors.dark.subText} style={styles.email}>
                    0542662264
                </ThemedText>
                <ThemedText darkColor={Colors.dark.subText} lightColor={Colors.dark.subText} style={[styles.email, styles.marginTop]}>
                    john@mail.com
                </ThemedText>
            </View>
        </View>
        <View style={styles.optionsContainer}>
            <IconButton
                style={styles.iconButton}
            >
                <SimpleLineIcons 
                    name='options' 
                    size={15} 
                    color={Colors.light.icon}
                />
            </IconButton>
            <View style={styles.optionsContainer}>
                <ThemedText style={styles.ratingLabel} darkColor={Colors.dark.text} lightColor={Colors.light.text}>
                    Rating
                </ThemedText>
                <ThemedText style={styles.rating} darkColor={Colors.dark.subText} lightColor={Colors.dark.subText}>
                    93/100 {' '}
                    <AntDesign 
                        name='star' 
                        size={15} 
                        color={Colors.light.primary}
                    />
                </ThemedText>
            </View>
        </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: widthPixel(16),
        paddingVertical: heightPixel(16),
        borderRadius: widthPixel(16),
        elevation: 2,
        shadowColor: Colors.light.text,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPixel(16),
    },
    name: {
        fontSize: fontPixel(16),
        fontWeight: 'bold',
        maxWidth: widthPixel(200),
    },
    email: {
        fontSize: fontPixel(12),
    },
    details: {
        gap: 2,
    },
    iconButton: {
        backgroundColor: 'transparent',
        height: 'auto',
        width: 'auto',
        marginBottom: heightPixel(5)
    },
    optionsContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: heightPixel(2),
    },
    ratingLabel: {
        fontSize: fontPixel(12),
    },
    rating: {
        fontSize: fontPixel(14),
    },
    marginTop: {
        marginTop: heightPixel(5),
    }
})