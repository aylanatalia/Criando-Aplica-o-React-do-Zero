# CRIANDO UMA APLICAÇÃO REACT DO ZERO

Neste portifólio de estudo, estamos aprendendo a criar uma aplicação React do zero, sem a utilização do create-react-app ou Vite.

Inicialmente devemos iniciar a aplicação utilizando o seguint comando no terminal:
```
yarn init -y
```

Assim, teremos criado nosso arquivo `packge.json`.

## Babel:

O proximo passo será instalar as dependecias do babel, que é o transpilador responsável por converter a aplicação js para que possa rodar em todos os navegadores. Para instalar as dependências do babel devemos aplicar o seguinte comando no terminal:

```
 yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader -D
```

E depois criamos o arquivo `.babelrc` onde deveremos aplicar a configuração do nosso babel.

## Webpack:

O webpack será o nosso compilador para que consigamos juntar os arquivos js de maneira ordenada. Para instalarmos suas dependências, devemos aplicar o seguinte códio no terminal: 

```
yarn add html-loader html-webpack-plugin webpack webpack-cli webpack-dev-server style-loader css-loader file-loader -D
```

Logo em seguinte deveremos configurar nosso arquivo `webpack.config.js`.


## Instalando o Reackt na aplicação:

O seguinte passo será instalar o React na nossa aplicação com os seguintes comandos no terminal:

```
yarn add react react-dom -D  
```


Após isso iremos fazer a criação da pasta `public`, onde termos nosso `index.html` que terá nossas meta informações da aplicação, e também criaremos a pasta `src` onde configuraremos os arquivos `App.js` e `Index.js`.
Ai já conseguiremos aplicar nosso `yarn start` para rodar nosso servidor.

## Eslint:

O Eslint, serve para auxiliar realizando correções em nosso código, para aplicarmos no nosso programa, devemos rodar no terminal:

```
npx eslint --init  
yarn add eslint -D 
```

com isso será criado nosso arquivo `eslint.config.mjs`.

## Prettier:

O prettier serve para criarmos uma padronização no nosso código para que farcilite a manutenção de nossa aplicação dentro de uma equipe. Para configurá-lo, alem de o adicionar no nosso arquivo eslint, devemos criar o arquivo `.prettierrc` e também rodar no terminal o seguinte código:

```
yarn add eslint-config-prettier eslint-plugin-prettier prettier -D
```

## EditorConfig:

Já o nosso EditorConfig serve para criar uma padronização entre os nossos editores, sendo acessível para diversas IDE. Para configurá-lo, basta criarmos o arquivo `.editorconfig` onde iremos colocar nossas regras de padronização.
