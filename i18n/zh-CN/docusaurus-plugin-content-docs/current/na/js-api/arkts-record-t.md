# Record

```TypeScript
type Record<K extends keyof any, T> = {
    [P in K]: T;
}
```

Construct a type with a set of properties K of type T

**属性类型：** {
    [P in K]: T;
}

