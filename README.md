Node Typescript
===============

Rename .js to .ts
```bash
find src -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.ts"' {} \;
```

Docker Postgress
```bash
docker run --name postgres-node -e POSTGRES_PASSWORD=123 POSTGRES_DB=node POSTGRES_USER=node
```