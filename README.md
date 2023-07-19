 # Aplicação Server/Client para login com o Google utilizando Express e React

   Este é um exemplo básico de uma aplicação com uma arquitetura cliente-servidor, utilizando o framework Express.js como servidor e o React.js como cliente para login usando a API do Google.

 ## Pré-requisitos

 Antes de executar a aplicação, certifique-se de ter o seguinte instalado em sua máquina:

 - Node.js
 - npm (geralmente instalado junto com o Node.js)

 ## Funcionalidades

 - A página inicial exibe um botão "Login com Google".
 - Ao clicar no botão, abrirá uma janela para autenticação do Google.
 - Após fazer login com sucesso, você será redirecionado de volta para a aplicação e verá seu nome e e-mail exibidos na tela.
 - É também exibido uma listagem dos usuários que já efetuaram login na aplicação

 ## Configuração & Execução da aplicação

 1. Clone o repositório ou faça o download do código-fonte.

 ### Servidor (Express)

 1. Navegue até o diretório do servidor:

    ```bash
    cd server
    ```

 2. Instale as dependências:
 
     ```bash
    npm install
    ```

 3. Inicie o servidor:
 
     ```bash
    npm start
    ```
    
 O servidor estará em execução em http://localhost:8000
 
 ### Cliente (React)
 1. Navegue até o diretório do client:

    ```bash
    cd cliente
    ```

 2. Instale as dependências:
 
     ```bash
    npm install
    ```

 3. Inicie o cliente:
 
     ```bash
    npm run dev
    ```
    
 A aplicação cliente será iniciada em http://localhost:3000. Acesse esse URL em seu navegador para ver a aplicação em execução.

 ## Adicionando login com Google a sua aplicação

 Para realizar o login com o Google é necessários algumas configurações.

 1. Configurar a tela de permissão OAuth.
 2. Encontrar seu ID de cliente da API Google.
 3. Carregar a biblioteca de cliente da API Google.
 4. Renderizar o botão "Fazer login com o Google".

 ### Configurar a tela de permissão OAuth

 1. Acesse o Console de APIs do Google em https://console.developers.google.com/apis?hl=pt-br.
 2. Abra a página "Tela de Permissão OAuth".
 3. Crie ou selecione um projeto.
 4. Preencha o formulário.
 5. Marque "Status de verificação" caso seu aplicativo precise de verificação e, em seguida, clique no botão "Enviar para verificação".
 
 ### Encontrar seu ID de cliente da API Google
 
 1. Ainda no Console de APIs do Google.
 2. Abra a página Credenciais.
 3. Selecione um projeto de APIs do Google. Se você já tiver um projeto para o botão "Fazer login com o Google", use o projeto existente e o ID do cliente da Web.
 4. Clique em **Criar credenciais** > **ID do cliente OAuth** e, em **Tipo de aplicativo**, selecione **Aplicativo da Web** para criar um novo ID do cliente. Para usar um ID do cliente existente, selecione um tipo do aplicativo da Web.
 5. Adicione o URI do seu site às origens JavaScript autorizadas e clique em **Criar**.

 ### Importar a biblioteca de cliente

 1. Adicione o seguinte código ao seu aplicativo Web:

 ```html
   <script src="https://accounts.google.com/gsi/client" async></script>
 ```

 ### Adicionar o botão "Fazer login com o Google"

 1. Para renderizar o botão, você pode utilizar o seguinte código:

 ```html
   <div id="buttonDiv"></div>
 ```

 ```js
   function handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
   }

   window.onload = function () {
      google.accounts.id.initialize({
         client_id: "SEU ID DE CLIENTE GOOGLE",
         callback: handleCredentialResponse
      });

      google.accounts.id.renderButton(
         document.getElementById("buttonDiv"),
         { theme: "outline", size: "large" } // Customização do botão
      );
      
      google.accounts.id.prompt();
   }
 ```

 ## Referências

 - [Express](https://expressjs.com/pt-br/)
 - [React](https://react.dev/)
 - [Vite](https://vitejs.dev/)
 - [Google Authentication](https://developers.google.com/identity/gsi/web/guides/overview?hl=pt-br)
