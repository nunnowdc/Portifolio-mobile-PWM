# 💻 Portifolio Mobile (Nunno Wakiyama Diniz Carvalho)

Este projeto é um portfólio de estudante em Ciência da Computação, desenvolvido como um aplicativo mobile multi-plataforma (iOS e Android), seguindo uma estética de programação **futurista de alto contraste** (Tema Dark com acentos Ciano Neon).

O objetivo principal foi demonstrar proficiência em um stack moderno de desenvolvimento mobile e em conceitos de UI/UX, além de apresentar experiências e projetos de forma interativa.

---

## ✨ Funcionalidades Principais

* **Navegação por Abas (Tabs):** Estrutura de navegação limpa usando Expo Router para transição fluida entre as seções.
* **Tema de Alto Contraste:** Implementação do modo escuro (`Dark Mode`) focado em fundo preto profundo e Ciano Neon para destaques e botões, simulando uma interface de terminal.
* **Dados Dinâmicos:** As informações de educação, experiência e projetos são apresentadas em componentes reutilizáveis (Collapsible).
* **Jogo da Forca (Hangman):** Um jogo interativo na tela dedicada (`/hangman-game`) utilizando a lista dos 151 primeiros Pokémons como palavras-chave.
* **Componentes Reutilizáveis:** Uso de `ThemedText`, `ThemedView` e `ParallaxScrollView` para consistência visual e gerenciamento de temas.

## 🚀 Tecnologias e Arquitetura

O projeto foi construído sobre o stack Expo e React Native, aproveitando as seguintes bibliotecas:

| Categoria | Tecnologia | Uso no Projeto |
| :--- | :--- | :--- |
| **Framework** | **React Native** | Base para desenvolvimento mobile nativo. |
| **Plataforma** | **Expo** (`~54.0.25`) | Simplificação do workflow de desenvolvimento e build. |
| **Roteamento** | **Expo Router** (`~6.0.15`) | Roteamento baseado em arquivos para as telas (tabs e stack). |
| **Animações** | **React Native Reanimated** | Usado na `ParallaxScrollView` e no componente `HelloWave`. |
| **Estilização** | **TypeScript** (`~5.9.2`) | Tipagem rigorosa para manter a qualidade e evitar erros em componentes de tema. |
| **UI/UX** | **@react-navigation/bottom-tabs** | Componente nativo para a barra de navegação. |

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o Node.js e o npm/yarn instalados.

1.  **Clone o Repositório:**
    ```bash
    git clone [https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github](https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
    cd portifolioMobile
    ```

2.  **Instalar Dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Criar o Arquivo de Palavras (Jogo da Forca):**
    O jogo depende da lista de Pokémons. Crie o arquivo `portifolioMobile/constants/pokemon-words.ts` e insira a lista.

    **(Conteúdo de `pokemon-words.ts`):**
    ```typescript
    export const POKEMON_WORDS = [ /* ... lista de 151 Pokémons em CAIXA ALTA ... */ ];
    ```

4.  **Iniciar o Servidor de Desenvolvimento:**
    ```bash
    npx expo start
    ```

### Testando no Dispositivo

Para ver o estilo futurista em ação:

1.  Baixe o aplicativo **Expo Go** em seu dispositivo iOS ou Android.
2.  Escaneie o QR Code que aparecer no terminal ou no navegador para abrir o App.
3.  Garanta que seu telefone esteja no **Modo Escuro** para visualizar o tema Neon Ciano/Preto.
