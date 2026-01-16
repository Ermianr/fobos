# Fobos Project Standards

This project uses **Ultracite** (Oxlint + Oxfmt) for automated formatting and linting, enforcing strict code quality standards.

## Quick Reference

- **Format & fix**: `bun x ultracite fix`
- **Check issues**: `bun x ultracite check`
- **Type check**: `bun run check-types`
- **Diagnose setup**: `bun x ultracite doctor`

## Build & Development Commands

- `bun run dev` - Start all applications (web + backend)
- `bun run dev:web` - Start only Next.js web app (port 3001)
- `bun run dev:server` - Start only Convex backend
- `bun run dev:setup` - Configure Convex project (first-time setup)
- `bun run build` - Build all applications
- `bun run check-types` - Type check across all packages

**Note**: No test framework is currently configured. Add test scripts to package.json when implementing tests.

---

## Code Style

### Formatting (Oxfmt)

- 80 character line width
- 2 spaces for indentation
- Double quotes
- Semicolons required
- Trailing commas in ES5 style
- Arrow parens always

### Imports

- Sorted alphabetically (case-insensitive)
- Group external, internal, and relative imports
- Use `@/` path aliases for internal imports (e.g., `@/lib/utils`)
- Prefer specific imports: `import { Button } from "@/components/ui/button"`

### TypeScript

- Strict mode with `strictNullChecks`
- Explicit types for function parameters and return values when clarity needed
- Prefer `unknown` over `any`
- Use const assertions (`as const`) for immutable literals
- Leverage type narrowing instead of type assertions

### React/Next.js

- Function components only
- Use `"use client"` at top of client components
- Server Components for async data fetching
- App Router with async layouts
- Specify all hook dependencies correctly
- Use `key` prop with unique IDs in iterables
- Children between tags, not as props

### Naming Conventions

- Components: PascalCase (`Button`, `LoginForm`)
- Functions: camelCase (`getUser`, `handleSubmit`)
- Constants: UPPER_SNAKE_CASE (`MAX_RETRIES`)
- Types/Interfaces: PascalCase (`User`, `AuthContext`)
- Private members: prefix with underscore (`_internal`)

### Error Handling

- Throw `Error` objects with descriptive messages
- Use `try-catch` for async operations
- Handle errors appropriately (toast, logging, etc.)
- Early returns for error cases
- Remove `console.log` from production code

### Component Patterns

- shadcn/ui components in `src/components/ui/`
- Feature components in `src/features/{feature}/`
- Server components for data fetching, client for interactivity
- Use `cn()` utility for conditional classes

### Convex/Backend

- Queries, mutations, and actions in `packages/backend/convex/`
- Use `authComponent` for authentication
- Server functions in `packages/backend/convex/_generated/` are auto-generated

---

## Conventional Commits

Format: `type(scope): subject`

- Subject: 72 chars max, imperative mood, no period
- Scope: optional (e.g., `web`, `backend`, `auth`)
- Types: `feat`, `fix`, `refactor`, `chore`, `style`, `docs`, `test`, `build`, `perf`, `ci`, `revert`

## Pre-commit Hooks

Husky runs `bun x ultracite fix` automatically before committing. Cursor also formats after file edits.

## Key Principles

- Clarity over brevity
- Meaningful variable and function names
- Extract constants for magic numbers
- Keep functions focused and small
- Early returns to reduce nesting
- Prefer simple conditionals over nested ternaries

## Post-Task Verification

**After completing any feature or task, always run:**

```bash
bun x ultracite fix
```

This ensures code quality and formatting compliance before committing.

---

## Skills Reference

Use skills when working on related tasks. Available skills:

| Skill                         | Description                                                        | Documentation                                           |
| ----------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------- |
| `shadcn`                      | Component registry usage, examples, and integration guidance       | [SKILL.md](skills/shadcn/SKILL.md)                      |
| `convex`                      | Convex backend best practices, database schema, queries, mutations | [SKILL.md](skills/convex/SKILL.md)                      |
| `vercel-react-best-practices` | React and Next.js best practices and patterns                      | [SKILL.md](skills/vercel-react-best-practices/SKILL.md) |
| `web-design-guidelines`       | Design system and UI/UX guidelines                                 | [SKILL.md](skills/web-design-guidelines/SKILL.md)       |
| `skill-creator`               | Guide for creating new skills or updating existing ones            | [SKILL.md](skills/skill-creator/SKILL.md)               |

**Always report which skills were used after completing tasks.**
