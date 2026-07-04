---
last_update:
  date: 2026-07-04
---

# AuthTipCallback

```TypeScript
type AuthTipCallback = (authTipInfo: AuthTipInfo) => void
```

Defines the callback to return the intermediate authentication status.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authTipInfo | AuthTipInfo | Yes | Intermediate authentication status. |

