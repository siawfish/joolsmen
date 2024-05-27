import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    ChakraPetchBold: require('../assets/fonts/Chakra_Petch/ChakraPetch-Bold.ttf'),
    ChakraPetchBoldItalic: require('../assets/fonts/Chakra_Petch/ChakraPetch-BoldItalic.ttf'),
    ChakraPetchItalic: require('../assets/fonts/Chakra_Petch/ChakraPetch-Italic.ttf'),
    ChakraPetchLight: require('../assets/fonts/Chakra_Petch/ChakraPetch-Light.ttf'),
    ChakraPetchLightItalic: require('../assets/fonts/Chakra_Petch/ChakraPetch-LightItalic.ttf'),
    ChakraPetchMedium: require('../assets/fonts/Chakra_Petch/ChakraPetch-Medium.ttf'),
    ChakraPetchMediumItalic: require('../assets/fonts/Chakra_Petch/ChakraPetch-MediumItalic.ttf'),
    ChakraPetchRegular: require('../assets/fonts/Chakra_Petch/ChakraPetch-Regular.ttf'),
    ChakraPetchSemiBold: require('../assets/fonts/Chakra_Petch/ChakraPetch-SemiBold.ttf'),
    ChakraPetchSemiBoldItalic: require('../assets/fonts/Chakra_Petch/ChakraPetch-SemiBoldItalic.ttf'),
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
      <Stack screenOptions={{headerShown: false}}>
        {/* Your app's screens go here */}
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
