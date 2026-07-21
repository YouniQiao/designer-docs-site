# offConnectionStateChange

## Modules to Import

```TypeScript
import { remoteDevice } from '@kit.ConnectivityKit';
```

<a id="offconnectionstatechange"></a>
## offConnectionStateChange

```TypeScript
function offConnectionStateChange(callback?: Callback<ConnectionStateParam>): void
```

Unsubscribes from NearLink connection state change events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-remoteDevice-function offConnectionStateChange(callback?: Callback<ConnectionStateParam>): void--><!--Device-remoteDevice-function offConnectionStateChange(callback?: Callback<ConnectionStateParam>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;ConnectionStateParam&gt; | No | Callback used to listen for the connection state changed event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

