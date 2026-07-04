---
last_update:
  date: 2026-07-04
---

# AuthTrustLevel

Enumerates the trust levels of the authentication result. For typical use cases, see [Principles for Classifying Biometric Authentication Trust Levels](../../../../security/UserAuthenticationKit/user-authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels) .

**Since:** 8

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## ATL1

```TypeScript
ATL1 = 10000
```

Authentication trust level 1. The authentication of this level can identify individual users and provides limited liveness detection capabilities. It is applicable to scenarios such as service risk control and access to common personal data.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## ATL2

```TypeScript
ATL2 = 20000
```

Authentication trust level 2. The authentication of this level can accurately identify individual users and provides regular liveness detection capabilities. It is applicable to scenarios such as device unlocking and application login.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## ATL3

```TypeScript
ATL3 = 30000
```

Authentication trust level 3. The authentication of this level can accurately identify individual users and provides strong liveness detection capabilities. It is applicable to scenarios such as device unlocking.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## ATL4

```TypeScript
ATL4 = 40000
```

Authentication trust level 4. The authentication of this level can accurately identify individual users and provides powerful liveness detection capabilities. It is applicable to scenarios such as small-amount payment.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

