# getRangingCapability

## Modules to Import

```TypeScript
import { ranging } from '@kit.ConnectivityKit';
```

## getRangingCapability

```TypeScript
function getRangingCapability(): Promise<RangingCapabilitySupported>
```

Queries whether the current device supports ranging capability.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-ranging-function getRangingCapability(): Promise<RangingCapabilitySupported>--><!--Device-ranging-function getRangingCapability(): Promise<RangingCapabilitySupported>-End-->

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<RangingCapabilitySupported> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 34900053 | The ranging service is disabled. |

