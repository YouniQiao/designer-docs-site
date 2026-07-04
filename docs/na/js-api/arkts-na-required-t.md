# Required

```TypeScript
type Required<T> = {
    [P in keyof T]-?: T[P];
}
```

Make all properties in T required

**Property type:** {
    [P in keyof T]-?: T[P];
}

