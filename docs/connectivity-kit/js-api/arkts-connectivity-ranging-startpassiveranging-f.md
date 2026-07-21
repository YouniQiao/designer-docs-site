# startPassiveRanging

## Modules to Import

```TypeScript
import { ranging } from '@kit.ConnectivityKit';
```

<a id="startpassiveranging"></a>
## startPassiveRanging

```TypeScript
function startPassiveRanging(capabilityType: RangingTypes): Promise<number>
```

Starts passive ranging mode.

Upon successful startup, returns a handle identifier for the passive ranging session and begins broadcasting ranging packets.

The returned handle can be used to stop the passive ranging broadcast via stopPassiveRanging.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-ranging-function startPassiveRanging(capabilityType: RangingTypes): Promise<int>--><!--Device-ranging-function startPassiveRanging(capabilityType: RangingTypes): Promise<int>-End-->

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capabilityType | [RangingTypes](arkts-connectivity-ranging-rangingtypes-e.md) | Yes | Indicates the capability type for ranging. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the handle for starts ranging listening. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 34900052 | The specified type of ranging service is not supported. |
| 34900053 | The ranging service is disabled. |
| [34900099](../errorcode-fusionConnectivity.md#34900099-operation-failed) | Internal system error. For example, Internal object is invalid. |

