# ThisParameterType

```TypeScript
type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown
```

Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.

**Property type:** T extends (this: infer U, ...args: never) => any ? U : unknown

