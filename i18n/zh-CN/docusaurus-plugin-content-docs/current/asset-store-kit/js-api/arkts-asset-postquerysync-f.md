# postQuerySync

## postQuerySync

```TypeScript
function postQuerySync(handle: AssetMap): void
```

查询的后置处理，用于需要用户认证的关键资产。需与[asset.preQuerySync]asset.preQuerySync函数成对出现。使用同步方式返回结果。

**起始版本：** 12

**原子化服务API：** 从API version 14开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Asset

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | AssetMap | 是 | 待处理的查询句柄，包含[asset.preQuerySync]asset.preQuerySync执行成功返回的挑战值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 24000001 | The ASSET service is unavailable. |
| 24000006 | Insufficient memory. |
| 24000010 | IPC failed. |
| 24000011 | Calling the Bundle Manager service failed. |
| 24000012 | Calling the OS Account service failed. |
| 24000013 | Calling the Access Token service failed. |

**示例：**

```TypeScript
import { asset } from '@kit.AssetStoreKit';

let handle: asset.AssetMap = new Map();
// 此处传入的new Uint8Array(32)仅作为示例，实际应传入asset.preQuerySync执行成功返回的挑战值。
handle.set(asset.Tag.AUTH_CHALLENGE, new Uint8Array(32));
asset.postQuerySync(handle)

```

