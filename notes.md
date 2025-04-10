# Spotfy_Bolado_React
 Projeto em react copiando o site da spotfy com base na imersão alura front-end


 para instalar o simulador de back-end basta digitar no cmd
    npm i json-server -g

para que o json-server emule o back-end, crie um arquivo .json e no cmd digite
    json-server --watch {caminho para o arquivo json} --port {qualquer porta}
    
    ex:
        json-server --watch api-artists/artists.json --port 3001

para criar um projeto em React digite no cmd
    npx create-react-app meu-app

para iniciar o projeto de pois de instalado basta digitar no cmd
    npm start

# esse método está causando bugs por conta da versão 19 do react
para corrigir isso usaremos o vine para instalar o react 18
    (podemos mudar para o react 19 depois de instalado)

e para isso vamos criar uma pasta para o projeto
    e no cmd digitar
        npm create vite@latest my-app --template react
        cd my-app
        npm install
        npm run dev

* nota que "my-app" é o nome do projeto e pode ser alterado

* nota 2, depois de instalar o react usando 'npm create vite@latest my-app --template react'
    você vai precimar selecionar o react e depois qual linguangem você quer usar typescript, javascript, etc...


para usar o fontawsome no projeto basta instalar na pasta do projeto a extensão que você quer usar
    npm install @fortawesome/fontawesome-solid-svg-icons

e depois voce inporta no arquivo que você quer usar o icone que voce quer do grupo de icones que ele ta
import { faHome } from '@fortawesome/free-solid-svg-icons';

por ultimo use essa tag no DOM do html para colocar a fonte
<FontAwesomeIcon icon={faHome} />