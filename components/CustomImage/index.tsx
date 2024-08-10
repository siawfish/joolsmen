import { StyleSheet, Image, ActivityIndicator, DimensionValue, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { heightPixel } from '@/constants/normalize';
import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

interface CustomImageProps {
    readonly source?: string;
    readonly width?: DimensionValue;
    readonly height?: DimensionValue;
    readonly onPress?: () => void;
}

const CustomImage = ({
    source,
    width,
    height,
    onPress,
}:CustomImageProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const color = useThemeColor({ light: Colors.light.inputBackground, dark: Colors.light.inputBackground }, 'text');
    const backgroundColor = useThemeColor({ light: Colors.light.grey, dark: Colors.dark.grey }, 'background');
    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                width,
                height,
                backgroundColor,
            }}
            onPress={onPress}
        >
            {
                loading && (
                    <View style={styles.center}>
                        <ActivityIndicator size="small" />
                    </View>
                )
            }
            {
                error && (
                    <View style={styles.center}>
                        <MaterialIcons name="broken-image" size={24} color={color} />
                    </View>
                )
            }
            <Image
                style={styles.img}
                source={{uri: source}}
                onLoadStart={() => {
                    setLoading(true);
                    setError(false);
                }}
                onLoadEnd={() => setLoading(false)}
                onError={() => setError(true)}
            />
        </TouchableOpacity>
    )
}

export default CustomImage

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    center: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
    }
})