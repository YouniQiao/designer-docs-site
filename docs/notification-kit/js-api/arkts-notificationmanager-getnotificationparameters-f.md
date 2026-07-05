# getNotificationParameters

## getNotificationParameters

```TypeScript
function getNotificationParameters(id: number, label?: string): Promise<NotificationParameters>
```

获取通知[NotificationRequest]./notification/notificationRequest:NotificationRequest中wantAgent字段的部分信息。使用Promise异 步回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 通知ID。 |
| label | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NotificationParameters> | Promise对象，返回wantAgent的部分信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600007 | The notification does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let id: number = 0;
let label: string = "";
notificationManager.getNotificationParameters(id, label).then((data: notificationManager.NotificationParameters) => {
  console.info(`Succeeded in getting notification parameters, data is ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get notification parameters. Code is ${err.code}, message is ${err.message}`);
});

```

