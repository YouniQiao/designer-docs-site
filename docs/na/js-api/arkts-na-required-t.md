---
last_update:
  date: 2026-07-04
---

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

