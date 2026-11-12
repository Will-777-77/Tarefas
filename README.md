<div align="center">

# 📋 Tarefas App

Uma aplicação web moderna e minimalista para gerenciamento de tarefas diárias, desenvolvida com React e Vite.

![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📌 Sobre o Projeto

O **Tarefas App** é um gerenciador de tarefas criado para praticar e aprimorar conceitos fundamentais do React, como:
- Criação e componentização com JSX (`Header`, `Sidebar`, `Tarefas`, `TarefaList`).
- Renderização dinâmica de listas a partir de arrays com `.map()`.
- Estilização modular com CSS moderno, variáveis nativas (`:root`), Flexbox e boas práticas de layout.

---

## ✨ Funcionalidades

- [x] **Navegação Lateral (Sidebar):** Filtros rápidos (*Todas*, *Completas*, *Favoritas*).
- [x] **Listagem Dinâmica:** Exibição de tarefas mapeadas dinamicamente via componentes React.
- [x] **Design Estruturado:** Layout moderno com Flexbox, espaçamentos consistentes e suporte a temas com CSS Variables.
- [ ] *(Em breve)* Adicionar novas tarefas via formulário interativo.
- [ ] *(Em breve)* Marcar tarefas como concluídas ou favoritas.
- [ ] *(Em breve)* Persistência dos dados no `localStorage`.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/):** Biblioteca principal para construção da interface de usuário.
- **[Vite](https://vitejs.dev/):** Ferramenta de build e desenvolvimento ágil.
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS):** Estilos nativos com variáveis e layout flexível.

---

## 📂 Estrutura do Projeto

```bash
src/
├── App/
│   ├── App.css
│   └── App.jsx
├── componentes/
│   ├── Header/
│   │   ├── Header.css
│   │   └── Header.jsx
│   ├── Sidebar/
│   │   ├── Sidebar.css
│   │   └── Sidebar.jsx
│   ├── Tarefas/
│   │   ├── Tarefas.css
│   │   └── Tarefas.jsx
│   └── TarefaList/
│       ├── TarefaList.css
│       └── TarefaList.jsx
├── var.css
└── main.jsx
```

---

## 🚀 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Will-777-77/Tarefas.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd Tarefas
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o link no seu navegador: `http://localhost:5173`

---

## 👨‍💻 Autor

Desenvolvido por **[William Gomes](https://github.com/Will-777-77)**.
