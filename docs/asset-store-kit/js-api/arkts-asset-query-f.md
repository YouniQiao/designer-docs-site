# query

## query

```TypeScript
function query(query: AssetMap): Promise<Array<AssetMap>>
```

查询一条或多条符合条件的关键资产。若查询需要用户认证的关键资产，则需要在本函数前调用[asset.preQuery]asset.preQuery接口，在本函数后调用 [asset.postQuery]asset.postQuery接口，开发步骤请参考[开发指导](docroot://security/AssetStoreKit/asset-js-query-auth.md)。使 用Promise异步回调。 如果未查询到符合条件的关键资产，将抛出“未找到关键资产”的异常，而非返回空的查询结果列表。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | AssetMap | Yes | 关键资产的查询条件，如别名、访问控制属性、自定义数据等。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AssetMap>> | Promise对象，返回查询结果列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
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

let query: asset.AssetMap = new Map();
query.set(asset.Tag.ALIAS, stringToArray('demo_alias'));
// If only the asset attributes need to be returned, set RETURN_TYPE to ATTRIBUTES. The attributes do not need to be decrypted, so the query takes a short time.
query.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ALL); // Return all asset information, including the attributes and asset plaintext. The plaintext needs to be decrypted, so the query takes a long time.
asset.query(query).then((res: Array<asset.AssetMap>) => {
  for (let i = 0; i < res.length; i++) {
    // Parse the attributes.
    let accessibility: number = res[i].get(asset.Tag.ACCESSIBILITY) as number;
    console.info(`Succeeded in getting accessibility, which is: ${accessibility}.`);
  }
  console.info(`Succeeded in querying Asset.`);
});

```

