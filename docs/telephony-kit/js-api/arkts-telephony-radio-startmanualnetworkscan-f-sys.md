# startManualNetworkScan (System API)

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

<a id="startmanualnetworkscan"></a>
## startManualNetworkScan

```TypeScript
function startManualNetworkScan(slotId: number, callback: Callback<NetworkSearchRealTimeResult>): void
```

start ManualNetworkScan , Real-time report.

**Since:** 23

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

<!--Device-radio-function startManualNetworkScan(slotId: int, callback: Callback<NetworkSearchRealTimeResult>): void--><!--Device-radio-function startManualNetworkScan(slotId: int, callback: Callback<NetworkSearchRealTimeResult>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;NetworkSearchRealTimeResult&gt; | Yes | Indicates the callback for manual network scan |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Nonsystem applications use system APIs. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

