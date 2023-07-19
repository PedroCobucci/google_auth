 # Aplicação Vite para Login com Google

 Este é um exemplo básico de aplicação usando o Vite que realiza o login usando a API do Google. Você pode usar esse projeto como ponto de partida e expandir suas funcionalidades conforme necessário.

 ## Pré-requisitos

 Antes de executar a aplicação, certifique-se de ter o seguinte instalado em sua máquina:

 - Node.js
 - npm (geralmente instalado junto com o Node.js)

 ## Configuração

 1. Clone o repositório ou faça o download do código-fonte.

 2. Na pasta raiz do projeto, instale as dependências executando o seguinte comando:

    ```bash
    npm install
    ```

 ## Executando a aplicação

 Após concluir as etapas de configuração, você pode executar a aplicação usando o seguinte comando:

 ```bash
 npm run dev
 ```

 A aplicação será iniciada em `http://localhost:3000`. Acesse esse URL em seu navegador para ver a aplicação em execução.

 ## Rodando em produção

 Antes de rodar a aplicação em produção, você precisará gerar uma versão otimizada do projeto. Execute o seguinte comando na pasta raiz do projeto:

 ```bash
 npm run build
 ```

 Isso irá gerar uma pasta `build` contendo os arquivos otimizados para produção.

 Em seguida, você pode iniciar o servidor Next.js em modo de produção com o seguinte comando:

 ```bash
 npm run start
 ```

 O servidor será iniciado e a aplicação estará disponível em `http://localhost:3000`.


 ## Funcionalidades

 - A página inicial exibe um botão "Login com Google".
 - Ao clicar no botão, abrirá uma janela para autenticação do Google.
 - Após fazer login com sucesso, você será redirecionado de volta para a aplicação e verá seu nome e e-mail exibidos na tela.

 ## Customização

 Você pode personalizar a aparência da aplicação editando o arquivo `index.css`

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

 - [Vite](https://vitejs.dev/)
 - [Google Authentication](https://developers.google.com/identity/gsi/web/guides/overview?hl=pt-br)
