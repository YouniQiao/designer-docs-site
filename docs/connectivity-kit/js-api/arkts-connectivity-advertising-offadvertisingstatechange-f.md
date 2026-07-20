# offAdvertisingStateChange

## Modules to Import

```TypeScript
import { advertising } from '@kit.ConnectivityKit';
```

## offAdvertisingStateChange

```TypeScript
function offAdvertisingStateChange(callback?: Callback<AdvertisingStateChangeInfo>): void
```

Unsubscribes from the advertising state change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-advertising-function offAdvertisingStateChange(callback?: Callback<AdvertisingStateChangeInfo>): void--><!--Device-advertising-function offAdvertisingStateChange(callback?: Callback<AdvertisingStateChangeInfo>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<AdvertisingStateChangeInfo> | No | Callback used to listen for the advertising state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |

