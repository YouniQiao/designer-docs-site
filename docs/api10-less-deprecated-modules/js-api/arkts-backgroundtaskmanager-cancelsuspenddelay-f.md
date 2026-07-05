# cancelSuspendDelay

## cancelSuspendDelay

```TypeScript
function cancelSuspendDelay(requestId: number): void
```

取消延迟挂起。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.cancelSuspendDelay

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| requestId | number | Yes | 延迟挂起的请求ID。这个值通过调用  [requestSuspendDelay]backgroundTaskManager.requestSuspendDelay方法获取。 |

**Example**

```TypeScript
let delayInfo = backgroundTaskManager.requestSuspendDelay("test", () => {});
backgroundTaskManager.cancelSuspendDelay(delayInfo.requestId);

```

