# Snaps UI ⚡

## A collection of prebuilt, customizable Chakra UI components for faster development

> **Snaps UI — production-ready Chakra UI components that snap into your project with speed, accessibility, and delightful developer experience.**

Snaps UI builds on top of [Chakra UI](https://chakra-ui.com/) to give you a growing set of **prebuilt, customizable components**.  
Think of it as your **design system starter kit** — all the flexibility of Chakra with batteries included.

---

## 🚀 Features

- ⚡ **Snappy Developer Experience** – copy-paste ready, works out of the box.
- 🎨 **Fully Customizable** – powered by Chakra’s theme system & design tokens.
- ♿ **Accessible by Default** – inherits Chakra’s strong a11y foundation.
- 🧩 **Composable** – extend or override styles without losing flexibility.
- 🪶 **Lightweight** – built on Chakra, tree-shakeable, no extra runtime.

---

## 📦 Installation

First install Chakra UI (peer dependency):

```bash
npm install @chakra-ui/react @emotion/react
```

Then install Snaps UI:

```bash
# with npm
npm install @snaps-ui/react

# with yarn
yarn add @snaps-ui/react

# with pnpm
pnpm add @snaps-ui/react
```

🛠️ Usage

Wrap your app in Snap's provider, then start using Snaps UI components:

```tsx
'use client'

import { SnapsProvider } from '@snaps-ui/react/provider'
import { Button } from '@snaps-ui/react/button'

export default function App() {
  return (
    <SnapsProvider>
      <Button variant="solid" size="lg">
        Get Started
      </Button>
    </SnapsProvider>
  )
}
```

## 📖 Documentation

Docs are coming soon!
For now, check out our Storybook (coming soon) for interactive component previews.

## 🤝 Contributing

We love contributions!

Fork the repo

Create a feature branch

Submit a pull request

Check out our upcoming CONTRIBUTING.md for details.

## 📣 Stay Connected

[💻 Website](https://snaps-ui.vercel.app/)

🐦 Twitter (coming soon)

💬 Community Discord (coming soon)

## 📜 License

MIT © [Justice Chimobi](LICENSE)
