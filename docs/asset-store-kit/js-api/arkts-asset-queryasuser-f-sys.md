# queryAsUser

## queryAsUser

```TypeScript
function queryAsUser(userId: number, query: AssetMap): Promise<Array<AssetMap>>
```

在指定用户空间中查询一条或多条符合条件的关键资产。若查询需要用户认证的关键资产，则需要在本函数前调用[asset.preQueryAsUser]asset.preQueryAsUser接口，在本函数后调用 [asset.postQueryAsUser]asset.postQueryAsUser接口，开发步骤请参考 [开发指导](docroot://security/AssetStoreKit/asset-js-query-auth.md)。使用Promise异步回调。

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
| Promise&lt;Array&lt;AssetMap>> | Promise对象，返回查询结果列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The caller doesn't have the permission. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types.  2. Parameter verification failed. |
| 24000001 | The ASSET service is unavailable. |
| 24000002 | The asset is not found. |
| 24000004 | Access denied. |
| 24000005 | The screen lock status does not match. |
| 24000006 | Insufficient memory. |
| 24000007 | The asset is corrupted. |
| 24000008 | The database operation failed. |
| 24000009 | The cryptography operation failed. |
| 24000010 | IPC failed. |
| 24000011 | Calling the Bundle Manager service failed. |
| 24000012 | Calling the OS Account service failed. |
| 24000013 | Calling the Access Token service failed. |
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
asset.queryAsUser(userId, query).then((res: Array<asset.AssetMap>) => {
  for (let i = 0; i < res.length; i++) {
    // Parse the attributes.
    let accessibility: number = res[i].get(asset.Tag.ACCESSIBILITY) as number;
    console.info(`Succeeded in getting accessibility, which is: ${accessibility}.`);
  }
  console.info(`Succeeded in querying Asset from user space.`);
});

```

