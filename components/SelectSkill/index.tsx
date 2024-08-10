import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { Colors } from '@/constants/Colors';
import { heightPixel, widthPixel } from '@/constants/normalize';
import CheckBox from 'react-native-check-box';
import unchecked from "@/assets/images/uncheck.png";
import check from "@/assets/images/checked.png";

interface SelectedSkillProps {
    readonly skill?: string;
    readonly checked?: boolean;
}

const SelectSkill = ({
    skill="Carpentry",
    checked=false,
}:SelectedSkillProps) => {
    return (
        <ThemedView
            lightColor={Colors.light.lightPrimary}
            darkColor={Colors.dark.lightPrimary}
            style={styles.container}
        >
            <CheckBox
                onClick={()=>{}}
                isChecked={checked}
                rightText={skill}
                checkBoxColor={Colors.light.primary}
                rightTextStyle={styles.label}
                unCheckedImage={<Image source={unchecked} style={styles.img} />}
                checkedImage={<Image source={check} style={styles.img} />}
            />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthPixel(16),
        paddingVertical: heightPixel(10),
        borderRadius: 8,
        elevation: 2,
        shadowColor: Colors.light.text,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        gap: widthPixel(10),
        width: '100%',
        marginBottom: widthPixel(10),
    },
    label: {
        fontFamily: 'Regular',
        color: Colors.light.subText,
    },
    img: {
        width: widthPixel(20),
        height: widthPixel(20),
    }
})

export default SelectSkill