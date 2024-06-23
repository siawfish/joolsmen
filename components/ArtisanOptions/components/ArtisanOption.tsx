import { StyleSheet, Image, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { fontPixel, widthPixel } from '@/constants/normalize'
import { ThemedText } from '@/components/ThemedText'
import RadioButton from '@/components/RadioButton'
import Individual from '@/assets/images/individual.png';
import { Colors } from '@/constants/Colors'
import { useThemeColor } from '@/hooks/useThemeColor'

interface ArtisanOptionProps {
    style?: ViewStyle;
    checked?: boolean;
    title?: string;
    caption?: string;
    source?: any;
    onPress?: () => void;
}

const ArtisanOption = ({
    style,
    checked,
    title='Individual',
    caption='Create an account as an individual',
    source=Individual,
    onPress
}:ArtisanOptionProps) => {
    const borderColor = useThemeColor({
        light: Colors.light.grey,
        dark: Colors.dark.lightPrimary
    }, 'primary');
    const activeBorderColor = useThemeColor({
        light: Colors.light.primary,
        dark: Colors.dark.primary
    }, 'primary');
    const backgroundColor = useThemeColor({
        light: Colors.light.background,
        dark: Colors.dark.background
    }, 'background');
    const activeBackgroundColor = useThemeColor({
        light: Colors.light.lightPrimary,
        dark: Colors.dark.lightPrimary
    }, 'primary');
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[
            styles.card, 
            {
                borderColor: checked ? activeBorderColor : borderColor, 
                backgroundColor: checked ? activeBackgroundColor : backgroundColor
            }
        ]}
    >
        <View style={styles.innerRow}>
            <Image 
                source={source}
                style={{
                    width: widthPixel(24),
                    height: widthPixel(24)
                }}
            />
            <View style={styles.textContainer}>
                <ThemedText 
                    style={[styles.businessType]}
                    lightColor={checked ? Colors.light.primary : Colors.light.text}
                    darkColor={checked ? Colors.light.primary : Colors.dark.text}
                >
                    {title}
                </ThemedText>
                <ThemedText 
                    style={styles.caption} 
                    type='subtitle'
                    lightColor={Colors.light.subText} 
                    darkColor={Colors.dark.subText}
                >
                    {caption}
                </ThemedText>                    
            </View>
            <RadioButton checked={checked} />
        </View>
    </TouchableOpacity>
  )
}

export default ArtisanOption

const styles = StyleSheet.create({
    innerRow: {
        flexDirection: 'row',
        gap: widthPixel(5),
        paddingEnd: widthPixel(16),
    },
    card: {
        padding: widthPixel(10),
        borderRadius: widthPixel(10),
        backgroundColor: '#f5f5f5',
        flex: 1,
        borderWidth: 1,
    },
    businessType: {
        fontSize: fontPixel(16),
        fontFamily: 'Lato',
    },
    caption: {
        fontSize: fontPixel(12),
        fontFamily: 'Lato',
        color: Colors.light.subText,
    },
    textContainer: {
        flexDirection: 'column',
        gap: widthPixel(5),
        width: '70%'
    }
})