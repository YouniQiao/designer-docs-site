# offPairingRequest

## offPairingRequest

```TypeScript
function offPairingRequest(callback?: Callback<PairingRequestParam>): void
```

取消订阅来自远端星闪设备的配对请求事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PairingRequestParam> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

