# offDeviceFound

## offDeviceFound

```TypeScript
function offDeviceFound(callback?: Callback<ScanResults[]>): void
```

取消订阅星闪扫描结果。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ScanResults[]> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported because the chip does not support it. |

