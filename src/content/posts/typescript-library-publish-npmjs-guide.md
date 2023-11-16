---
title: "Building and Publishing a TypeScript Library on npmjs: A Step-by-Step Guide"
publishedAt: 2023-11-16
description: "Learn how to streamline your development workflow by creating and publishing a TypeScript library on npmjs. Follow our comprehensive guide to efficiently build, share, and integrate your code, promoting collaboration and code reuse within the developer community."
slug: "typescript-library-publish-npmjs-guide"
isPublish: true
---

## Creating and Publishing a TypeScript Library on npmjs

Often, there is a need to develop a library to avoid code redundancy and contribute to the wider community. In this guide, we will use TypeScript as our primary language for creating a library and publishing it on npmjs.

### Project Setup

To begin, create a project folder and initialize the package.json file using the following commands:

```bash
mkdir my-library
cd my-library
pnpm init
```

In the package.json file, include the following configuration:

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "author": "Nahuel Gómez",
  "description": "Description of my library",
  "keywords": ["my-library"],
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["/dist"],
  "scripts": {
    "build": "tsc"
  },
  "license": "ISC",
  "dependencies": {
    "typescript": "^5.2.2"
  }
}
```

### Dependency Installation

Install the required dependencies, such as TypeScript:

- [typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application-scale JavaScript.

```bash
pnpm install -D typescript
```

### TypeScript Configuration

Create a tsconfig.json file with the following command:

```bash
tsc --init
```

Modify the tsconfig.json file as follows:

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "./dist",
    "noImplicitAny": true,
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Project Structure

Create the src folder and the index.ts file:

```bash
mkdir src
touch src/index.ts
```

Inside index.ts, add the following code:

```ts
export const sum = (a: number, b: number): number => {
  return a + b;
};
```

### Building and Publishing

Build the project using:

```bash
pnpm build
```

Publish the project to npm:

```bash
npm publish
```

Follow the instructions provided by the console.

### Using the Library

To use the library in another project, install it with:

```bash
pnpm install my-library
```

In your index.ts or index.js file, utilize the library:

```ts
import { sum } from "my-library";

const result = sum(1, 2);
console.log(result); // 3
```

### Conclusion

Creating and publishing a TypeScript library to npmjs allows for code reuse and community collaboration. By following these steps, you can easily develop, share, and integrate your libraries into various projects, contributing to a more efficient and collaborative coding ecosystem.
