# stopAdvertising

## Modules to Import

```TypeScript
import { advertising } from '@kit.ConnectivityKit';
```

<a id="stopadvertising"></a>
## stopAdvertising

```TypeScript
function stopAdvertising(advertisingId: number): Promise<void>
```

Stops advertising with advertising ID.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-advertising-function stopAdvertising(advertisingId: int): Promise<void>--><!--Device-advertising-function stopAdvertising(advertisingId: int): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| advertisingId | number | Yes | Indicates the ID for this advertising<br>The value must be an integer greater than or equal to 0, The value is the current advertising ID. |

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
| 36100040 | Invalid advertising ID. |
| 36100099 | Operation failed. |

