# Readonly

```TypeScript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
```

Make all properties in T readonly

**属性类型：** {
    readonly [P in keyof T]: T[P];
}

