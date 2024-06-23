import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import InputField from '@/components/TextInput';
import { heightPixel } from '@/constants/normalize';
import IconTextButton from '@/components/IconTextButton';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

interface AddCostItemProps {
    readonly onClose?: () => void;
    readonly onAdd?: () => void;
}

export default function AddCostItem({ 
    onClose,
    onAdd
} : AddCostItemProps) {
    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.primary
    }, 'background');

    // Step 2: Create a reference for the animation value
    const slideAnim = useRef(new Animated.ValueXY({x: 0, y: -1000})).current;

    // Step 4: Start the animation when the component mounts
    useEffect(() => {
        Animated.spring(slideAnim, {
            toValue: {x: 0, y: 0},
            useNativeDriver: true,
            bounciness: 10, // Adjust the bounciness for a more dynamic effect
        }).start();
    }, [slideAnim]);

    return (
        // Step 5: Apply the animated value to the component's style
        <Animated.View 
            style={[
                styles.container,
                {
                    transform: [
                        { translateY: slideAnim.y }
                    ]
                }
            ]}
        >
            <IconTextButton 
                icon={<Ionicons name="close-circle-sharp" size={24} color="#FF0505" />}
                text='Cancel' 
                containerStyle={styles.closeBtn}
                textColor='#FF0505'
                onPress={onClose}
            />
            <View style={styles.row}>
                <View style={[styles.inputContainer, styles.long]}>
                    <InputField 
                        label='Cost Item'
                        placeholder='Enter Cost Item'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <InputField 
                        label='Measure'
                        placeholder='1'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <InputField 
                        label='Rate'
                        placeholder='1000'
                    />
                </View>
            </View>
            <InputField 
                label='Description'
                placeholder='Enter Description'
                multiline
                style={styles.textarea}
            />
            <IconTextButton 
                icon={<MaterialIcons name="save" size={24} color={color} />}
                text='Save Item' 
                containerStyle={styles.btn}
                onPress={onAdd}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: heightPixel(16),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: heightPixel(8),
    },
    long: {
        minWidth: heightPixel(120),
    },
    inputContainer: {
        flex: 1,
    },
    textarea: {
        height: heightPixel(100)
    },
    btn: {
        justifyContent: 'flex-end',
    },
    closeBtn: {
        justifyContent: 'flex-end',
        marginBottom: heightPixel(16),
        marginTop: 0
    }
});