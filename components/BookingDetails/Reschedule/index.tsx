import SectionTitle from '@/components/SectionTitle';
import { Colors } from '@/constants/Colors';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import { useThemeColor } from '@/hooks/useThemeColor';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface RescheduleProps {
    readonly onClose?: () => void;
}

const Reschedule = ({
    onClose,
}:RescheduleProps) => {
    const backgroundColor = useThemeColor(
      {
        light: Colors.light.inputBackground,
        dark: Colors.dark.navButtonBackground,
      },
      "background"
    );
    const handleColor = useThemeColor(
      {
        light: Colors.light.subText,
        dark: Colors.light.primary,
      },
      "background"
    );

  const agendaBackgroundColor = useThemeColor({ light: '', dark: Colors.dark.navButtonBackground }, 'background');
  const labelColor = useThemeColor({ light: Colors.light.subText, dark: Colors.dark.subText }, 'text');
  const textColor = useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text');
  const knobColor = useThemeColor({ light: Colors.light.grey, dark: Colors.light.lightPrimary }, 'primary');
    return (
        <BottomSheet
            onClose={onClose}
            enablePanDownToClose={true}
            snapPoints={["60%"]}
            style={[{ backgroundColor }, styles.container]}
            handleIndicatorStyle={[{ backgroundColor: handleColor }, styles.handle]}
            handleStyle={[{ backgroundColor: backgroundColor }, styles.handle]}
            keyboardBehavior="interactive"
            // footerComponent={renderFooter}
            >
            <BottomSheetView style={[styles.contentContainer, { backgroundColor }]}>
                <SectionTitle titleStyle={styles.title} icon={null} title="Select Date" subtitle="" />
                <Calendar 
                    theme={{
                        calendarBackground: backgroundColor, 
                        dayTextColor: textColor,
                        textSectionTitleColor: labelColor,
                        selectedDayBackgroundColor: Colors.light.primary,
                        todayTextColor: Colors.light.primary,
                        dotColor: Colors.light.primary,
                        agendaKnobColor: knobColor,
                        monthTextColor: textColor,
                        agendaTodayColor: Colors.light.primary,
                        agendaDayTextColor: labelColor,
                        agendaDayNumColor: labelColor,
                        reservationsBackgroundColor: agendaBackgroundColor,
                        arrowColor: Colors.light.primary,
                    }}
                />
            </BottomSheetView>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: heightPixel(20),
  },
  handle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: fontPixel(24),
    paddingHorizontal: widthPixel(16),
    marginBottom: widthPixel(16),
    lineHeight: heightPixel(30),
  },
});


export default Reschedule;
