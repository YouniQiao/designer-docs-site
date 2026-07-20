# onDeviceFound

## Modules to Import

```TypeScript
import { scan } from '@kit.ConnectivityKit';
```

## onDeviceFound

```TypeScript
function onDeviceFound(callback: Callback<ScanResults[]>): void
```

Subscribes to NearLink scan results.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,the callback returns the real device address; otherwise, a random device address is returned.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-scan-function onDeviceFound(callback: Callback<ScanResults[]>): void--><!--Device-scan-function onDeviceFound(callback: Callback<ScanResults[]>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<ScanResults[]> | Yes | Callback used to listen for the scan result event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |

