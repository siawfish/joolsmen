import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Bold: require('../assets/fonts/SF_Compact_Rounded/SF_Compact_Rounded_Bold.ttf'),
    Medium: require('../assets/fonts/SF_Compact_Rounded/SF_Compact_Rounded_Medium.ttf'),
    Regular: require('../assets/fonts/SF_Pro/SF-Pro-Display-Regular.otf'),
    Light: require('../assets/fonts/SF_Pro/SF-Pro-Display-Regular.otf'),
    Heavy: require('../assets/fonts/SF_Pro/SF-Pro-Display-Heavy.otf'),
    SemiBold: require('../assets/fonts/SF_Compact_Rounded/SF_Compact_Rounded_Semibold.ttf'),
    Italic: require('../assets/fonts/SF_Compact_Rounded/SF_Compact_Text_Bold_Italic.ttf'),
    Thin: require('../assets/fonts/SF_Compact_Rounded/SF_Compact_Rounded_Thin.ttf'),
    UltraLight: require('../assets/fonts/SF_Compact_Rounded/SF_Compact_Rounded_Ultralight.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{headerShown: false}}>
          {/* Your app's screens go here */}
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
