# cancelSuspendDelay

## cancelSuspendDelay

```TypeScript
function cancelSuspendDelay(requestId: number): void
```

Cancels the suspension delay.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [cancelSuspendDelay](arkts-backgroundtasks-backgroundtaskmanager-cancelsuspenddelay-f.md#cancelsuspenddelay-1)

<!--Device-backgroundTaskManager-function cancelSuspendDelay(requestId: number): void--><!--Device-backgroundTaskManager-function cancelSuspendDelay(requestId: number): void-End-->

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| requestId | number | Yes | ID of the suspension delay request. The value is obtained by calling [requestSuspendDelay](arkts-backgroundtasks-backgroundtaskmanager-requestsuspenddelay-depr-f.md#requestsuspenddelay-1). |

**Example**

```TypeScript
let delayInfo = backgroundTaskManager.requestSuspendDelay("test", () => {});
backgroundTaskManager.cancelSuspendDelay(delayInfo.requestId);

```

