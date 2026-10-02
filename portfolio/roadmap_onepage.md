# Roadmap - One Page de Portfólio (.NET)

## Objetivo
Criar uma one page profissional para apresentar:
- Quem você é
- Suas habilidades
- Seus programas/projetos
- GitHub
- Contato

Stack sugerida:
- Vite
- TypeScript
- Tailwind CSS
- Firebase Hosting

---

# Cronograma

## Dia 1

### Instalar Node.js
https://nodejs.org

Verificar:

```bash
node -v
npm -v
```

### Criar projeto

```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm install
npm run dev
```

Abrir:

```text
http://localhost:5173
```

---

## Dia 2

### Aprender React

Um componente:

```tsx
function Hero() {
  return <h1>Olá Mundo</h1>
}

export default Hero
```

Conceitos:
- Componentes
- Props
- Estado
- Eventos

---

## Dia 3

### Instalar Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

Exemplo:

```tsx
<h1 className="text-4xl font-bold text-blue-600">
  Meu Portfólio
</h1>
```

Aprender:
- flex
- grid
- margin
- padding
- responsividade

---

## Dia 4

### Estrutura da Página

Hero
Sobre
Skills
Projetos
Contato

Estrutura:

```text
src/
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
```

---

## Dia 5

### Firebase Hosting

Instalar:

```bash
npm install -g firebase-tools
```

Login:

```bash
firebase login
```

Inicializar:

```bash
firebase init hosting
```

Build:

```bash
npm run build
```

Deploy:

```bash
firebase deploy
```

---

# O que aprender primeiro

## TypeScript

Você vem do C#, então será familiar.

Exemplo:

```csharp
public string Nome { get; set; }
```

Equivalente:

```ts
let nome: string = 'João';
```

---

## React

Pense como componentes do Blazor.

Blazor:

```razor
<MeuComponente />
```

React:

```tsx
<MeuComponente />
```

---

## Tailwind

É CSS por classes.

```tsx
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Clique
</button>
```

---

## Vite

É o criador e executor do projeto.

Comandos principais:

```bash
npm run dev
npm run build
```

---

# Ordem de Estudo Recomendada

1. TypeScript
2. React
3. Tailwind
4. Consumo de APIs
5. Firebase Hosting

# Meta Final

Criar uma página moderna mostrando:
- Especialista em C#
- ASP.NET Core
- SQL
- Entity Framework
- APIs REST
- Projetos pessoais
- GitHub
- LinkedIn
