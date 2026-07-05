# off

## off('checkNotification')

```TypeScript
function off(
    type: 'checkNotification',
    callback?: (checkInfo: NotificationCheckInfo) => NotificationCheckResult
  ): void
```

取消通知监听回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'checkNotification' | 是 | 回调函数类型名，固定为'checkNotification'。 |
| callback | (checkInfo: NotificationCheckInfo) => NotificationCheckResult | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try{
    notificationManager.off("checkNotification");
} catch (err){
    console.error(`notificationManager.off failed, code is ${err.code}, message is ${err.message}`);
}

```

