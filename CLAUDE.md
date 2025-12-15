# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run build          # Compile TypeScript to dist/
npm run start:dev      # Development with hot reload
npm run start:debug    # Debug mode with hot reload
npm run start:prod     # Production (runs dist/main.js)
npm run lint           # ESLint with auto-fix
npm run format         # Prettier formatting
```

## Testing Commands

```bash
npm test               # Run all unit tests
npm run test:watch     # Watch mode
npm run test:cov       # Coverage report
npm run test:e2e       # E2E tests (uses test/jest-e2e.json)

# Run a single test file
npx jest src/coffees/coffees.service.spec.ts

# Run tests matching a pattern
npx jest --testNamePattern="should create"
```

## Architecture

This is a NestJS application following the NestJS Fundamentals course structure. It uses TypeORM with PostgreSQL.

### Module Structure

- **AppModule** - Root module with global ConfigModule (Joi validation) and TypeORM configuration
- **CoffeesModule** - Main feature module demonstrating CRUD operations, custom providers, and factory patterns
- **CoffeeRatingModule** - Dependent module consuming CoffeesService
- **CommonModule** - Global guards, interceptors, and filters
- **DatabaseModule** - Database configuration abstraction

### Key Patterns

**Entities & Relationships**: Coffee entity has ManyToMany with Flavor (cascade enabled). Event entity for tracking domain events.

**Global Providers**:
- `APP_PIPE` with ValidationPipe in AppModule
- `APP_GUARD` with ApiKeyGuard in CommonModule

**Configuration**: Uses `@nestjs/config` with namespace configs (`coffeesConfig`) and Joi validation for required env vars: `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_NAME`.

**Custom Providers**: COFFEE_BRANDS token demonstrates useFactory pattern with Scope.TRANSIENT.

### Required Environment Variables

```
DATABASE_HOST
DATABASE_PORT (default: 5432)
DATABASE_USER
DATABASE_PASSWORD
DATABASE_NAME
API_KEY (for ApiKeyGuard)
```
