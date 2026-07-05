# stopPassiveRanging

## stopPassiveRanging

```TypeScript
function stopPassiveRanging(handle: int, capabilityType: RangingTypes): void
```

Stops passive ranging mode. Stops the passive ranging broadcast and cleans up associated resources based on the specified handle and ranging capability type.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | int | Yes | Indicates the handle number of ranging monitoring. |
| capabilityType | RangingTypes | Yes | Indicates the capability type for ranging. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900052 | The specified type of ranging service is not supported. |
| 34900054 | The parameter value does not meet specifications. |
| 34900099 | Internal system error. For example, Internal object is invalid. |

