# setPriorityIntelligentEnabled

## setPriorityIntelligentEnabled

```TypeScript
function setPriorityIntelligentEnabled(enable: boolean): Promise<void>
```

设置优先通知智能服务使能状态。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 优先通知智能服务使能状态。 - true：优先通知智能服务为打开状态。 - false：优先通知智能服务为关闭状态。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

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

notificationManager.setPriorityIntelligentEnabled(false).then(() => {
  hilog.info(0x0000, 'testTag', `setPriorityIntelligentEnabled success`);
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'testTag', `setPriorityIntelligentEnabled failed, code is ${err.code}, message is ${err.message}`);
});

```

