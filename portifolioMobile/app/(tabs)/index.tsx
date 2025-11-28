import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#DCDCDC', dark: '#151718' }} 
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo(a)!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type="subtitle">Nunno Wakiyama Diniz Carvalho</ThemedText>
        <ThemedText type="default">Cientista da Computação (5º Período)</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sobre Este Portfólio</ThemedText>
        <ThemedText>
          Este aplicativo é um portfólio desenvolvido em{' '}
          <ThemedText type="defaultSemiBold">React Native</ThemedText> com{' '}
          <ThemedText type="defaultSemiBold">Expo</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">Expo Router</ThemedText>.
        </ThemedText>
        <ThemedText style={styles.getStartedText}>
          A navegação entre as seções (Sobre, Acadêmica, etc.) é feita pelas abas na parte inferior.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Estilo Futurista (Dark Mode)</ThemedText>
        <ThemedText>
          O tema foi atualizado para uma estética de programação de alto contraste, utilizando preto profundo, branco e tons de ciano/verde neon como acentos.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subtitleContainer: {
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 12,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});