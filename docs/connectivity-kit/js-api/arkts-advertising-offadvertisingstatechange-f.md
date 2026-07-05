# offAdvertisingStateChange

## offAdvertisingStateChange

```TypeScript
function offAdvertisingStateChange(callback?: Callback<AdvertisingStateChangeInfo>): void
```

取消订阅广播状态变更事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AdvertisingStateChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported because the chip does not support it. |

