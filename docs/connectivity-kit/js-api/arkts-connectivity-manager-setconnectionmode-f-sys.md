# setConnectionMode (System API)

## Modules to Import

```TypeScript
import { manager } from '@kit.ConnectivityKit';
```

<a id="setconnectionmode"></a>
## setConnectionMode

```TypeScript
function setConnectionMode(mode: ConnectionMode, duration: number): Promise<void>
```

Sets the NearLink connection mode for a device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-manager-function setConnectionMode(mode: ConnectionMode, duration: int): Promise<void>--><!--Device-manager-function setConnectionMode(mode: ConnectionMode, duration: int): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [ConnectionMode](arkts-connectivity-manager-connectionmode-e-sys.md) | Yes | Indicates the NearLink connection mode to be set. |
| duration | number | Yes | Indicates the duration in seconds for the setting mode. A value of 0 means unlimited.<br>Unit: Seconds, The value must be an integer greater than or equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100040 | Integer out of range. |
| 36100099 | Operation failed. |

