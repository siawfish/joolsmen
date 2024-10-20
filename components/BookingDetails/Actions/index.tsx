import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import Button from '@/components/Button'
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from '@/hooks/useThemeColor';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import { Colors } from '@/constants/Colors';


interface ActionsProps {
    readonly onCancel?: () => void;
    readonly onReschedule?: () => void;   
}

const Actions = ({
    onCancel,
    onReschedule
}:ActionsProps) => {
    const color = useThemeColor({
        light: Colors.dark.text,
        dark: Colors.dark.background
    }, 'text');
    return (
        <ThemedView style={styles.action}>
            <Button 
                onPress={onCancel}
                label="Cancel"
                icon={<Ionicons name="close" size={widthPixel(20)} color={Colors.light.danger} />}
                style={styles.cancelBtn}
                labelStyle={styles.cancelLabel}
            />
            <Button 
                label="Reschedule"
                icon={<Ionicons name="calendar" size={fontPixel(20)} color={color} /> }
                style={styles.rescheduleBtn}
                onPress={onReschedule}
            />
        </ThemedView>
    )
}

export default Actions

const styles = StyleSheet.create({
    action: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingBottom: heightPixel(40),
      paddingTop: heightPixel(16),
      gap: heightPixel(16),
      paddingHorizontal: widthPixel(16),
    },
    cancelBtn: {
      flex: 1,
      backgroundColor: Colors.light.dangerBackground,
      marginHorizontal: 0,
    },
    cancelLabel: {
      color: Colors.light.danger,
    },
    rescheduleBtn: {
      paddingHorizontal: widthPixel(16),
      marginHorizontal: 0,
    }
})