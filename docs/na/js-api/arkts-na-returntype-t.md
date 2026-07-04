# ReturnType

```TypeScript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
```

Obtain the return type of a function type

**Property type:** T extends (...args: any) => infer R ? R : any

