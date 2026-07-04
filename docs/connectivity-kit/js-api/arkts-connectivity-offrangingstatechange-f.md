# offRangingStateChange

## Modules to Import

```TypeScript
import { ranging } from '@ohos.FusionConnectivity.ranging';
```

## offRangingStateChange

```TypeScript
function offRangingStateChange(callback?: Callback<RangingStateChangeInfo>): void
```

Unsubscribe from ranging state change events.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RangingStateChangeInfo&gt; | No | Callback used to listen to the ranging state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [34900099](../errorcode-fusionConnectivity.md#34900099-operation-failed) | Internal system error. For example, Internal object is invalid. |

