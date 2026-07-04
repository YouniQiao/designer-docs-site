# ReuseUnlockResult

Represents information about the authentication result reuse. > **NOTE** > If the credential changes within the reuse duration after a successful identity authentication (including device > unlock authentication), the authentication result can still be reused and the actual **EnrolledState** is > returned in the authentication result. If the credential used for the previous authentication has been deleted > when the authentication result is used: - If the deleted credential is face or fingerprint, the authentication result can still be reused, but **credentialCount** and **credentialDigest** in the **EnrolledState** returned are both **0**. - If the deleted credential is a lock screen password, the reuse will fail.

**Since:** 12

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## reuseDuration

```TypeScript
reuseDuration: number
```

Reuse duration of the authentication result, in milliseconds. The value must be greater than 0 and the maximum value is [MAX_ALLOWABLE_REUSE_DURATION](arkts-userauthentication-userauth-con.md#max_allowable_reuse_duration).

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## reuseMode

```TypeScript
reuseMode: ReuseMode
```

Authentication result reuse mode.

**Type:** ReuseMode

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

