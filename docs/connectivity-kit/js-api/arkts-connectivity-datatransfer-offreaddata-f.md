# offReadData

## Modules to Import

```TypeScript
import { dataTransfer } from '@kit.ConnectivityKit';
```

## offReadData

```TypeScript
function offReadData(callback?: Callback<DataParams>): void
```

Unsubscribes from the event reported when data is read from the port.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-dataTransfer-function offReadData(callback?: Callback<DataParams>): void--><!--Device-dataTransfer-function offReadData(callback?: Callback<DataParams>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<DataParams> | No | Callback used to listen for the port read event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

