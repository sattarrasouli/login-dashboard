# Auth Dashboard App

A Next.js authentication application with TypeScript and SCSS modules featuring a responsive design and secure authentication flow.

## Features

- Iranian phone number validation (11 digits starting with "09")
- Random user data fetching from randomuser.me API
- Context-based authentication state management
- Local storage persistence
- Responsive design with SCSS modules
- Reusable UI components with TypeScript
- Schema-based form validation with Zod

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules with nesting
- **Validation**: Zod
- **State Management**: React Context API
- **Storage**: Local Storage

## Project Structure

```
├── app/
│   ├── auth/
│   │   ├── page.tsx
│   │   └── auth.module.scss
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── dashboard.module.scss
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.scss
├── components/
│   └── ui/
│       ├── Button/
│       │   ├── Button.tsx
│       │   └── Button.module.scss
│       └── Input/
│           ├── Input.tsx
│           └── Input.module.scss
├── contexts/
│   └── AuthContext.tsx
├── lib/
│   └── validationSchema.ts
├── types/
│   └── user.ts
├── package.json
├── tsconfig.json
└── next.config.js
```

## Routes

- `/` - Root route (redirects to auth or dashboard)
- `/auth` - Login page with phone number validation
- `/dashboard` - Protected dashboard with user information

## Components

### Reusable UI Components

- **Input**: Form input with label, validation, and error states
- **Button**: Customizable button with loading states and variants

### Authentication Context

Manages user authentication state across the application with localStorage persistence.

## Installation & Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
npm start
```

## Validation

The app uses Zod for schema-based validation:

- Phone numbers must be exactly 11 digits
- Must start with "09" (Iranian mobile format)
- Real-time validation feedback

## Authentication Flow

1. User enters Iranian phone number on `/auth`
2. Form validates input against schema
3. On successful validation, app fetches random user from API
4. User data stored in localStorage and Context
5. User redirected to `/dashboard`
6. Dashboard displays user information and welcome message

## Responsive Design

- Mobile-first approach with SCSS breakpoints
- Flexible layouts that adapt to different screen sizes
- Touch-friendly interface elements
