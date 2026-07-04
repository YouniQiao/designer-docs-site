---
last_update:
  date: 2026-07-04
---

# AuthLockState

Enumerates the lockout status of an identity authentication type.

**Since:** 22

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## isLocked

```TypeScript
isLocked: boolean
```

Whether the authentication is locked. **true** means yes; **false** otherwise.

**Type:** boolean

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## lockoutDuration

```TypeScript
lockoutDuration: number
```

Remaining lockout duration, in milliseconds. If the authentication is permanently locked, the value is **PERMANENT_LOCKOUT_DURATION**. You need to unlock it using the PIN.

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## remainingAuthAttempts

```TypeScript
remainingAuthAttempts: number
```

Number of remaining attempts before the authentication is locked. The maximum value is **5**.

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

