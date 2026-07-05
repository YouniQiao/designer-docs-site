# offRangingStateChange

## offRangingStateChange

```TypeScript
function offRangingStateChange(callback?: Callback<RangingStateChangeInfo>): void
```

Unsubscribe from ranging state change events.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RangingStateChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900099 | Internal system error. For example, Internal object is invalid. |

