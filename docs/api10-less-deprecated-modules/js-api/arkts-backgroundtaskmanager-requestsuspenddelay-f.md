# requestSuspendDelay

## requestSuspendDelay

```TypeScript
function requestSuspendDelay(reason: string, callback: Callback<void>): DelaySuspendInfo
```

后台应用申请延迟挂起。 延迟挂起时间一般情况下默认值为3分钟，低电量（依据系统低电量广播）时默认值为1分钟。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.requestSuspendDelay

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | 延迟挂起申请的原因。 |
| callback | Callback&lt;void> | Yes | 延迟即将超时的回调函数，一般在超时前6秒通过此回调通知应用。 |

**Return value:**

| Type | Description |
| --- | --- |
| DelaySuspendInfo | 返回延迟挂起信息。 |

**Example**

```TypeScript
import backgroundTaskManager from '@ohos.backgroundTaskManager';
import { BusinessError } from '@ohos.base';

// Set the reason for delayed suspension.
let myReason = 'test requestSuspendDelay';
// Request delayed suspension.
let delayInfo = backgroundTaskManager.requestSuspendDelay(myReason, () => {
    console.info("Request suspension delay will time out.");
})
// Print the delayed suspension information.
let id = delayInfo.requestId;
let time = delayInfo.actualDelayTime;
console.info("The requestId is: " + id);
console.info("The actualDelayTime is: " + time);

```

