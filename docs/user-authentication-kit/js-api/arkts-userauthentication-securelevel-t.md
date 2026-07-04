---
last_update:
  date: 2026-07-04
---

# SecureLevel

```TypeScript
type SecureLevel = 'S1' | 'S2' | 'S3' | 'S4'
```

Enumerates the authentication security levels.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** [AuthTrustLevel](arkts-userauthentication-authtrustlevel-e.md#authtrustlevel)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

| Type | Description |
| --- | --- |
| 'S1' | Authentication trust level 1. The authentication of this level can identify individual usersand provides limited liveness detection capabilities. It is usually used in service risk control and query ofgeneral personal data. |
| 'S2' | Authentication trust level 2. The authentication of this level can accurately identifyindividual users and provides regular liveness detection capabilities. It is usually used in scenarios such asapplication logins and keeping the unlocking state of a device. |
| 'S3' | Authentication trust level 3. The authentication of this level can accurately identifyindividual users and provides strong liveness detection capabilities. It is usually used in scenarios such asunlocking a device. |
| 'S4' | Authentication trust level 4. The authentication of this level can accurately identifyindividual users and provides powerful liveness detection capabilities. It is usually used in scenarios such assmall-amount payment. |

