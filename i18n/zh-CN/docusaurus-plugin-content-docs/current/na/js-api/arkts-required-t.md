# Required

```TypeScript
type Required<T> = {
    [P in keyof T]-?: T[P];
}
```

Make all properties in T required

**属性类型：** {
    [P in keyof T]-?: T[P];
}

