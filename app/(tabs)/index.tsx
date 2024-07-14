import { Image, StyleSheet, Platform, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import ProfileCard from '@/components/ProfileCard';
import Summary from '@/components/Summary';
import Upcoming from '@/components/Upcoming';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import SectionTitle from '@/components/SectionTitle';
import Messages from '@/components/Messages';

export default function HomeScreen() {
  return (
    <ThemedSafeAreaView 
      style={styles.containerStyle}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainStyle}>
          <ProfileCard />
          <Summary />
          <SectionTitle />
          <Upcoming />
          <Messages />
        </View>
      </ScrollView>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  mainStyle: {
    paddingHorizontal: widthPixel(16),
    marginBottom: "6%",
    gap: heightPixel(20)
  },
});
