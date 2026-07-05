# setNotificationSwitch

## setNotificationSwitch

```TypeScript
function setNotificationSwitch(switchName: string, switchState: boolean, userId: int): Promise<void>
```

设置通知开关状态。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| switchName | string | Yes | 通知开关名称。取值为：DEAL（交易类通知聚合开关）、LOGISTICS（物流类通知聚合开关）。 |
| switchState | boolean | Yes | 是否开启通知开关。  - true：表示开启。  - false：表示关闭。 |
| userId | int | Yes | 用户ID。  取值范围为全体整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. Database operation failed. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600008 | The user does not exist. |
| 1600012 | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let switchName: string = 'DEAL';
let switchState: boolean = true;
let userId: number = 100;

notificationManager.setNotificationSwitch(switchName, switchState, userId).then(() => {
    console.info('setNotificationSwitch success');
}).catch((err: BusinessError) => {
    console.error(`setNotificationSwitch failed, code is ${err.code}, message is ${err.message}`);
});

```

