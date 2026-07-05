# isPriorityIntelligentEnabled

## isPriorityIntelligentEnabled

```TypeScript
function isPriorityIntelligentEnabled(): Promise<boolean>
```

获取优先通知智能服务使能状态。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回包含优先通知智能服务使能状态的Promise对象。  - true：优先通知智能服务为打开状态。  - false：优先通知智能服务为关闭状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

notificationManager.isPriorityIntelligentEnabled().then((result: boolean) => {
  hilog.info(0x0000, 'testTag', `isPriorityIntelligentEnabled result: ${result}`);
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'testTag', `isPriorityIntelligentEnabled failed, code is ${err.code}, message is ${err.message}`);
});

```

