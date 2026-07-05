# AuthResult

Represents the authentication result object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [AuthResultInfo](arkts-userauthentication-authresultinfo-i.md#authresultinfo)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## freezingTime

```TypeScript
freezingTime?: number
```

Time for which the authentication operation is frozen. The unit is milliseconds.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** lockoutDuration

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## remainTimes

```TypeScript
remainTimes?: number
```

Number of remaining authentication operations.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** remainAttempts

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## token

```TypeScript
token?: Uint8Array
```

Authentication token information.

**Type:** Uint8Array

**Since:** 8

**Deprecated since:** 9

**Substitutes:** token

**System capability:** SystemCapability.UserIAM.UserAuth.Core

