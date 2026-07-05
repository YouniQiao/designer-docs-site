# onAutoSyncTrigger

## onAutoSyncTrigger

```TypeScript
function onAutoSyncTrigger(observer: Callback<AutoSyncTriggerInfo>): void
```

在已打开端云同步且应用关闭自动同步的条件下，注册自动同步触发事件通知。当满足自动触发条件时，回调函数会被调用。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | Callback&lt;AutoSyncTriggerInfo> | Yes | 回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |

