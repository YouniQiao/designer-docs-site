# postQueryAsUser

## postQueryAsUser

```TypeScript
function postQueryAsUser(userId:number, handle: AssetMap): Promise<void>
```

在指定用户空间中查询的后置处理，用于需要用户认证的关键资产（与[asset.preQueryAsUser]asset.preQueryAsUser函数成对出现）。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 用户ID。取值范围大于等于100。 |
| handle | AssetMap | Yes | 待处理的查询句柄，当前包含[asset.preQueryAsUser]asset.preQueryAsUser执行成功返回的挑战值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The caller doesn't have the permission. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 24000001 | The ASSET service is unavailable. |
| 24000006 | Insufficient memory. |
| 24000010 | IPC failed. |
| 24000011 | Calling the Bundle Manager service failed. |
| 24000012 | Calling the OS Account service failed. |
| 24000013 | Calling the Access Token service failed. |

**Example**

```TypeScript
import { asset } from '@kit.AssetStoreKit';

let userId: number = 100;
let handle: asset.AssetMap = new Map();
// The new Uint8Array(32) is only an example. Pass in the challenge value returned by asset.preQueryAsUser.
handle.set(asset.Tag.AUTH_CHALLENGE, new Uint8Array(32));
asset.postQueryAsUser(userId, handle).then(() => {
  console.info(`Succeeded in post-querying Asset from user space.`);
});

```

