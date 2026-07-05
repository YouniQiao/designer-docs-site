# removeNotificationSlot

## removeNotificationSlot

```TypeScript
function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void
```

删除指定的通知渠道类型，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | notification.SlotType | Yes | 通知渠道类型。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。  当删除成功，err为undefined；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter is not valid parameter. |

**Example**

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

reminderAgentManager.removeNotificationSlot(notificationManager.SlotType.CONTENT_INFORMATION,
  (err: BusinessError) => {
  if (err.code) {
    console.error("callback err code:" + err.code + " message:" + err.message);
  } else {
    console.info("removeNotificationSlot callback");
  }
});

```

## removeNotificationSlot

```TypeScript
function removeNotificationSlot(slotType: notification.SlotType): Promise<void>
```

删除指定的通知渠道类型，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | notification.SlotType | Yes | 通知渠道类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter is not valid parameter. |

**Example**

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

reminderAgentManager.removeNotificationSlot(notificationManager.SlotType.CONTENT_INFORMATION).then(() => {
  console.info("removeNotificationSlot promise");
}).catch((err: BusinessError) => {
  console.error("promise err code:" + err.code + " message:" + err.message);
});

```

