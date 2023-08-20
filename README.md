# API-REST
MongoDB+Express
```bash
npm init -y
npm i -d ts-node
npm i -d typescript
... nodemon
```

tsconfig:
```bash
{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "node",
        "baseUrl": "src",
        "outDir": "dist",
        "sourceMap": true,
        "noImplicitAny": true
    },
    "include": ["src/**/*"]
}

```

nodemon config
```bash
{
	"watch":["src"],
	"ext":"ts,.js",
	"exec":"ts-node src/index.ts"
}
```
