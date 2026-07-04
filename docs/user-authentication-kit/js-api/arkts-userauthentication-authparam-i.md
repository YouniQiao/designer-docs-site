---
last_update:
  date: 2026-07-04
---

# AuthParam

Represents the user authentication parameters.

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## authTrustLevel

```TypeScript
authTrustLevel: AuthTrustLevel
```

Authentication trust level. For details, see [Principles for Classifying Biometric Authentication Trust Levels](../../../../security/UserAuthenticationKit/user-authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels) . This API can be used in atomic services since API version 12.

**Type:** AuthTrustLevel

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## authType

```TypeScript
authType: UserAuthType[]
```

Authentication type list, which specifies the types of authentication provided on the user authentication page. This API can be used in atomic services since API version 12.

**Type:** UserAuthType[]

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## challenge

```TypeScript
challenge: Uint8Array
```

Random challenge value, which can be used to prevent replay attacks. It cannot exceed 32 bytes and can be passed in **Uint8Array([])** format. This API can be used in atomic services since API version 12.

**Type:** Uint8Array

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## reuseUnlockResult

```TypeScript
reuseUnlockResult?: ReuseUnlockResult
```

Information about the authentication result reuse. By default, the result cannot be reused. This API can be used in atomic services since API version 12.

**Type:** ReuseUnlockResult

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## skipLockedBiometricAuth

```TypeScript
skipLockedBiometricAuth?: boolean
```

Whether to skip the authentication mode that has been locked and automatically switch to another authentication mode. If no authentication mode can be switched to, the component is disabled and an authentication freezing error code is returned. **true**: When biometric authentication is frozen, the system skips the countdown page and directly switches to another authentication mode. **false** (default): The countdown page is not skipped. This API can be used in atomic services since API version 20.

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

