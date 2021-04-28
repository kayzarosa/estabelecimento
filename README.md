<h1 align="center">
    <img alt="Delivery" src="https://user-images.githubusercontent.com/20192309/116337854-2e229380-a7b1-11eb-9dc8-e719d619731a.png" width="100%" />
</h1>

## Estabelecimento

# :rocket: Back-End

> TUDO ESTÁ BEM!!!!!.  <img src="https://user-images.githubusercontent.com/20192309/80777643-4202cd80-8b3c-11ea-8f32-5348bda4486b.jpg" width="10%" />

## Sobre o projeto

O Back-end é responsável em validar os dados e aplicar as regras de negócio e retornar ao front-end as mensagens e os dados que serão apresentados em tela.
Aqui nós iremos criar o banco de dados e salvar os registros nas mesmas de acordo com a regra de negócio, realizar o envio de e-mails caso necessário, controlar o acesso a aplicação e as informações apresentadas no front-end.


## Versão e instalação

<a href="https://nodejs.org/pt/"> NodeJS 14.15.1 LTS</a> <br/>

## Ou pode instalar o NVM no linux que você pode trabalhar com qualquer versão do node.

<a href="https://github.com/nvm-sh/nvm"> NVM</a> <br/>

<a href="https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2"> Docker 19.03.8 </a> <br/>

Para instalar o docker no linux:
````sh
sudo apt install docker.io
````

<a href="#"> Banco de dados Mysql </a> <br />

Após instalar o docker para baixar o mysql execute o seguinte comando:
Nessa parte do comando MYSQL_ROOT_PASSWORD=password apague o password e digite uma senha
````sh
docker run -it -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:8 --default-authentication-plugin=mysql_native_password

````

Após baixar o pacote do docker para o banco Mysql é necessário que executemos outro comando para que possamos liberar o usuário e senha pois alguns problemas de compatibilidade com o novo mysql não foram resolvidos, para acessar o container execute o comando abaixo:

CONTAINER_ID: aqui você pode colocar o nome que deu para o container que no caso é mysql ou o id que foi gerado ai baixar o container

````sh
docker exec -it CONTAINER_ID bash

````

O comando a baixo é para acessar o banco do mysql via terminal

````sh
mysql --user=root --password=root

````

Agora estamos prontos para alterar a senha e do usuário (por padrão o usuário de acesso ao banco é o root) que criamos anteriormente e conseguir acessar o mesmo por uma IDE:

username: colocamos qual o nome do usuário.
<br />
password: colocamos a senha que vamos usar para acessar o banco por uma IDE
````sh
ALTER USER 'username' IDENTIFIED WITH mysql_native_password BY 'password';

# Exemplo do comando com os campos já preenchidos

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root';

````

Agora com a configuração feita você já pode acessar o seu banco fora do container por uma IDE de sua preferência.

<br />

Proxímo passo é baixar o gerenciador de pacotes <a href="https://classic.yarnpkg.com/en/docs/install#debian-stable">Yarn </a> é só seguir os passos no site, observação: a versão dele após instalar tem que ser maior que 1 e menor que 2 para que a instalação tenha sido um sucesso.
<br />

<a href="https://typeorm.io/#/">TypeORM </a>

## Instalação dos pacotes

Instale todas as dependências do projeto com o comando abaixo:

````sh
yarn
````

Após a instalação que pode levar um tempo abra o seu projeto no VS Code e olhe na lista de arquivos e procure pelo arquivo <b>.env.example</b> duplique esse arquivo e o renomeie ele para somente <b>.env</b> aqui estão as variáveis de ambiente que o sistema usa para acessar alguns serviços externos e algumas configurações internas.

<br />

Para configurar o banco de dados na aplicação duplicar o arquivo <b>ormconfig.example.json</b> e o renomeie ele para somente <b>ormconfig.json</b> aqui nos temos os dados que serão utilizados para acessar o banco de dados mude o usuário e senha caso esteja diferente e o database caso não tenha criado abra o banco de dados e crie uma o nome que der para ela deve estar no campo database da configuração.

## Rodar o typeorm para criar todas as tabelas
````sh
yarn typeorm migration:run
````
Após rodar o comando ele vai criar todos as tabelas no banco, caso de algum erro veja se o arquivo <b>ormconfig.json</b> está com os dados corretos.


## Iniciar uma API

````sh
yarn dev:server
````

## Usando a API

Após criar o usuário você terá acesso podendo realizar o login na aplicação

<br />
Feito com ♥ by Kayza :wave:
