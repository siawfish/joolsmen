import { StyleSheet, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import IconTextButton from '@/components/IconTextButton';
import Row from './Row';
import { FontAwesome6 } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

interface CostBreakdownTableProps {
    onAddCostItem: () => void;
}

const CostBreakdownTable = ({
    onAddCostItem
}: CostBreakdownTableProps) => {
    const color = useThemeColor({
        light: Colors.light.text,
        dark: Colors.dark.primary
    }, 'background');

    // Initialize Animated.Value
    const slideAnim = useState(new Animated.Value(-500))[0]; // Start off-screen to the left

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0, // Slide in to final position
            duration: 500, // Animation duration
            useNativeDriver: true, // Use native driver for better performance
        }).start();
    }, [slideAnim]);

    return (
        <Animated.View // Use Animated.View
            style={{
                ...styles.container,
                transform: [{ translateX: slideAnim }] // Apply animated value
            }}
        >
            <Header />
            <Row title='Labour' measure='1' rate='1000' />
            <IconTextButton 
                icon={<FontAwesome6 name="add" size={16} color={color} />}
                text='Add Cost Item' 
                containerStyle={styles.btn}
                onPress={onAddCostItem}
            />
        </Animated.View>
    );
};

export default CostBreakdownTable;

const styles = StyleSheet.create({
    container: {
        // Styles for your container
    },
    btn: {
        justifyContent: 'flex-end',
    },
});