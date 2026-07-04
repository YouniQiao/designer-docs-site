---
last_update:
  date: 2026-07-04
---

# PromiseConstructorLike

```TypeScript
declare type PromiseConstructorLike = new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>
```

**Property type:** new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>

