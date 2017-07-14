Node Typescript
===============

Links
-----

[Slides](https://drive.google.com/open?id=1FV7OgdciG0oZapbU6X27n8DwOWuhzTfSzTeWr7kV6So)

-----------------------------------------------------------

### Rename .js to .ts
```bash
find src -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.ts"' {} \;
```

### Docker Postgress
```bash
docker-compose up
```