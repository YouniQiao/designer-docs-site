# preQueryAsUser

## preQueryAsUser

```TypeScript
function preQueryAsUser(userId: number, query: AssetMap): Promise<Uint8Array>
```

在指定用户空间中查询的预处理，用于需要用户认证的关键资产。在用户认证成功后，应当随后调用[asset.queryAsUser]asset.queryAsUser和 [asset.postQueryAsUser]asset.postQueryAsUser接口。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 用户ID。取值范围大于等于100。 |
| query | AssetMap | Yes | 关键资产的查询条件，如别名、访问控制属性、自定义数据等。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回挑战值。  说明： 挑战值用于后续用户认证。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The caller doesn't have the permission. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types.  2. Parameter verification failed. |
| 24000001 | The ASSET service is unavailable. |
| 24000002 | The asset is not found. |
| 24000005 | The screen lock status does not match. |
| 24000006 | Insufficient memory. |
| 24000007 | The asset is corrupted. |
| 24000008 | The database operation failed. |
| 24000009 | The cryptography operation failed. |
| 24000010 | IPC failed. |
| 24000011 | Calling the Bundle Manager service failed. |
| 24000012 | Calling the OS Account service failed. |
| 24000013 | Calling the Access Token service failed. |
| 24000016 | The cache exceeds the limit. |
| 24000017 | The capability is not supported. |

**Example**

```TypeScript
import { asset } from '@kit.AssetStoreKit';
import { util } from '@kit.ArkTS';

function stringToArray(str: string): Uint8Array {
  let textEncoder = new util.TextEncoder();
  return textEncoder.encodeInto(str);
}

let userId: number = 100;
let query: asset.AssetMap = new Map();
query.set(asset.Tag.ALIAS, stringToArray('demo_alias'));
asset.preQueryAsUser(userId, query).then((challenge: Uint8Array) => {
  console.info(`Succeeded in pre-querying Asset from user space.`);
});

```

