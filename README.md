# Luz & Cena

Landing page de um site fictício de um cinema, que exibe os filmes em cartaz e que ainda vão estrear permitindo selecionar localidade, buscar filmes pelo título e se inscrever para receber informações. Desenvolvi o projeto durante meus estudos de React e me ajudou principalmente a praticar tipagem com TypeScript.

<p align="center">
  <img src="./img1.png" alt="Tela desktop" width="70%" style="vertical-align: top; margin-right: 20px;" />
</p>

## 🔨 Funcionalidades do projeto

A página possui um cabeçalho, um banner, uma lista de filmes, uma seção de newsletter e um rodapé. Os filmes são retornados de uma API local usando o JSON server. Possui a funcionalidade de filtrar os filmes no campo de busca por título.

<p align="center">
  <img src="./img2.png" alt="Tela desktop" width="70%" style="vertical-align: top; margin-right: 20px;"/>
</p>

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas pra isso são:

- `React`: principal biblioteca para construção da interface
- `Typescript`: para adicionar tipagem estática na aplicação
- `Figma`: Protótipo de design da página
- `JSON server`: para simular uma api local
- `classnames`: para lidar com classes CSS e estilização dinâmica
- `react-icons`: biblioteca de ícones do React
- `CSS modules`: para escrever css no React

## 🛠️ Abrir e rodar o projeto

Após baixar o projeto, você pode abri-lo no Visual Studio Code. Para isso, siga os passos abaixo:

1. No menu superior do VS Code, clique em:
   - **File > Open Folder** (ou uma opção similar).
2. Procure o local onde o projeto foi salvo e selecione a pasta (se o projeto foi baixado como um arquivo ZIP, será necessário extraí-lo antes).
3. Clique em **OK**.
4. Abra o terminal (Ctrl + J) e inicie a aplicação com 

```bash
npm run dev
``` 

5. Abra outro terminal (Ctrl + Shift + ') e inicie a API fake dos filmes com

```bash
npm run server
```