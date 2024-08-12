import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { heightPixel, widthPixel } from '@/constants/normalize';
import { Image } from 'react-native';
import dashboard from "@/assets/images/dashboard.png";
import calendar from "@/assets/images/calendar.png";
import settings from "@/assets/images/gears.png";
import messages from "@/assets/images/message.png";
import portfolio from "@/assets/images/suitcase.png";
import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({ light: Colors.light.primary, dark: Colors.dark.primary }, 'background');

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.text,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].subText,
        tabBarAllowFontScaling: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: heightPixel(40),
          height: heightPixel(75),
          right: widthPixel(16),
          left: widthPixel(16),
          borderRadius: widthPixel(24),
          backgroundColor,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          paddingVertical: heightPixel(8),
          paddingHorizontal: widthPixel(8),
        },
        tabBarItemStyle: {
          height: heightPixel(48),
          marginTop: heightPixel(5),
        },
        tabBarLabelStyle: {
          fontSize: widthPixel(12),
          fontFamily: 'Regular',
          marginTop: heightPixel(8),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <Image source={dashboard} style={{ width: 30, height: 30 }} />
          ),
          
        }}
      />
      <Tabs.Screen
        name="(portfolio)"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color, focused }) => (
            <Image source={portfolio} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="(bookings)"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, focused }) => (
            <Image source={calendar} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="messaging"
        options={{
          title: 'Messaging',
          tabBarIcon: ({ color, focused }) => (
            <Image source={messages} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Image source={settings} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
    </Tabs>
  );
}
