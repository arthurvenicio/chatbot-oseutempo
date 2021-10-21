# The Webhook - Seu Julio, Bot do Seu Tempo!

## A ideia

A ideia era criar um chatbot que consegui-se disponibilizar a previsão do tempo de cidades brasileiras em até 7 dias a diante!

## Bibliotecas

- [Axios](https://axios-http.com/) - Para fazer as requisições na API, um cliente http.
- [Fast-xml-parser](https://www.npmjs.com/package/fast-xml-parser) - Para transformar o xml em um JSON.

## Ferramentas

- [Firebase-cli](https://firebase.google.com/docs/cli) - Cli do Firebase.
- [Eslint](https://eslint.org/) - Linter para o codigo.
- [Yarn](https://yarnpkg.com/) - Gerenciador de Pacotes.

## Links Uteis

- [API do CPTEC](http://servicos.cptec.inpe.br/XML/) - Obter os dados do clima.

# Para começar

Clone este projeto em sua maquina com <pre><code>git clone git@github.com:arthurvenicio/chatbot-oseutempo.git</code></pre>

Após baixar o projeto abra a pasta e digite o seguinte comando no terminal:

<pre><code>cd functions && yarn</code></pre>

Com isso será instalada todas as depedencias necessarias para rodar o projeto!

Agora utilize do com a cli ja instalada utilize o comando:

<pre><code>firebase login</code></pre>

Logue com sua conta, escolha um projeto no firebase utlizando:

<pre><code>firebase use [nome do projeto]</code></pre>

Se não tiver o projeto você pode criar no [console do firebase](https://console.firebase.google.com/u/0/) e repetir o processo.

Agora vamos rodar o projeto com:

<pre><code>yarn serve</code></pre>

Feito isso será aberta a function no seu localhost:4000 e lá você consegue pegar a url da function rodando no seu localhost a rota para se aplicar no firebase é `/getWeather`.

Caso queira dar deploy é só utilizar:

<pre><code>yarn deploy</code></pre>

##### é importante que seja dado um yarn build antes!

Feito e desenvolvido em 8horas, atualizações futuras poderam ser necessárias.

[English Version](./README-en.md)
