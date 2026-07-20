# offAcbStateChange

## Modules to Import

```TypeScript
import { remoteDevice } from '@kit.ConnectivityKit';
```

## offAcbStateChange

```TypeScript
function offAcbStateChange(callback?: Callback<AcbStateParam>): void
```

Unsubscribes from the NearLink ACB connection status change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-remoteDevice-function offAcbStateChange(callback?: Callback<AcbStateParam>): void--><!--Device-remoteDevice-function offAcbStateChange(callback?: Callback<AcbStateParam>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<AcbStateParam> | No | Callback of the event to be listened to. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

