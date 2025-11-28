import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { ExternalLink } from '@/components/external-link';

export default function ProjectsScreen() {
  const projects = [
    {
      title: 'Sistema Integrado de Gerenciamento',
      period: '07/2024-11/2024',
      description: 'Projeto Java com conceito CRUD para gerenciamento de 3 áreas distintas: restaurante, eventos e clínica médica. O sistema utiliza princípios de POO como encapsulamento, abstração e reutilização de código.',
      skills: 'Java, Github, POO & Trabalho em Equipe.',
      linkText: 'Ver no Github'
    },
    {
      title: 'Sistema de Receituário - UPA Emergência Pediátrica',
      period: '03/2025-06/2025',
      description: 'Projeto Django com conceito CRUD para gerenciamento de uma aplicação web destinada para uso médico e com fins pediátricos. A aplicação foi desenvolvida usando o princípio de arquitetura em 3 camadas, ou seja, desenvolvemos o FrontEnd, o BackEnd e garantimos que as interação na aplicação iriam interagir de alguma forma com nosso banco de dados, seja ler, alterar, adicionar ou excluir dados.',
      skills: 'Trabalho em Equipe, Python, Django, Fullstack & SQLite3.',
      linkText: 'Ver no Github'
    },
  ];

  const githubLink = 'https://github.com/nunnowdc';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#DCDCDC', dark: '#151718' }}
      headerImage={
        <IconSymbol
          size={250}
          color="#808080"
          name="hammer.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Projetos (Portifólio)
        </ThemedText>
      </ThemedView>
      
      {projects.map((item, index) => (
        <Collapsible key={index} title={item.title}>
          <ThemedText type="defaultSemiBold">Período:</ThemedText>
          <ThemedText>{item.period}</ThemedText>
          <ThemedText type="defaultSemiBold" style={{ marginTop: 8 }}>Descrição:</ThemedText>
          <ThemedText>{item.description}</ThemedText>
          <ThemedText type="defaultSemiBold" style={{ marginTop: 8 }}>Skills:</ThemedText>
          <ThemedText>{item.skills}</ThemedText>
          <ExternalLink href={githubLink}>
            <ThemedText type="link" style={{ marginTop: 8 }}>{item.linkText}</ThemedText>
          </ExternalLink>
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