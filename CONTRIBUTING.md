# ⚡ Snaps UI

> **Snaps UI — a snappy, accessible React UI library built for speed, simplicity, and delightful developer experience.**

Snaps UI is a modern React component library built **on top of [Chakra UI](https://chakra-ui.com/)**.  
It helps you build beautiful, accessible, and customizable UIs with ease.  
It’s fast, lightweight, and snaps right into your workflow.

## 🌟 Why Snaps UI?

Snaps UI isn’t here to replace Chakra UI — it’s here to supercharge it.
Think of it as a layer of prebuilt, production-ready components on top of Chakra’s amazing foundation.

Instead of reinventing the wheel, Snaps UI gives you:

Opinionated design defaults

Ready-to-use recipes and patterns

A snappy developer experience ✨

## 🧑‍💻 Contributing

First off, thanks for taking the time to contribute 💜
Snaps UI is an open-source design system built with React, Chakra UI, and TypeScript.
We welcome issues, discussions, and pull requests to help make this project better.

## Development Setup

### Prerequisites:

- Node.js >=20.x

- pnpm 10.15.0

- Git

### Clone & Install:

```bash
git clone https://github.com/snaps-ui/snaps-ui.git
cd snaps-ui
pnpm install
```

---

## Available Commands:

```bash
# Run Storybook -- coming soon
pnpm storybook

# Build all packages
pnpm build:packages

# Test
pnpm test
```

## 🚀 Features

- ⚡ **Snappy Developer Experience** – intuitive APIs with great TypeScript support.
- 🎨 **Customizable** – powered by Chakra’s theming system & design tokens.
- ♿ **Accessible by Default** – WAI-ARIA compliant components.
- 🪶 **Lightweight** – tree-shakeable and optimized for performance.
- 🧩 **Composable** – built on Chakra primitives, extendable with your own components.

---

## 📦 Installation

```bash
# with npm
npm install @snaps-ui/react

# with yarn
yarn add @snaps-ui/react

# with pnpm
pnpm add @snaps-ui/react
```

## 🛠 Usage

```tsx
'use client'

import { Button } from '@snaps-ui/react/button'

export default function App() {
  return (
    <Button variant="solid" size="lg">
      Get Started
    </Button>
  )
}
```

## 📖 Documentation

Docs are coming soon!

📚 Full documentation site (planned)

📘 Storybook for interactive component previews (coming soon)

Run Storybook locally:

```bash
pnpm storybook
```

Then visit http://localhost:6006

## Coding Guidelines

TypeScript first → all new code must use TypeScript.

Follow Chakra’s component patterns for consistency.

Commit messages follow Conventional Commits

feat: add new component

fix: resolve button padding issue

docs: update README

chore: update dependencies

## Testing

We use Vitest for unit tests:

```bash
pnpm test
```

## Documentation

All components must include Storybook stories.

Use MDX for extra documentation when necessary.

## Submitting Changes

### Fork & create a feature branch:

```bash
git checkout -b feat/new-component
```

### Add a changeset for versioning:

```bash
pnpm changeset
```

### Commit & push:

```bash
git commit -m "feat: add <YourComponent>"
git push origin feat/new-component
```

## 📣 Stay Connected

🌐 [Website](https://snaps-ui.vercel.app/)

🐦 Twitter (coming soon)

💬 Community Discord (coming soon)

🐙 [GitHub Issues](https://github.com/snaps-ui/snaps-ui/issues)

MIT © [Justice Chimobi](LICENSE)
