# snoozeNotification

## snoozeNotification

```TypeScript
function snoozeNotification(hashCode: string, delayTime: long): Promise<void>
```

设置通知稍后提醒。该通知在指定时间后再次提醒，每次设置只会提醒一次，提醒方式与该通知相同。 设置后该通知被删除。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hashCode | string | 是 | 需要设置稍后提醒通知的唯一标识。 |
| delayTime | long | 是 | 稍后提醒的时间间隔。  单位为： 秒。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600007 | The notification does not exist. |
| 1600028 | This notification is not supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 此处应改为开发者需要设定稍后提醒通知的唯一标识
let hashCode: string = "hashCode";
let delayTime: number = 60;
notificationManager.snoozeNotification(hashCode, delayTime).then(() => {
  console.info("snoozeNotification success.")
}).catch((err: BusinessError):void => {
  console.error(`snoozeNotification failed, code is ${err.code}, message is ${err.message}`);
});

```

