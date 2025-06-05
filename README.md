# Rian – AI-Powered Voiceovers & Translations

A modern, full-stack platform for creating professional-grade voiceovers and translating content into multiple languages using AI. Built with Next.js 15 (App Router), Tailwind CSS, ShadCN UI, and more.

---

## 🛠️ Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI**: [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/), [Heroicons](https://heroicons.com/), [Lucide Icons](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Utilities**: [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

---

## 📁 Directory Structure
```
src/
  app/                # App Router pages & layouts
    api/              # API routes (e.g., send-demo-email)
    company/          # Company info page
    careers/          # Careers & dynamic job pages
    platform/         # Platform overview
    privacy-policy/   # Privacy policy page
    responsible-ai/   # Responsible AI page
    terms-of-use/     # Terms of use page
    ...
  components/         # Reusable UI & feature components
    ui/               # ShadCN-based UI primitives (Button, Form, etc.)
    ...
  lib/                # Utilities (e.g., cn for class merging)
public/               # Static assets
```

---

## ⚡ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## ⚙️ Configuration
- **Next.js**: See `next.config.ts` (includes bundle analyzer support)
- **Tailwind CSS**: See `tailwind.config.js` (dark mode enabled, class strategy)
- **TypeScript**: Strict, modern config in `tsconfig.json`
- **ESLint**: Linting with Next.js and TypeScript best practices

---

## 🧩 Core Components & Utilities
- **UI Primitives**: Located in `src/components/ui/` (Button, Form, Dialog, etc.)
- **Feature Components**: Modular, by feature in `src/components/`
- **Utility Functions**: `src/lib/utils.ts` (e.g., `cn` for class merging)

---

## 🗂️ API Routes
- **POST `/api/send-demo-email`**: Handles demo/quote requests and sends emails via Nodemailer. Requires SMTP environment variables.

---

## 🔑 Environment Variables
Create a `.env.local` file in the root with:
```
SMTP_HOST=your.smtp.host
SMTP_PORT=your_smtp_port
SMTP_SECURE=true|false
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

---

## 📦 Scripts
- `dev` – Start development server
- `build` – Build for production
- `start` – Start production server
- `lint` – Run ESLint

---

## 📚 Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [ShadCN UI Docs](https://ui.shadcn.com/docs)