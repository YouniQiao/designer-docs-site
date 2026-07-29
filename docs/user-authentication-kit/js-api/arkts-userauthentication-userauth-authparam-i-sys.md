# AuthParam

Defines the user authentication parameters. This API is used to configure user authentication parameters, including the challenge value, authentication type list, authentication trust level, and authentication result reuse configuration. By properly configuring these parameters, you can meet authentication requirements in different service scenarios.

**Since:** 10

<!--Device-userAuth-interface AuthParam--><!--Device-userAuth-interface AuthParam-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## credentialIdList

```TypeScript
credentialIdList?: Uint8Array[]
```

List of credential IDs. If the credential ID list is not empty, the specified credential IDs are authenticated,instead of all credentials of the user. This is applicable to scenarios where precise control over authentication credentials is required.

**Type:** Uint8Array[]

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AuthParam-credentialIdList?: Uint8Array[]--><!--Device-AuthParam-credentialIdList?: Uint8Array[]-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## userId

```TypeScript
userId?: number
```

Target user ID to be authenticated. The value is a non-negative integer, which specifies the user to be authenticated. The default value is the ID of the current user.

**Type:** number

**Default:** The ID of the current user. The value is a positive integer greater than or equal to 0.

**Since:** 18

<!--Device-AuthParam-userId?: int--><!--Device-AuthParam-userId?: int-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

