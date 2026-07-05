# Partial

```TypeScript
type Partial<T> = {
    [P in keyof T]?: T[P];
}
```

Make all properties in T optional

**属性类型：** {
    [P in keyof T]?: T[P];
}

