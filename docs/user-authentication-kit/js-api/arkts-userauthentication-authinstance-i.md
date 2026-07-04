---
last_update:
  date: 2026-07-04
---

# AuthInstance

Implements user authentication.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [UserAuthInstance](arkts-userauthentication-userauthinstance-i.md#userauthinstance)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## cancel

```TypeScript
cancel: () => void
```

Cancels this authentication.

**Type:** () => void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** cancel

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## off

```TypeScript
off: (name: AuthEventKey) => void
```

Unsubscribes from the user authentication events of the specified type. - **name**: indicates the authentication event type. The value **result** means to unsubscribe from the authentication result, and the value **tip** means to unsubscribe from the authentication tip information. For details, see [AuthEventKey](arkts-userauthentication-autheventkey-t.md#autheventkey).

**Type:** (name: AuthEventKey) => void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** off

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## on

```TypeScript
on: (name: AuthEventKey, callback: AuthEvent) => void
```

Subscribes to the user authentication events of the specified type. - **name**: indicates the authentication event type. The value **result** means that the callback returns the authentication result, and the value **tip** means that the callback returns the authentication tip information. For details, see [AuthEventKey](arkts-userauthentication-autheventkey-t.md#autheventkey). - **callback**: callback used to return the authentication result or tip information. For details, see [AuthEvent](arkts-userauthentication-authevent-i.md#authevent).

**Type:** (name: AuthEventKey, callback: AuthEvent) => void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** on

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## start

```TypeScript
start: () => void
```

Starts authentication.

**Type:** () => void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** start

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

**System capability:** SystemCapability.UserIAM.UserAuth.Core

