# snoozeNotification

## snoozeNotification

```TypeScript
function snoozeNotification(hashCode: string, delayTime: long): Promise<void>
```

设置通知稍后提醒。该通知在指定时间后再次提醒，每次设置只会提醒一次，提醒方式与该通知相同。 设置后该通知被删除。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCode | string | Yes | 需要设置稍后提醒通知的唯一标识。 |
| delayTime | long | Yes | 稍后提醒的时间间隔。  单位为： 秒。 |

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
| 1600007 | The notification does not exist. |
| 1600028 | This notification is not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Replace it with the unique ID of the notification to be snoozed.
let hashCode: string = "hashCode";
let delayTime: number = 60;
notificationManager.snoozeNotification(hashCode, delayTime).then(() => {
  console.info("snoozeNotification success.")
}).catch((err: BusinessError):void => {
  console.error(`snoozeNotification failed, code is ${err.code}, message is ${err.message}`);
});

```

