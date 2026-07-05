# postQuerySync

## postQuerySync

```TypeScript
function postQuerySync(handle: AssetMap): void
```

查询的后置处理，用于需要用户认证的关键资产。需与[asset.preQuerySync]asset.preQuerySync函数成对出现。使用同步方式返回结果。

**Since:** 12

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | AssetMap | Yes | 待处理的查询句柄，包含[asset.preQuerySync]asset.preQuerySync执行成功返回的挑战值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
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

let handle: asset.AssetMap = new Map();
// The new Uint8Array(32) is only an example. Pass in the challenge value returned by asset.preQuerySync.
handle.set(asset.Tag.AUTH_CHALLENGE, new Uint8Array(32));
asset.postQuerySync(handle)

```

