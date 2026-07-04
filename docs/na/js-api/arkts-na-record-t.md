# Record

```TypeScript
type Record<K extends keyof any, T> = {
    [P in K]: T;
}
```

Construct a type with a set of properties K of type T

**Property type:** {
    [P in K]: T;
}

