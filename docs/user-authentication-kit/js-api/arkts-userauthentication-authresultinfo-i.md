---
last_update:
  date: 2026-07-04
---

# AuthResultInfo

Represents the authentication result.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** [UserAuthResult](arkts-userauthentication-userauthresult-i.md#userauthresult)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## lockoutDuration

```TypeScript
lockoutDuration?: number
```

The lockout duration if the authentication executor is locked. The unit is ms.

**Type:** number

**Since:** 9

**Deprecated since:** 11

**Substitutes:** lockoutDuration

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## remainAttempts

```TypeScript
remainAttempts?: number
```

Number of remaining authentication attempts.

**Type:** number

**Since:** 9

**Deprecated since:** 11

**Substitutes:** remainingAuthAttempts

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## result

```TypeScript
result: number
```

Authentication result.

**Type:** number

**Since:** 9

**Deprecated since:** 11

**Substitutes:** result

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## token

```TypeScript
token?: Uint8Array
```

Token that has passed the user identity authentication.

**Type:** Uint8Array

**Since:** 9

**Deprecated since:** 11

**Substitutes:** token

**System capability:** SystemCapability.UserIAM.UserAuth.Core

