import { useState, useEffect, useCallback, useMemo } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'; 
import { Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import { ThemedText } from '@/components/themed-text';
import { ModernCard } from '@/components/modern-card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color'; 
import { POKEMON_WORDS } from '@/constants/pokemon-words'; 

const MAX_MISTAKES = 6;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const selectNewWord = () => {
  const randomIndex = Math.floor(Math.random() * POKEMON_WORDS.length);
  return POKEMON_WORDS[randomIndex];
};

const HANGMAN_PARTS = [
  `  ____\n |/    \n |     \n |     \n |     \n |\n---`,
  `  ____\n |/   |\n |     \n |     \n |     \n |\n---`,
  `  ____\n |/   |\n |   O \n |     \n |     \n |\n---`,
  `  ____\n |/   |\n |   O \n |   | \n |     \n |\n---`,
  `  ____\n |/   |\n |   O \n |  /| \n |     \n |\n---`,
  `  ____\n |/   |\n |   O \n |  /|\\ \n |     \n |\n---`,
  `  ____\n |/   |\n |   O \n |  /|\\ \n |  / \\ \n |\n---`,
];

export default function HangmanGameScreen() {
  const [word, setWord] = useState(selectNewWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [input, setInput] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const colorScheme = useColorScheme() ?? 'dark';
  const neonCyan = Colors.dark.tint; 
  const accent = Colors.dark.accent;
  const backgroundColor = useThemeColor({}, 'background'); 

  const displayWord = useMemo(() => {
    return word.split('').map(letter => {
      return guessedLetters.includes(letter) ? letter : '_';
    }).join(' ');
  }, [word, guessedLetters]);

  useEffect(() => {
    if (mistakes >= MAX_MISTAKES) {
      setGameStatus('lost');
    } else if (!displayWord.includes('_')) {
      setGameStatus('won');
    }
  }, [mistakes, displayWord]);

  const resetGame = useCallback(() => {
    setWord(selectNewWord());
    setGuessedLetters([]);
    setMistakes(0);
    setInput('');
    setGameStatus('playing');
  }, []);
  
  const handleGuess = (letter: string) => {
    letter = letter.toUpperCase();
    if (gameStatus !== 'playing' || !letter || guessedLetters.includes(letter)) {
      return;
    }

    setGuessedLetters(prev => [...prev, letter]);

    if (!word.includes(letter)) {
      setMistakes(prev => prev + 1);
    }
    setInput('');
  };

  const renderAlphabetButtons = () => (
    <View style={styles.alphabetContainer}>
      {ALPHABET.split('').map(letter => {
        const disabled = guessedLetters.includes(letter) || gameStatus !== 'playing';
        const isGuessed = guessedLetters.includes(letter);
        const isInWord = word.includes(letter);
        
        const buttonBgColor = disabled 
          ? (isGuessed ? (isInWord ? `${neonCyan}20` : Colors.dark.cardBackgroundSecondary) : Colors.dark.cardBackgroundSecondary) 
          : Colors.dark.cardBackground;
        
        const buttonBorderColor = disabled 
          ? (isGuessed ? (isInWord ? neonCyan : Colors.dark.icon) : '#333') 
          : neonCyan;
          
        const buttonTextColor = isGuessed 
          ? (isInWord ? neonCyan : Colors.dark.icon) 
          : Colors.dark.text;

        return (
          <TouchableOpacity
            key={letter}
            onPress={() => handleGuess(letter)}
            disabled={disabled}
            style={[
              styles.letterButton,
              { 
                backgroundColor: buttonBgColor,
                borderColor: buttonBorderColor,
              }
            ]}
          >
            <ThemedText style={[
              styles.letterText, 
              { color: buttonTextColor }
            ]}>
              {letter}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  const renderResult = () => {
    if (gameStatus === 'won') {
      return (
        <ModernCard variant="gradient">
          <View style={styles.resultContainer}>
            <IconSymbol name="gamecontroller.fill" size={64} color="#fff" />
            <ThemedText type="title" style={{ color: '#fff', marginTop: Spacing.md, textAlign: 'center' }}>
              Parabéns!
            </ThemedText>
            <ThemedText style={{ color: '#fff', fontSize: 16, textAlign: 'center', marginTop: Spacing.sm }}>
              Você salvou o Pokémon!
            </ThemedText>
          </View>
        </ModernCard>
      );
    }
    if (gameStatus === 'lost') {
      return (
        <ModernCard variant="highlight">
          <View style={styles.resultContainer}>
            <ThemedText type="title" style={{ color: Colors.dark.icon, textAlign: 'center' }}>
              Game Over!
            </ThemedText>
            <ThemedText style={{ color: neonCyan, marginTop: Spacing.md, fontSize: 18, textAlign: 'center' }}>
              A palavra era:
            </ThemedText>
            <ThemedText type="subtitle" style={{ color: accent, marginTop: Spacing.xs, textAlign: 'center' }}>
              {word}
            </ThemedText>
          </View>
        </ModernCard>
      );
    }
    return null;
  };

  const healthPercentage = ((MAX_MISTAKES - mistakes) / MAX_MISTAKES) * 100;

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'Jogo da Forca',
          headerStyle: { backgroundColor: Colors.dark.background },
          headerTintColor: neonCyan,
        }} 
      />
      
      <ScrollView 
        style={[styles.scrollContainer, { backgroundColor }]}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled" 
      >
        
        {/* Header com Gradiente */}
        <LinearGradient
          colors={[Colors.dark.gradient1, Colors.dark.gradient2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <IconSymbol name="gamecontroller.fill" size={48} color="#fff" />
          <ThemedText type="title" style={{ color: '#fff', marginTop: Spacing.sm }}>
            Adivinhe o Pokémon!
          </ThemedText>
        </LinearGradient>

        {/* Stats Cards */}
        <View style={styles.statsRow}>
          <ModernCard style={styles.statCard}>
            <ThemedText style={{ color: Colors.dark.icon, fontSize: 12 }}>
              Tentativas
            </ThemedText>
            <ThemedText type="title" style={{ color: neonCyan, marginTop: Spacing.xs }}>
              {MAX_MISTAKES - mistakes}
            </ThemedText>
          </ModernCard>

          <ModernCard style={styles.statCard}>
            <ThemedText style={{ color: Colors.dark.icon, fontSize: 12 }}>
              Letras
            </ThemedText>
            <ThemedText type="title" style={{ color: accent, marginTop: Spacing.xs }}>
              {guessedLetters.length}
            </ThemedText>
          </ModernCard>

          <ModernCard style={styles.statCard}>
            <ThemedText style={{ color: Colors.dark.icon, fontSize: 12 }}>
              Status
            </ThemedText>
            <View style={[styles.statusDot, { 
              backgroundColor: gameStatus === 'playing' ? neonCyan : gameStatus === 'won' ? '#00ff00' : '#ff0000' 
            }]} />
          </ModernCard>
        </View>

        {/* Health Bar */}
        <ModernCard>
          <ThemedText type="defaultSemiBold" style={{ color: neonCyan, marginBottom: Spacing.sm }}>
            Vida do Pokémon
          </ThemedText>
          <View style={styles.healthBarContainer}>
            <View style={styles.healthBarBackground}>
              <LinearGradient
                colors={healthPercentage > 50 ? [neonCyan, accent] : ['#ff0000', '#ff6600']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.healthBarFill, { width: `${healthPercentage}%` }]}
              />
            </View>
            <ThemedText style={{ color: Colors.dark.text, fontSize: 12, marginTop: Spacing.xs }}>
              {MAX_MISTAKES - mistakes} / {MAX_MISTAKES}
            </ThemedText>
          </View>
        </ModernCard>

        {/* Hangman Drawing */}
        <ModernCard variant="highlight">
          <View style={styles.hangmanContainer}>
            <ThemedText 
              style={[styles.hangmanDrawing, { color: neonCyan }]}
              numberOfLines={7} 
            >
              {HANGMAN_PARTS[mistakes]}
            </ThemedText>
          </View>
        </ModernCard>

        {/* Word Display */}
        <ModernCard variant="gradient">
          <ThemedText style={styles.wordDisplay}>
            {displayWord}
          </ThemedText>
        </ModernCard>

        {/* Result Message */}
        {renderResult()}

        {/* Manual Input */}
        {gameStatus === 'playing' && (
          <ModernCard>
            <ThemedText type="defaultSemiBold" style={{ color: neonCyan, marginBottom: Spacing.md }}>
              Palpite Rápido
            </ThemedText>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, { borderColor: neonCyan, color: Colors.dark.text }]}
                value={input}
                onChangeText={text => setInput(text.toUpperCase().slice(0, 1))}
                maxLength={1}
                autoCapitalize="characters"
                placeholder="?"
                placeholderTextColor={`${neonCyan}70`}
                onSubmitEditing={() => handleGuess(input)}
                blurOnSubmit={false}
                returnKeyType="done"
              />
              <TouchableOpacity
                style={[styles.guessButton, { backgroundColor: neonCyan }]}
                onPress={() => handleGuess(input)}
              >
                <ThemedText style={{ color: Colors.dark.background, fontWeight: '600' }}>
                  Tentar
                </ThemedText>
              </TouchableOpacity>
            </View>
          </ModernCard>
        )}
        
        {/* Alphabet Buttons */}
        <ModernCard>
          <ThemedText type="defaultSemiBold" style={{ color: neonCyan, marginBottom: Spacing.md }}>
            Escolha uma Letra
          </ThemedText>
          {renderAlphabetButtons()}
        </ModernCard>

        {/* Reset Button */}
        {(gameStatus === 'won' || gameStatus === 'lost') && (
          <TouchableOpacity
            style={styles.resetButton}
            onPress={resetGame}
          >
            <LinearGradient
              colors={[Colors.dark.gradient1, Colors.dark.gradient2]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.resetButtonGradient}
            >
              <IconSymbol name="gamecontroller.fill" size={24} color="#fff" />
              <ThemedText style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, marginLeft: Spacing.sm }}>
                Jogar Novamente
              </ThemedText>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1, 
  },
  contentContainer: {
    flexGrow: 1, 
    padding: Spacing.md,
    paddingBottom: Spacing.xxl, 
  },
  header: {
    padding: Spacing.xl,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.lg,
  },
  statusDot: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.round,
    marginTop: Spacing.xs,
  },
  healthBarContainer: {
    width: '100%',
  },
  healthBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: Colors.dark.cardBackgroundSecondary,
    borderRadius: BorderRadius.sm,
    overflow: 'hidden',
  },
  healthBarFill: {
    height: '100%',
    borderRadius: BorderRadius.sm,
  },
  hangmanContainer: {
    alignItems: 'center',
    paddingVertical: Spacing.lg,
  },
  hangmanDrawing: {
    fontSize: 20,
    lineHeight: 22, 
    textAlign: 'left',
    fontFamily: 'Courier',
  },
  wordDisplay: {
    fontSize: 32,
    letterSpacing: 8,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  input: {
    flex: 1,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: Colors.dark.cardBackgroundSecondary,
    fontWeight: 'bold',
  },
  guessButton: {
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: Spacing.xs,
  },
  letterButton: {
    width: 42,
    height: 42,
    borderRadius: BorderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  letterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  resetButton: {
    marginTop: Spacing.lg,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
  },
  resetButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xl,
  },
});