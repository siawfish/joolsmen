import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView';
import { heightPixel, widthPixel } from '@/constants/normalize';
import { Colors } from '@/constants/Colors';
import SectionTitle from '../SectionTitle';
import { useThemeColor } from '@/hooks/useThemeColor';
import Card from './components/Card';
import Button from '../Button';
import messagesIcon from "@/assets/images/chatting.png";

const Messages = () => {

    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.text
    }, 'text');

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
            <Button 
                label='View All' 
                style={styles.button}
            />
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
        marginTop: heightPixel(16)
    },
    icon: {
        width: widthPixel(30),
        height: widthPixel(30),
    }
})