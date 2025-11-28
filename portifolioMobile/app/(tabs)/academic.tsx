import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function AcademicScreen() {
  const education = [
    {
      title: 'Bacharel em Ciência da Computação',
      institution: 'Universidade Católica de Pernambuco - Pernambuco/PE',
      period: '02/2023 - 06/2027 (5º Período)'
    },
    {
      title: 'Curso de Idiomas - Inglês',
      institution: 'Senac PE - Pernambuco/PE',
      period: '02/2023-06/2026 (Upper-Intermediate B1)'
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#DCDCDC', dark: '#151718' }}
      headerImage={
        <IconSymbol
          size={250}
          color="#808080"
          name="book.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Experiência Acadêmica
        </ThemedText>
      </ThemedView>
      
      {education.map((item, index) => (
        <Collapsible key={index} title={item.title}>
          <ThemedText type="defaultSemiBold">Instituição:</ThemedText>
          <ThemedText>{item.institution}</ThemedText>
          <ThemedText type="defaultSemiBold" style={{ marginTop: 8 }}>Período:</ThemedText>
          <ThemedText>{item.period}</ThemedText>
        </Collapsible>
      ))}

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