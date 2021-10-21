# The Webhook - Seu Julio, Bot of Your Time!

## The idea

The idea was to create a chatbot that managed to provide the weather forecast for Brazilian cities in up to 7 days ahead!

## Libraries

- [Axios](https://axios-http.com/) - To make requests on the API, an http client.
- [Fast-xml-parser](https://www.npmjs.com/package/fast-xml-parser) - To transform the xml into a JSON.

## Tools

- [Firebase-cli](https://firebase.google.com/docs/cli) - Firebase cli.
- [Eslint](https://eslint.org/) - Linter for the code.
- [Yarn](https://yarnpkg.com/) - Package Manager.

## Useful links

- [CPTEC API](http://servicos.cptec.inpe.br/XML/) - Get weather data.

# To begin

Clone this project on your machine with <pre><code>git clone git@github.com:arthurvenicio/chatbot-oseutempo.git</code></pre>

After downloading the project, open the folder and type the following command in the terminal:

<pre><code>cd functions && yarn</code></pre>

This will install all the necessary dependencies to run the project!

Now use do with the cli already installed use the command:

<pre><code>firebase login</code></pre>

Log in with your account, choose a project in firebase using:

<pre><code>firebase use [project name]</code></pre>

If you don't have the project, you can create it in [firebase console] (https://console.firebase.google.com/u/0/) and repeat the process.

Now let's run the project with:

<pre><code>wire drawing</code></pre>

Once this is done, a function will be opened on your localhost: 4000 and there you can get a url of the function running on your localhost. A route to apply in firebase is `/getWeather`.

If you want to implant, just use:

<pre><code>yarn deploy</code></pre>

##### It's important that you be given a yarn build before!

Made and developed in 8 hours, future updates may be needed.

[Portuguese Version](./README.md)
