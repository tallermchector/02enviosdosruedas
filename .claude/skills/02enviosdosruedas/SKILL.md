```markdown
# 02enviosdosruedas Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `02enviosdosruedas` TypeScript codebase. You'll learn how to structure files, write imports and exports, follow commit message conventions, and write and run tests. This guide is ideal for onboarding new contributors or maintaining consistency in collaborative projects.

## Coding Conventions

### File Naming
- Use **PascalCase** for file names.
  - **Example:** `OrderService.ts`, `UserController.ts`

### Import Style
- Use **absolute imports** instead of relative paths.
  - **Example:**
    ```typescript
    import OrderService from 'services/OrderService';
    ```

### Export Style
- Use **default exports** for modules.
  - **Example:**
    ```typescript
    const OrderService = { /* ... */ };
    export default OrderService;
    ```

### Commit Messages
- Use **conventional commits** with the `feat` prefix for new features.
  - **Example:**
    ```
    feat: add order tracking functionality to OrderService
    ```

## Workflows

### Feature Development
**Trigger:** When adding a new feature to the codebase  
**Command:** `/feature-development`

1. Create a new file using PascalCase (e.g., `NewFeature.ts`).
2. Write your code using absolute imports and default exports.
3. Add or update corresponding test files (`NewFeature.test.ts`).
4. Commit your changes using the conventional commit format:
    ```
    feat: short description of the feature
    ```
5. Push your branch and open a pull request.

### Testing
**Trigger:** When verifying code correctness  
**Command:** `/run-tests`

1. Ensure your test files follow the `*.test.*` naming pattern (e.g., `OrderService.test.ts`).
2. Run the test suite using your project's test runner (framework is unspecified; check project documentation or package.json).
3. Review test results and fix any failing tests before merging.

## Testing Patterns

- Test files are named using the `*.test.*` pattern (e.g., `OrderService.test.ts`).
- The testing framework is not specified; refer to project documentation or scripts for details.
- Place test files alongside or near the code they test for clarity.

**Example Test File:**
```typescript
// OrderService.test.ts
import OrderService from 'services/OrderService';

describe('OrderService', () => {
  it('should create a new order', () => {
    // test implementation
  });
});
```

## Commands
| Command             | Purpose                                         |
|---------------------|-------------------------------------------------|
| /feature-development| Start a new feature with proper conventions     |
| /run-tests          | Run the test suite for the project              |
```
