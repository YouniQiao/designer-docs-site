# getRemainingDelayTime

## getRemainingDelayTime

```TypeScript
function getRemainingDelayTime(requestId: number, callback: AsyncCallback<number>): void
```

获取本次短时任务的剩余时间，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.getRemainingDelayTime(requestId:

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| requestId | number | Yes | 延迟挂起的请求ID。这个值通过调用  [requestSuspendDelay]backgroundTaskManager.requestSuspendDelay方法获取。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数，返回本次短时任务的剩余时间，单位：ms。 |

**Example**

```TypeScript
import backgroundTaskManager from '@ohos.backgroundTaskManager';
import { BusinessError } from '@ohos.base';

let delayInfo = backgroundTaskManager.requestSuspendDelay("test", () => {});
backgroundTaskManager.getRemainingDelayTime(delayInfo.requestId, (err: BusinessError, res: number) => {
    if(err) {
        console.info('callback => Operation getRemainingDelayTime failed. Cause: ' + err.code);
    } else {
        console.info('callback => Operation getRemainingDelayTime succeeded. Data: ' + JSON.stringify(res));
    }
})

```

## getRemainingDelayTime

```TypeScript
function getRemainingDelayTime(requestId: number): Promise<number>
```

获取本次短时任务的剩余时间，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.getRemainingDelayTime(requestId:

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| requestId | number | Yes | 延迟挂起的请求ID。这个值通过调用  [requestSuspendDelay]backgroundTaskManager.requestSuspendDelay方法获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回本次短时任务的剩余时间，单位：ms。 |

**Example**

```TypeScript
import backgroundTaskManager from '@ohos.backgroundTaskManager';
import { BusinessError } from '@ohos.base';

let delayInfo = backgroundTaskManager.requestSuspendDelay("test", () => {});
    backgroundTaskManager.getRemainingDelayTime(delayInfo.requestId).then((res:number) => {
    console.info('promise => Operation getRemainingDelayTime succeeded. Data: ' + JSON.stringify(res));
}).catch((err : BusinessError) => {
    console.info('promise => Operation getRemainingDelayTime failed. Cause: ' + err.code);
})

```

