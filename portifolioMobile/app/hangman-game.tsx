import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HangmanGameScreen() {
  return (
    <>
      {/* Define o título na barra de navegação */}
      <Stack.Screen options={{ title: 'Jogo da Forca' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Em Desenvolvimento</ThemedText>
        <ThemedText style={{ marginTop: 10 }}>
          A lógica e interface do Jogo da Forca serão implementadas nesta tela.
        </ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});