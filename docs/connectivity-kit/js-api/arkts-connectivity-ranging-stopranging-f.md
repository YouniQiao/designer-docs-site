# stopRanging

## Modules to Import

```TypeScript
import { ranging } from '@kit.ConnectivityKit';
```

## stopRanging

```TypeScript
function stopRanging(callback: Callback<RangingResult>, params?: RangingParams): void
```

Stops ongoing ranging operations.If no target device is specified, stops ranging for all devices associated with the callback.If a target device is specified, only stops ranging for that specific device.This method also releases all occupied resources. For proper resource management,stopRanging must be called after startRanging to avoid resource leaks.State changes are notified via the onRangingStateChange callback.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-ranging-function stopRanging(callback: Callback<RangingResult>, params?: RangingParams): void--><!--Device-ranging-function stopRanging(callback: Callback<RangingResult>, params?: RangingParams): void-End-->

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<RangingResult> | Yes | Callback used to return the ranging result. |
| params | [RangingParams](arkts-connectivity-ranging-rangingparams-i.md) | No | Parameters for ranging include deviceId and ranging types. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 34900050 | The device has not initiated ranging. |
| 34900052 | The specified type of ranging service is not supported. |
| 34900054 | The parameter value does not meet specifications. |
| [34900099](../errorcode-fusionConnectivity.md#34900099-operation-failed) | Internal system error. For example, Internal object is invalid. |

