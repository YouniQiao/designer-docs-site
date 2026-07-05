# onStateChange

## onStateChange

```TypeScript
function onStateChange(callback: Callback<NearlinkState>): void
```

订阅状态变更事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;NearlinkState> | Yes | 用于监听状态改变事件的回调 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

