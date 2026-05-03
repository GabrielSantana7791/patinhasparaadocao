# Patinhas para Adoção — Site institucional

Site estático da ONG Patinhas para Adoção, hospedado no GitHub Pages com domínio próprio `patinhasparaadocao.org`.

---

## Objetivo do projeto

Apresentar a ONG, divulgar animais disponíveis para adoção, explicar o processo de adoção responsável e facilitar o contato via WhatsApp, Instagram e e-mail.

---

## Estrutura dos arquivos

```
patinhasparaadocao/
├── index.html          → Estrutura HTML da página
├── styles.css          → Todos os estilos visuais
├── script.js           → Lógica, dados dos animais e configurações de contato
├── CNAME               → Domínio personalizado para GitHub Pages
├── README.md           → Este arquivo
└── assets/
    ├── logo.png            → Logo da ONG (substituir pela real)
    ├── hero-pets.jpg       → Imagem principal do hero (substituir)
    ├── pet-placeholder-1.jpg  → Foto do Amendoim (substituir)
    ├── pet-placeholder-2.jpg  → Foto da Pipoca (substituir)
    ├── pet-placeholder-3.jpg  → Foto da Mel (substituir)
    ├── pet-placeholder-4.jpg  → Foto do Biscoito (substituir)
    ├── pet-placeholder-5.jpg  → Foto do Caju (substituir)
    └── pet-placeholder-6.jpg  → Foto da Farofa (substituir)
```

---

## Como editar os animais disponíveis

Abra o arquivo `script.js` e localize a variável `animais` (início do arquivo).

Cada animal é um bloco como este:

```js
{
  nome: 'Amendoim',
  especie: 'cão',       // 'cão' ou 'gato'
  sexo: 'Macho',        // 'Macho' ou 'Fêmea'
  idade: '1 ano',
  porte: 'Médio',       // 'Pequeno', 'Médio' ou 'Grande'
  personalidade: 'Brincalhão, curioso e muito carinhoso.',
  imagem: 'assets/pet-placeholder-1.jpg',  // caminho da foto
  status: 'Disponível para adoção',
},
```

Para **adicionar** um novo animal, copie um bloco inteiro (incluindo as chaves `{ }` e a vírgula final) e cole ao final da lista, dentro dos colchetes `[ ]`.

Para **remover** um animal, apague o bloco correspondente.

---

## Como trocar WhatsApp, Instagram e e-mail

Abra `script.js` e edite as constantes no início do arquivo:

```js
const WHATSAPP = "5531986149886"; // só números, com código do país
const INSTAGRAM = "https://instagram.com/patinhas_para_adocao";
const EMAIL = "patinhasparaadocao1@gmail.com";
```

---

## Como trocar as imagens

1. Prepare a imagem no formato JPG ou PNG, preferencialmente com proporção 4:3.
2. Coloque o arquivo dentro da pasta `assets/`.
3. No array `animais` do `script.js`, atualize o campo `imagem` com o novo nome do arquivo:
   ```js
   imagem: 'assets/nome-do-arquivo.jpg',
   ```
4. Para a imagem do hero, substitua o arquivo `assets/hero-pets.jpg` mantendo o mesmo nome.
5. Para a logo, substitua o arquivo `assets/logo.png` mantendo o mesmo nome.

---

## Como publicar no GitHub Pages

### Pré-requisitos

- Ter uma conta no [GitHub](https://github.com)
- Ter o Git instalado no computador (opcional — pode fazer pelo site do GitHub)

### Passos

1. Acesse [github.com](https://github.com) e crie um novo repositório público.
   - Sugestão de nome: `patinhasparaadocao`

2. Envie todos os arquivos do projeto para o repositório.
   - Pelo terminal:
     ```bash
     git init
     git add .
     git commit -m "Publicação inicial do site"
     git remote add origin https://github.com/SEU_USUARIO/patinhasparaadocao.git
     git push -u origin main
     ```
   - Ou arraste os arquivos pela interface web do GitHub.

3. No repositório, acesse **Settings** (Configurações).

4. No menu lateral, clique em **Pages**.

5. Em **Build and deployment**, selecione:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`

6. Clique em **Save**.

7. Em **Custom domain**, digite: `patinhasparaadocao.org` e clique em **Save**.

8. Aguarde a validação do domínio (pode levar alguns minutos após configurar o DNS).

9. Após a validação, marque a opção **Enforce HTTPS**.

> O site ficará disponível em `https://patinhasparaadocao.org` após a propagação do DNS.

---

## Configuração do domínio no GoDaddy

Acesse o painel do GoDaddy, vá em **DNS** para o domínio `patinhasparaadocao.org` e adicione os seguintes registros:

### Registros tipo A (IPv4 do GitHub Pages)

| Tipo | Host | Valor           | TTL |
| ---- | ---- | --------------- | --- |
| A    | @    | 185.199.108.153 | 1h  |
| A    | @    | 185.199.109.153 | 1h  |
| A    | @    | 185.199.110.153 | 1h  |
| A    | @    | 185.199.111.153 | 1h  |

### Registro tipo CNAME (para www)

| Tipo  | Host | Valor                        | TTL |
| ----- | ---- | ---------------------------- | --- |
| CNAME | www  | SEU_USUARIO_GITHUB.github.io | 1h  |

> Substitua `SEU_USUARIO_GITHUB` pelo seu nome de usuário no GitHub.

### Observações importantes sobre o DNS

- **Não altere** registros MX, TXT, SPF, DKIM ou qualquer outro registro relacionado a e-mail.
- A propagação do DNS pode levar de alguns minutos até 48 horas.
- Somente após a propagação o GitHub conseguirá validar o domínio.
- Após validado, ative **Enforce HTTPS** nas configurações do GitHub Pages.

---

## Ativar HTTPS no GitHub Pages

1. Após configurar o DNS e aguardar a propagação, acesse **Settings > Pages** no GitHub.
2. Confirme que o domínio `patinhasparaadocao.org` aparece como verificado (sem alertas de erro).
3. Marque a caixa **Enforce HTTPS**.
4. O certificado SSL é emitido automaticamente pelo GitHub via Let's Encrypt (gratuito).

---

## Requisitos técnicos

- HTML5, CSS3 e JavaScript puro
- Sem frameworks, sem backend, sem banco de dados
- Funciona abrindo o `index.html` diretamente no navegador
- Pronto para GitHub Pages

---

Feito com carinho para ajudar mais patinhas a encontrarem um lar. 🐾
