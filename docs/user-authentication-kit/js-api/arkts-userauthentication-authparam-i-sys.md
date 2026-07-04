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

## credentialIdList

```TypeScript
credentialIdList?: Uint8Array[]
```

List of credential IDs. If the credential ID list is not empty, the specified credential ID is authenticated. This is a system API. This API can be used only in the stage model.

**Type:** Uint8Array[]

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## userId

```TypeScript
userId?: number
```

ID of the user to be authenticated. The value is a positive integer greater than or equal to 0. The default value is the ID of the current user. This is a system API.

**Type:** number

**Default:** The ID of the current user. The value is a positive integer greater than or equal to 0.

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

