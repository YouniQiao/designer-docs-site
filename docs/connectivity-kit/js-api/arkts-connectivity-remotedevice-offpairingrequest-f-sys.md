# offPairingRequest (System API)

## Modules to Import

```TypeScript
import { remoteDevice } from '@kit.ConnectivityKit';
```

<a id="offpairingrequest"></a>
## offPairingRequest

```TypeScript
function offPairingRequest(callback?: Callback<PairingRequestParam>): void
```

Unsubscribes from pairing request events from remote NearLink devices.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-remoteDevice-function offPairingRequest(callback?: Callback<PairingRequestParam>): void--><!--Device-remoteDevice-function offPairingRequest(callback?: Callback<PairingRequestParam>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;PairingRequestParam&gt; | No | Callback used to listen for the pairing request event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

