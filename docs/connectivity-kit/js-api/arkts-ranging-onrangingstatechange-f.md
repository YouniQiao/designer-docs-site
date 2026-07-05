# onRangingStateChange

## onRangingStateChange

```TypeScript
function onRangingStateChange(callback: Callback<RangingStateChangeInfo>): void
```

Registers a callback to receive ranging state change notifications. Notifies state changes for both active ranging and passive ranging operations.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RangingStateChangeInfo> | Yes | Callback used to listen for the ranging state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900099 | Internal system error. For example, Internal object is invalid. |

