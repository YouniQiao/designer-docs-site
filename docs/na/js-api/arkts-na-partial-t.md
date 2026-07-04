---
last_update:
  date: 2026-07-04
---

# Partial

```TypeScript
type Partial<T> = {
    [P in keyof T]?: T[P];
}
```

Make all properties in T optional

**Property type:** {
    [P in keyof T]?: T[P];
}

