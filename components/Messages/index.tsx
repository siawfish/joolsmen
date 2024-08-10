import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import { Colors } from '@/constants/Colors';
import SectionTitle from '../SectionTitle';
import Card from './components/Card';
import Button from '../Button';
import messagesIcon from "@/assets/images/message.png";
import { Link } from 'expo-router';
import { ThemedText } from '../ThemedText';

const Messages = () => {
    return (
        <ThemedView 
            style={styles.container}
            lightColor={Colors.light.inputBackground}
            darkColor={Colors.dark.navButtonBackground}
        >
            <View style={styles.titleContainer}>
                <SectionTitle 
                    title='Messages'
                    subtitle='Your recent messages'
                    icon={<Image style={styles.icon} source={messagesIcon} />}
                />
            </View>
            <Card />
            <Card read={false} />
            <Link style={styles.button} href="#">
                <ThemedText 
                    type='link'
                    style={{color: Colors.light.primary}}
                >
                    View All 
                </ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Messages;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: widthPixel(16),
        paddingVertical: heightPixel(24),
        borderRadius: widthPixel(16),
        elevation: 2,
        shadowColor: Colors.light.text,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        gap: widthPixel(16),
    },
    titleContainer: {
        marginBottom: heightPixel(10)
    },
    button: {
        marginHorizontal: 0,
        marginTop: heightPixel(10),
        fontSize: fontPixel(14),
        alignSelf: 'flex-end',
    },
    icon: {
        width: widthPixel(30),
        height: widthPixel(30),
    }
})