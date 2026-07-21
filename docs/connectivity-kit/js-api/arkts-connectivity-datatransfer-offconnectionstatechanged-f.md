# offConnectionStateChanged

## Modules to Import

```TypeScript
import { dataTransfer } from '@kit.ConnectivityKit';
```

<a id="offconnectionstatechanged"></a>
## offConnectionStateChanged

```TypeScript
function offConnectionStateChanged(callback?: Callback<ConnectionResult>): void
```

Unsubscribes from the connection state change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-dataTransfer-function offConnectionStateChanged(callback?: Callback<ConnectionResult>): void--><!--Device-dataTransfer-function offConnectionStateChanged(callback?: Callback<ConnectionResult>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;ConnectionResult&gt; | No | Callback used to listen for the state change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

