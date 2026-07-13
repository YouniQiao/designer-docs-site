# getRemainingDelayTime

## getRemainingDelayTime

```TypeScript
function getRemainingDelayTime(requestId: number, callback: AsyncCallback<number>): void
```

Obtains the remaining duration before the application is suspended. This API uses an asynchronous callback to
return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getRemainingDelayTime(requestId:

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| requestId | number | Yes | ID of the suspension delay request. The value is obtained by calling[requestSuspendDelay](arkts-backgroundtasks-requestsuspenddelay-depr-f.md#requestsuspenddelay-1). |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the remaining duration before the applicationis suspended, in milliseconds. |

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

Obtains the remaining duration before the application is suspended. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getRemainingDelayTime(requestId:

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| requestId | number | Yes | ID of the suspension delay request. The value is obtained by calling[requestSuspendDelay](arkts-backgroundtasks-requestsuspenddelay-depr-f.md#requestsuspenddelay-1). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the remaining duration before the application is suspended, inmilliseconds. |

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

