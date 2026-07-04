# getSlots

## Modules to Import

```TypeScript
import { notificationManager } from '@ohos.notificationManager';
```

## getSlots

```TypeScript
function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void
```

Obtains all notification slots of this application. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;NotificationSlot&gt;&gt; | Yes | Callback used to return the result. If the operationis successful, **err** is **undefined** and **data** is the obtained **NotificationSlot** array; otherwise,**err** is an error object. |

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

// getSlots callback
let getSlotsCallback = (err: BusinessError, data: Array<notificationManager.NotificationSlot>): void => {
  if (err) {
    console.error(`Failed to get slots. Code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`Succeeded in getting slots, data is ${JSON.stringify(data)}`);
  }
}
notificationManager.getSlots(getSlotsCallback);

```


## getSlots

```TypeScript
function getSlots(): Promise<Array<NotificationSlot>>
```

Obtains all notification slots of this application. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;NotificationSlot&gt;&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

notificationManager.getSlots().then((data: Array<notificationManager.NotificationSlot>) => {
  console.info(`Succeeded in getting slots, data is ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get slots. Code is ${err.code}, message is ${err.message}`);
});

```

