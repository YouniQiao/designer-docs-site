# getNotificationSetting

## getNotificationSetting

```TypeScript
function getNotificationSetting(): Promise<NotificationSetting>
```

获取应用程序的通知设置。使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NotificationSetting> | Promise对象，返回此应用程序的通知设置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

notificationManager.getNotificationSetting().then((data: notificationManager.NotificationSetting) => {
    console.info(`getNotificationSetting success, data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNotificationSetting failed, code is ${err.code}, message is ${err.message}`);
});

```

