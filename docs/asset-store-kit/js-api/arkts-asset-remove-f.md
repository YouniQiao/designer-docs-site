# remove

## remove

```TypeScript
function remove(query: AssetMap): Promise<void>
```

删除符合条件的一条或多条关键资产。使用Promise异步回调。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | AssetMap | Yes | 待删除关键资产的搜索条件，如别名、访问控制属性、自定义数据等。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types.  2. Parameter verification failed. |
| 24000001 | The ASSET service is unavailable. |
| 24000002 | The asset is not found. |
| 24000006 | Insufficient memory. |
| 24000007 | The asset is corrupted. |
| 24000008 | The database operation failed. |
| 24000010 | IPC failed. |
| 24000011 | Calling the Bundle Manager service failed. |
| 24000012 | Calling the OS Account service failed. |
| 24000013 | Calling the Access Token service failed. |
| 24000015 | Getting the system time failed. |

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
asset.remove(query).then(() => {
  console.info(`Succeeded in removing Asset.`);
});

```

