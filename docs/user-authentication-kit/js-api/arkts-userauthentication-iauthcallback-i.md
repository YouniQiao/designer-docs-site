# IAuthCallback

Provides callbacks to return the authentication result.

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## onResult

```TypeScript
onResult(result: UserAuthResult): void
```

Called to return the authentication result. If the authentication is successful, **UserAuthResult** contains the token information.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | UserAuthResult | Yes | Authentication result. |

