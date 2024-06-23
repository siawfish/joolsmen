import { StyleSheet, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { heightPixel } from '@/constants/normalize';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

interface ProgressBarProps {
    readonly progress: number;
}

export default function ProgressBar({
    progress = 0
}: ProgressBarProps) {
    const backgroundColor = useThemeColor({
        light: Colors.light.lightPrimary,
        dark: Colors.dark.lightPrimary
    }, 'background');
    const color = useThemeColor({
        light: Colors.light.primary,
        dark: Colors.dark.primary
    }, 'primary');

    // Initialize an Animated.Value with 0
    const widthAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animate width change
        Animated.timing(widthAnim, {
            toValue: progress,
            duration: 500, // Animation duration in milliseconds
            useNativeDriver: false, // width and height are not supported with useNativeDriver: true
        }).start();
    }, [progress]);

    const animatedWidth = widthAnim.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Animated.View style={[styles.progressBar, { width: animatedWidth }, { backgroundColor: color }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: heightPixel(5),
    },
    progressBar: {
        height: heightPixel(5),
    }
});