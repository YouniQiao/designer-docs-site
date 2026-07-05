# onDeviceFound

## onDeviceFound

```TypeScript
function onDeviceFound(callback: Callback<ScanResults[]>): void
```

Subscribes to NearLink scan results. If the user is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission, the callback will return real device addresses; otherwise, random device addresses will be returned.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ScanResults[]&gt; | Yes | Callback used to listen for the scan result event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |

