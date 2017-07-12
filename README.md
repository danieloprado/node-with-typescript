Node Typescript
===============

Rename .js to .ts
```bash
find src -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.ts"' {} \;
```