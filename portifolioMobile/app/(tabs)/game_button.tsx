import { StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { Colors } from '@/constants/theme'; 
import { useColorScheme } from '@/hooks/use-color-scheme'; 

export default function GameButtonScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const neonCyan = Colors.dark.tint;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#DCDCDC', dark: '#151718' }} 
      headerImage={
        <IconSymbol
          size={250}
          color={colorScheme === 'dark' ? neonCyan : '#808080'} // Neon Icon
          name="gamecontroller.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Jogo da Forca
        </ThemedText>
      </ThemedView>
      <ThemedText style={{ marginBottom: 20 }}>
        Clique no botão abaixo para iniciar o jogo da forca!
      </ThemedText>

      <ThemedView style={styles.buttonContainer}>
        <Link href="/hangman-game" asChild>
          <Button title="Começar Jogo" />
        </Link>
        <ThemedText type="defaultSemiBold" style={{ marginTop: 16 }}>
          A tela de jogo será implementada no arquivo \`app/hangman-game.tsx\` (próxima etapa).
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: 0,
    left: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});