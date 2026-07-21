# offBatteryChange (System API)

## Modules to Import

```TypeScript
import { bas } from '@kit.ConnectivityKit';
```

<a id="offbatterychange"></a>
## offBatteryChange

```TypeScript
function offBatteryChange(callback?: Callback<BatteryInfo>): void
```

Unsubscribe the event of battery state changes from a remote device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-bas-function offBatteryChange(callback?: Callback<BatteryInfo>): void--><!--Device-bas-function offBatteryChange(callback?: Callback<BatteryInfo>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BatteryInfo&gt; | No | Callback used to listen. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Only can be called on phone, tablet, and 2in1 devices.Failed to call the API when the short-range chip is not inserted on 2in1 device. |
| 2900099 | Operation failed. |

