import { StyleSheet, Image, View } from 'react-native';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { heightPixel, widthPixel } from '@/constants/normalize';
import ProfileCard from '@/components/ProfileCard';
import SectionTitle from '@/components/SectionTitle';
import portfolio from "@/assets/images/suitcase.png";
import { FlashList } from "@shopify/flash-list";
import EmptyList from '@/components/EmptyList';
import Button from '@/components/Button';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import Portfolio from '@/components/Portfolio';
import { MaterialIcons } from '@expo/vector-icons';

export default function Portfolios() {
  const labelColor = useThemeColor({
    light: Colors.light.text,
    dark: Colors.dark.text
  }, 'primary');
  const iconColor = useThemeColor({
    light: Colors.light.text,
    dark: Colors.dark.primary
  }, 'primary');
  const borderColor = useThemeColor({
    light: Colors.light.text,
    dark: Colors.dark.text
  }, 'primary');
  const backgroundColor = useThemeColor({
    light: Colors.light.inputBackground,
    dark: Colors.dark.navButtonBackground
  }, 'background');
  return (
    <ThemedSafeAreaView 
      style={styles.containerStyle}
    >
      <FlashList 
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false} 
        ListHeaderComponent={<View style={styles.mainStyle}>
          <ProfileCard />
          <SectionTitle 
            title="Your works" 
            subtitle='Add your works to showcase your skills'
            icon={<Image source={portfolio} style={{ width: widthPixel(30), height: widthPixel(30) }} />}
          >
            <Link href="add" asChild>
              <Button 
                style={{
                  ...styles.smallBtn,
                  backgroundColor,
                }}
              >
                <MaterialIcons name="playlist-add" size={24} color={iconColor} />
              </Button>
            </Link>
          </SectionTitle>
        </View>}
        data={[1,2]}
        ListEmptyComponent={<EmptyList>
          <Link href="add" asChild>
            <Button 
              style={{borderColor, ...styles.buttonStyle}}
              label='Add work'
              labelStyle={{
                color: labelColor,
                ...styles.labelStyle
              }}
            />
          </Link>
        </EmptyList>}
        renderItem={({ item }) => (
          <Portfolio />
        )}
        estimatedItemSize={20}
      />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  mainStyle: {
    gap: heightPixel(20),
    paddingBottom: heightPixel(20),
  },
  buttonStyle: {
    width: widthPixel(100),
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  labelStyle: {
    fontSize: widthPixel(14),
  },
  listContainer: {
    paddingHorizontal: widthPixel(16),
    paddingBottom: heightPixel(100),
  },
  smallBtn: {
    width: widthPixel(40),
    height: widthPixel(40),
    borderRadius: widthPixel(10),
    borderWidth: 1,
    marginHorizontal: widthPixel(0),
  }
});
