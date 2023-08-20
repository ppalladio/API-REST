# API-REST
MongoDB+Express

<h1>
initial settings and package installation
</h1>
```bash
npm init -y
npm i -d ts-node
npm i -d typescript
... nodemon
npm i cors express ...
npm i @types/cors @types/express ... // types
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
