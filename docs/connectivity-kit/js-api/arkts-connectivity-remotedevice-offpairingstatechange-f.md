# offPairingStateChange

## Modules to Import

```TypeScript
import { remoteDevice } from '@kit.ConnectivityKit';
```

## offPairingStateChange

```TypeScript
function offPairingStateChange(callback?: Callback<PairingStateParam>): void
```

Unsubscribes from NearLink pairing state change events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-remoteDevice-function offPairingStateChange(callback?: Callback<PairingStateParam>): void--><!--Device-remoteDevice-function offPairingStateChange(callback?: Callback<PairingStateParam>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<PairingStateParam> | No | Callback function used to listen for the pairing state event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

