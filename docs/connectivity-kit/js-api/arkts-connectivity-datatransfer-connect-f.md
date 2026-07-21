# connect

## Modules to Import

```TypeScript
import { dataTransfer } from '@kit.ConnectivityKit';
```

<a id="connect"></a>
## connect

```TypeScript
function connect(params: ConnectionParams): Promise<void>
```

Connects to a server. If the connection is successful, data can be sent to the server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-dataTransfer-function connect(params: ConnectionParams): Promise<void>--><!--Device-dataTransfer-function connect(params: ConnectionParams): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [ConnectionParams](arkts-connectivity-datatransfer-connectionparams-i.md) | Yes | Indicates the connection params. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100041 | Invalid address. |
| 36100043 | Invalid UUID. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

