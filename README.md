# Patinhas para Adoção — Aplicação Web (Next.js)

Aplicação moderna da ONG Patinhas para Adoção, desenvolvida com **Next.js**, **TypeScript** e **Firebase**, voltada para a divulgação de animais resgatados e facilitação do processo de adoção responsável.

---

## Objetivo do projeto

Proporcionar uma plataforma dinâmica para a ONG gerenciar animais disponíveis para adoção e permitir que famílias interessadas encontrem seus novos melhores amigos, com suporte a múltiplos idiomas (i18n).

---

## Tecnologias Utilizadas

- **Next.js**: Framework React para produção.
- **TypeScript**: Tipagem estática para maior segurança e qualidade de código.
- **Firebase**:
  - **Firestore**: Banco de dados NoSQL para armazenar informações dos pets.
  - **Authentication**: Gerenciamento de usuários e administradores.
- **i18next**: Sistema de tradução (Português, Inglês e Espanhol).

---

## Segurança e Permissões (Firebase)

A aplicação utiliza o Firebase Firestore com as seguintes regras de acesso:

- **Leitura (Read):** Pública. Qualquer usuário que acessar o site pode visualizar a lista de animais e os detalhes da ONG.
- **Escrita (Write):** Restrita apenas a **Administradores**.

### Como definir um Administrador

Para que um usuário tenha permissão de escrita (criar, editar ou excluir pets), é necessário:

1. O usuário deve se autenticar via Firebase Auth.
2. No Firestore, deve existir um documento dentro da coleção `admins`.
3. **O ID deste documento deve ser exatamente o UID do usuário** gerado pelo Firebase Authentication.

---

## Gerenciamento de Animais

Para gerenciar os animais (adicionar, editar ou excluir), o processo agora é feito diretamente pela interface do site:

1. Acesse a página de busca de animais em `/buscarpet`.
2. Clique no botão de **Login** no cabeçalho e autentique-se com sua conta Google.
3. Se o seu UID estiver cadastrado na coleção `admins` do Firestore, você verá as opções de gerenciamento:
   - Clique no botão **"Adicionar Novo Pet"** para cadastrar um novo animal.
   - Nos cards de cada animal, utilize os botões **"Editar"** ou **"Excluir"** para modificar ou remover registros existentes.

---

## Desenvolvimento e Deploy

A aplicação agora é baseada em Next.js. Para rodar localmente:

1. Instale as dependências: `npm install`
2. Inicie o servidor de desenvolvimento: `npm run dev`
3. Acesse `http://localhost:3000`

O deploy não é mais feito via arquivos estáticos simples, mas sim através do processo de build do Next.js (ex: Vercel, Netlify ou Docker).

### Configuração do domínio

Configure os registros DNS tipo A para apontar para o seu provedor de hospedagem:

| Tipo | Host | Valor           | TTL |
| ---- | ---- | --------------- | --- |
| A    | @    | 185.199.108.153 | 1h  |
| A    | @    | 185.199.109.153 | 1h  |
| A    | @    | 185.199.110.153 | 1h  |
| A    | @    | 185.199.111.153 | 1h  |

---

Feito com carinho para ajudar mais patinhas a encontrarem um lar. 🐾
