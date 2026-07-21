# destroyPort

## Modules to Import

```TypeScript
import { dataTransfer } from '@kit.ConnectivityKit';
```

<a id="destroyport"></a>
## destroyPort

```TypeScript
function destroyPort(uuid: string): void
```

Destroys a listen port and releases related resources by UUID.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-dataTransfer-function destroyPort(uuid: string): void--><!--Device-dataTransfer-function destroyPort(uuid: string): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | string | Yes | Indicates application service UUID.<br>The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-), for example,FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.<br>NearLink standard UUIDs not allowed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100022 | The UUID is not registered. |
| 36100043 | Invalid UUID. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

