# stopScan

## Modules to Import

```TypeScript
import { scan } from '@kit.ConnectivityKit';
```

<a id="stopscan"></a>
## stopScan

```TypeScript
function stopScan(): Promise<void>
```

Stops scanning.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-scan-function stopScan(): Promise<void>--><!--Device-scan-function stopScan(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | @throws { BusinessError } 201 - Permission denied. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

