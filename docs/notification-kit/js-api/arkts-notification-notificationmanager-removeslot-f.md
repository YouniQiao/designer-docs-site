# removeSlot

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## removeSlot

```TypeScript
function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void
```

Removes a notification slot of a specified type for this application. This API uses an asynchronous callback to return the result.

After deletion, the corresponding type of notification slot and its configuration will be permanently removed. When a notification of this type is published subsequently, the system will automatically create a default slot. Notifications already published through this slot are not affected and can still be viewed in the notification center. This is suitable for scenarios where a slot needs to be deleted and then recreated for reconfiguration.

**Since:** 9

<!--Device-notificationManager-function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void--><!--Device-notificationManager-function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | [SlotType](arkts-notification-notificationmanager-slottype-e.md) | Yes | Notification slot type, such as social communication, service reminder,and content consultation. The created slot type must be passed in; otherwise, the deletion operation is invalid. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// removeSlot callback
let removeSlotCallback = (err: BusinessError): void => {
  if (err) {
    console.error(`Failed to remove slot. Code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`Succeeded in removing slot.`);
  }
}
let slotType: notificationManager.SlotType = notificationManager.SlotType.SOCIAL_COMMUNICATION;
notificationManager.removeSlot(slotType, removeSlotCallback);

```


## removeSlot

```TypeScript
function removeSlot(slotType: SlotType): Promise<void>
```

Removes a notification slot of a specified type for this application. This API uses a promise to return the result.

After deletion, the corresponding notification slot and its configuration will be permanently removed.When a notification of this type is published subsequently, the system will automatically create a default slot. Notifications already published through this slot are not affected and can still be viewed in the notification center. This is suitable for scenarios where a slot needs to be deleted and then recreated for reconfiguration.

**Since:** 9

<!--Device-notificationManager-function removeSlot(slotType: SlotType): Promise<void>--><!--Device-notificationManager-function removeSlot(slotType: SlotType): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | [SlotType](arkts-notification-notificationmanager-slottype-e.md) | Yes | Notification slot type, such as social communication, service reminder,and content consultation. The created slot type must be passed in; otherwise, the deletion operation is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotType: notificationManager.SlotType = notificationManager.SlotType.SOCIAL_COMMUNICATION;
notificationManager.removeSlot(slotType).then(() => {
  console.info(`Succeeded in removing slot.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to remove slot. Code is ${err.code}, message is ${err.message}`);
});

```

