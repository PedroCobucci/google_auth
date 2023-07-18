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

 ## Referências

 - [Vite](https://vitejs.dev/)
 - [Google Authentication](https://developers.google.com/identity/gsi/web/guides/overview?hl=pt-br)
