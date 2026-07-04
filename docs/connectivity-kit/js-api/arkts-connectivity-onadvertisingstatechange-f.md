---
last_update:
  date: 2026-07-04
---

# onAdvertisingStateChange

## onAdvertisingStateChange

```TypeScript
function onAdvertisingStateChange(callback: Callback<AdvertisingStateChangeInfo>): void
```

Subscribes to the advertising state change event.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AdvertisingStateChangeInfo&gt; | Yes | Callback used to listen for the advertising state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |

