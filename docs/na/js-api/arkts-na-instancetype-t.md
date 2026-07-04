# InstanceType

```TypeScript
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any
```

Obtain the return type of a constructor function type

**Property type:** T extends abstract new (...args: any) => infer R ? R : any

