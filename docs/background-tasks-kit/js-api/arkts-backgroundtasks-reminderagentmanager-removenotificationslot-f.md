# removeNotificationSlot

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

<a id="removenotificationslot"></a>
## removeNotificationSlot

```TypeScript
function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void
```

Removes a specified notification slot. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-reminderAgentManager-function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void--><!--Device-reminderAgentManager-function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | notification.SlotType | Yes | Type of the notification slot. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result.If the notification slot is removed,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |

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


<a id="removenotificationslot-1"></a>
## removeNotificationSlot

```TypeScript
function removeNotificationSlot(slotType: notification.SlotType): Promise<void>
```

Removes a specified notification slot. This API uses a promise to return the result.

**Since:** 9

<!--Device-reminderAgentManager-function removeNotificationSlot(slotType: notification.SlotType): Promise<void>--><!--Device-reminderAgentManager-function removeNotificationSlot(slotType: notification.SlotType): Promise<void>-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | notification.SlotType | Yes | Type of the notification slot. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |

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

