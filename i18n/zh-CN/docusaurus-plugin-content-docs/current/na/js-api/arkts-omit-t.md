# Omit

```TypeScript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

Construct a type with the properties of T except for those in type K.

**属性类型：** Pick<T, Exclude<keyof T, K>>

