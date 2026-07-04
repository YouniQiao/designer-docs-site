---
last_update:
  date: 2026-07-04
---

# onPairingRequest (System API)

## onPairingRequest

```TypeScript
function onPairingRequest(callback: Callback<PairingRequestParam>): void
```

Subscribes to pairing request events from remote NearLink devices. If the user is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission, the callback returns the real device address; otherwise, a random device address is returned.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PairingRequestParam&gt; | Yes | Callback used to listen for the pairing request event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

