# isPriorityEnabled

## isPriorityEnabled

```TypeScript
function isPriorityEnabled(): Promise<boolean>
```

获取通知优先级总开关状态。

**起始版本：** 23

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回包含通知优先级总开关使能状态的Promise对象。  - true：允许设置为优先通知。  - false：禁止设置为优先通知。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

notificationManager.isPriorityEnabled().then((result : boolean) => {
    hilog.info(0x0000, 'testTag', `isPriorityEnabled result is ${result}`);
}).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', `isPriorityEnabled failed, code is ${err.code}, message is ${err.message}`);
});

```

