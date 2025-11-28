import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { Colors } from '@/constants/theme'; 
import { useColorScheme } from '@/hooks/use-color-scheme'; 

export default function AboutScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const neonCyan = Colors.dark.tint;
  
  const skills = {
    languages: 'Python | C | C++ | Java | HTML | CSS | JavaScript | MySQL',
    competencies: 'POO | Git | Github | Excell | SQL Server | Metodologias Ágeis | Lógica de programação | Keras | TensorFlow | Trabalho em Equipe | Comunicação | Aprendizado contínuo | Uso eficiente de chatBots | Arduino | Raspberry Pi | Design UX/UI',
  };

  const technologies = [
    { name: 'React Native', version: '0.81.5' },
    { name: 'Expo', version: '~54.0.25' },
    { name: 'Expo Router', version: '~6.0.15' },
    { name: 'React Native Reanimated', version: '~4.1.1' },
    { name: 'React Native Gesture Handler', version: '~2.28.0' },
    { name: '@react-navigation/bottom-tabs', version: '~7.4.0' },
    { name: '@expo/vector-icons', version: '~15.0.3' },
    { name: 'Expo Haptics', version: '~15.0.7' },
    { name: 'Expo Image', version: '~3.0.10' },
    { name: 'Expo Symbols', version: '~1.0.7' },
    { name: 'Expo Status Bar', version: '~3.0.8' },
    { name: 'Expo Linking', version: '~8.0.9' },
    { name: 'Expo Web Browser', version: '~15.0.9' },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#DCDCDC', dark: '#151718' }}
      headerImage={
        <IconSymbol
          size={250}
          color={colorScheme === 'dark' ? neonCyan : '#808080'}
          name="info.circle.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Sobre o Candidato e Tecnologias
        </ThemedText>
      </ThemedView>

      <Collapsible title="Resumo do Candidato">
        <ThemedText>
          {"Cursando superior para Ciência da Computação (5º Período) com conhecimento em Python, C/C++, Java, HTML, CSS, JavaScript."}
          {"Comunicativo, autodidata, disciplinado e com muito interesse em aprender."}
          {"Busca a primeira oportunidade de estágio em Inteligência Artificial para aplicar e expandir seus conhecimentos."}
        </ThemedText>
        <ExternalLink href="https://github.com/nunnowdc">
          <ThemedText type="link">Github: github.com/nunnowdc</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://linkedin.com/in/nunnowakiyama/">
          <ThemedText type="link">Linkedin: linkedin.com/in/nunnowakiyama/</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Skills Técnicas (Currículo)">
        <ThemedText type="defaultSemiBold">Linguagens:</ThemedText>
        <ThemedText>{skills.languages}</ThemedText>
        <ThemedText type="defaultSemiBold" style={{ marginTop: 8 }}>Competências:</ThemedText>
        <ThemedText>{skills.competencies}</ThemedText>
      </Collapsible>

      <Collapsible title="Tecnologias/Módulos do App (React Native + Expo)">
        <ThemedText>Este portfólio foi construído usando React Native e Expo, com o seguinte stack principal e módulos:</ThemedText>
        <ThemedView style={{ gap: 4, marginTop: 8 }}>
          {technologies.map((tech, index) => (
            <ThemedText key={index}>
              <ThemedText type="defaultSemiBold">{tech.name}</ThemedText>: {tech.version}
            </ThemedText>
          ))}
        </ThemedView>
      </Collapsible>
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
  },
});