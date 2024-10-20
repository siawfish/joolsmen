import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ThemedText } from '@/components/ThemedText'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import BackButton from '@/components/BackButton'

const Header = () => {
    const color = useThemeColor(
      {
        light: Colors.light.text,
        dark: Colors.dark.text,
      },
      "text"
    );
    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <ThemedText type="title" style={styles.title}>
                    Your Cleaning appointment with Princess Ada
                </ThemedText>
                <View style={styles.time}>
                    <Ionicons name="calendar" size={fontPixel(20)} color={color} /> 
                    <ThemedText darkColor={Colors.dark.subText} lightColor={Colors.light.subText} type="subtitle">
                        Today from {' '}
                        <ThemedText style={styles.subtitle} type="title" darkColor={Colors.dark.text} lightColor={Colors.light.text}>12:00 PM</ThemedText>{' '}
                        to <ThemedText style={styles.subtitle} type="title" darkColor={Colors.dark.text} lightColor={Colors.light.text}>2:00 PM</ThemedText>
                    </ThemedText>
                </View>
            </View>
            <Link href="../" asChild>
                <BackButton />
            </Link>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
  headerLeft: {
    width: "70%",
    flexDirection: "column",
    gap: heightPixel(8),
  },
  time: {
    flexDirection: "row",
    gap: widthPixel(8),
  },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between",
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(32),
  },
  title: {
    fontSize: fontPixel(32) 
  },
  subtitle: {
    fontSize: fontPixel(16),
    color: Colors.dark.subText,
  },
})