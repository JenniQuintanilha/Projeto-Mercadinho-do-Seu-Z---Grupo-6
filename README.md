# 🛒 Mercadinho do Seu Zé

Sistema de gerenciamento de produtos para pequenos mercados, desenvolvido com Node.js e JavaScript vanilla.

## 📋 Sobre o Projeto

O **Mercadinho do Seu Zé** é uma aplicação web simples e intuitiva que permite gerenciar produtos de um pequeno mercado. O sistema oferece funcionalidades básicas de CRUD (Create, Read, Delete) com uma interface amigável e responsiva.

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Sequelize** - ORM para banco de dados
- **MySQL/PostgreSQL** - Banco de dados
- **dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Interatividade e comunicação com API
- **Fetch API** - Requisições HTTP

## 🎨 Identidade Visual

- **Cores Principais:** Tons de verde (#4CAF50, #45a049, #27ae60)
- **Tipografia:** Arial, sans-serif
- **Design:** Limpo, moderno e responsivo
- **Conceito:** Natureza, frescor e confiança

## ⚙️ Funcionalidades

- ✅ **Visualizar Produtos** - Lista todos os produtos em cards organizados
- ✅ **Adicionar Produto** - Formulário para cadastrar novos produtos
- ✅ **Excluir Produto** - Remoção de produtos com confirmação
- ✅ **Informações Detalhadas** - Nome, preço, descrição e estoque
- ✅ **Design Responsivo** - Funciona em desktop e mobile
- ✅ **Fallback Offline** - Funciona mesmo sem conexão com API

## 🏗️ Arquitetura

```
Frontend (HTML/CSS/JS) 
    ↕️ HTTP/REST API
Backend (Node.js/Express) 
    ↕️ ORM (Sequelize)
Database (MySQL/PostgreSQL)
```

## 📁 Estrutura do Projeto

```
mercadinho-do-seu-ze/
├── backend/
│   ├── src/
│   │   ├── config/          # Configurações
│   │   ├── controllers/     # Lógica de negócio
│   │   ├── database/        # Models, migrations, seeders
│   │   ├── routes/          # Definição de rotas
│   │   ├── app.js          # Configuração Express
│   │   └── server.js       # Servidor principal
│   ├── .env                # Variáveis de ambiente
│   └── package.json        # Dependências
└── frontend/
    ├── index.html          # Página principal
    ├── styles.css          # Estilos
    └── script.js           # Lógica JavaScript
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v14+)
- MySQL ou PostgreSQL
- npm ou yarn

### Backend
```bash
cd backend
npm install
cp .env.example .env  # Configure as variáveis
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm run dev
```

### Frontend
```bash
cd frontend
# Abrir index.html em um servidor local
# Recomendado: usar Live Server no VS Code
```

## 🔗 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/produtos` | Listar todos os produtos |
| POST | `/api/produtos` | Criar novo produto |
| GET | `/api/produtos/:id` | Buscar produto por ID |
| DELETE | `/api/produtos/:id` | Excluir produto |

## 📊 Melhorias Futuras

- [ ] Funcionalidade de edição de produtos
- [ ] Sistema de autenticação
- [ ] Paginação para muitos produtos
- [ ] Filtros e busca
- [ ] Upload de imagens dos produtos
- [ ] Relatórios de estoque
- [ ] Histórico de movimentações

## 📄 Documentação

Para documentação completa, consulte o arquivo `DOCUMENTACAO_MERCADINHO_DO_SEU_ZE.html` que pode ser convertido para PDF.

## 📝 Licença

Este projeto está sob a licença JJL.

---

**Desenvolvido com ❤️ para pequenos comerciantes**