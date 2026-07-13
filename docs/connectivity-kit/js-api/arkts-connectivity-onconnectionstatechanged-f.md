# onConnectionStateChanged

## onConnectionStateChanged

```TypeScript
function onConnectionStateChanged(callback: Callback<ConnectionResult>): void
```

Subscribes to the connection state change event.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ConnectionResult&gt; | Yes | Callback used to listen for the state change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

