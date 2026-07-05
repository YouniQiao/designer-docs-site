# getRangingCapability

## getRangingCapability

```TypeScript
function getRangingCapability(): Promise<RangingCapabilitySupported>
```

Queries whether the current device supports ranging capability.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RangingCapabilitySupported> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900053 | The ranging service is disabled. |

