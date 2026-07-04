---
last_update:
  date: 2026-07-04
---

# Omit

```TypeScript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

Construct a type with the properties of T except for those in type K.

**Property type:** Pick<T, Exclude<keyof T, K>>

