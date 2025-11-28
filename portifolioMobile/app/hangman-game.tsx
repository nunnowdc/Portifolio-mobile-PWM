import { useState, useEffect, useCallback, useMemo } from 'react';
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native'; 
import { Stack } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
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
  // 0 mistakes 
  `  ____\n |/    \n |     \n |     \n |     \n |\n---`,
  // 1 mistake 
  `  ____\n |/   |\n |     \n |     \n |     \n |\n---`,
  // 2 mistakes 
  `  ____\n |/   |\n |   O \n |     \n |     \n |\n---`,
  // 3 mistakes 
  `  ____\n |/   |\n |   O \n |   | \n |     \n |\n---`,
  // 4 mistakes 
  `  ____\n |/   |\n |   O \n |  /| \n |     \n |\n---`,
  // 5 mistakes 
  `  ____\n |/   |\n |   O \n |  /|\\ \n |     \n |\n---`,
  // 6 mistakes (Game Over)
  `  ____\n |/   |\n |   O \n |  /|\\ \n |  / \\ \n |\n---`,
];

export default function HangmanGameScreen() {
  const [word, setWord] = useState(selectNewWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [input, setInput] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const colorScheme = useColorScheme() ?? 'dark';
  const neonColor = Colors.dark.tint; 
  
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
          ? (isGuessed ? (isInWord ? neonColor + '30' : Colors.dark.background) : '#333') 
          : Colors[colorScheme].background;
        
        const buttonBorderColor = disabled 
          ? (isGuessed ? (isInWord ? neonColor : Colors.dark.icon) : '#555') 
          : neonColor;
          
        const buttonTextColor = isGuessed 
          ? (isInWord ? neonColor : Colors.dark.icon) 
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
      return <ThemedText type="subtitle" style={{ color: neonColor, fontSize: 24 }}>Parabéns! Você salvou o Pokémon!</ThemedText>;
    }
    if (gameStatus === 'lost') {
      return (
        <>
          <ThemedText type="subtitle" style={{ color: Colors.dark.icon, fontSize: 24 }}>Game Over!</ThemedText>
          <ThemedText style={{ color: neonColor, marginTop: 10, fontSize: 20 }}>A palavra era: {word}</ThemedText>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Jogo da Forca' }} />
      {/* Container Principal com ScrollView */}
      <ScrollView 
        style={[styles.scrollContainer, { backgroundColor }]}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled" 
      >
        
        <ThemedText type="title" style={{ color: neonColor, marginTop: 10 }}>Adivinhe o Pokémon!</ThemedText>

        {/* Desenho da Forca (com fonte mono para alinhamento) */}
        <View style={styles.hangmanContainer}>
          <ThemedText 
            type="mono" 
            style={[styles.hangmanDrawing, { color: neonColor }]}
            numberOfLines={7} 
          >
            {HANGMAN_PARTS[mistakes]}
          </ThemedText>
        </View>

        {/* Palavra e Placar */}
        <ThemedText type="title" style={styles.wordDisplay}>
          {displayWord}
        </ThemedText>
        
        <ThemedText style={{ marginBottom: 20 }}>
          Erros restantes: {MAX_MISTAKES - mistakes}
        </ThemedText>

        {/* Mensagem de Resultado */}
        {renderResult()}

        {/* Palpite Manual (Opcional) */}
        {gameStatus === 'playing' && (
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input, 
                { 
                  borderColor: neonColor, 
                  color: Colors.dark.text, 
                  backgroundColor: Colors.dark.background 
                }
              ]}
              value={input}
              onChangeText={text => setInput(text.toUpperCase().slice(0, 1))}
              maxLength={1}
              autoCapitalize="characters"
              placeholder="DIGITE A LETRA"
              placeholderTextColor={neonColor + '70'}
              onSubmitEditing={() => handleGuess(input)}
              blurOnSubmit={false}
              returnKeyType="done"
            />
            <Button
              title="Palpitar"
              color={neonColor}
              onPress={() => handleGuess(input)}
            />
          </View>
        )}
        
        {/* Botões do Alfabeto */}
        <View style={styles.buttonWrapper}>
          {renderAlphabetButtons()}
        </View>

        {/* Botão de Reiniciar */}
        {(gameStatus === 'won' || gameStatus === 'lost') && (
          <View style={styles.resetButton}>
            <Button 
              title="Jogar Novamente" 
              color={neonColor}
              onPress={resetGame} 
            />
          </View>
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
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40, 
    gap: 10,
  },
  hangmanContainer: {
    paddingVertical: 10,
  },
  hangmanDrawing: {
    fontSize: 20,
    lineHeight: 22, 
    textAlign: 'left',
    minHeight: 160, 
  },
  wordDisplay: {
    fontSize: 32,
    letterSpacing: 8,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    width: '80%',
    maxWidth: 300,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 5,
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 350,
  },
  letterButton: {
    width: 38,
    height: 38,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 2,
  },
  letterText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 30,
  }
});