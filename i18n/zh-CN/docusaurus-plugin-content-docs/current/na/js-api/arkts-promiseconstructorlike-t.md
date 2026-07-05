# PromiseConstructorLike

```TypeScript
declare type PromiseConstructorLike = new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>
```

| 类型 | 说明 |
| --- | --- |
| new &lt;T>(executor: (resolve: (value: T |  |
| PromiseLike&lt;T>) => void, reject: (reason?: any) => void) => void) => PromiseLike&lt;T> |  |

