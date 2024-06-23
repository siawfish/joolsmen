import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import AddSkill from './components/AddSkill';
import AddCostItem from './components/AddCostitem';

const RegisterSkills = () => {
    return (
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View
                style={styles.contentContainer}
            >
                <ThemedText
                    type='title'
                    style={styles.title}
                >
                    Register Your Skills
                </ThemedText>
                <ThemedText 
                    lightColor={Colors.light.subText} 
                    darkColor={Colors.dark.subText} 
                    style={styles.subtitle} 
                    type='subtitle'
                >
                    Add your skills to your profile
                </ThemedText>
            </View>

            <View style={styles?.gap}>
                <TouchableOpacity style={styles.card}>
                    <MaterialIcons name="add" size={24} color={Colors.light.primary} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default RegisterSkills;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: fontPixel(16),
        marginTop: heightPixel(10),
        marginBottom: heightPixel(16),
    },
    title: {
        width: "55%",
    },
    contentContainer: {
        paddingHorizontal: widthPixel(16),
        marginBottom: "6%",
        marginTop: "3%"
    },
    gap: {
        flexDirection: 'column',
        gap: heightPixel(20),
    },
    card: {
        width: widthPixel(80),
        height: widthPixel(80),
        borderRadius: widthPixel(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.lightPrimary,
        marginHorizontal: widthPixel(16),
    }
})