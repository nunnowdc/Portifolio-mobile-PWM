import { StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';
import { Colors } from '@/constants/theme';

export function CodeRainBackground() {
  const codeLines = Array.from({ length: 30 }).map((_, i) => 
    i % 5 === 0 ? `> ACCESS_GRANTED_0x${(i * 10).toString(16)}` : '•'
  );

  return (
    <View style={styles.container}>
      {codeLines.map((line, index) => (
        <ThemedText
          key={index}
          style={[
            styles.line,
            { 
              color: index % 3 === 0 ? Colors.codeHighlight : Colors.dark.tint,
              opacity: 0.2 + (index % 4) * 0.15, 
              fontSize: 10 + (index % 3), 
              left: `${(index * 9) % 100}%`,
              top: `${(index * 7) % 100}%`,
            },
          ]}
          // Monospace (mono) é importante para o visual de código
          type="mono"> 
          {line}
        </ThemedText>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    transform: [{ rotate: '-10deg' }], 
  },
  line: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});