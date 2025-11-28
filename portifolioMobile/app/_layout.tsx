import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Platform } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const theme = (Platform.OS === 'web' || colorScheme === 'dark') ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        {/* Nova tela para o Jogo da Forca */}
        <Stack.Screen name="hangman-game" options={{ title: 'Jogo da Forca' }} /> 
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}