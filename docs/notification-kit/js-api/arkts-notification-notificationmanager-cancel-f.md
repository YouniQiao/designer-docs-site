# cancel

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

<a id="cancel"></a>
## cancel

```TypeScript
function cancel(id: number, callback: AsyncCallback<void>): void
```

Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result.

After cancellation, the corresponding notification will be removed from the notification center, status bar, etc., and will no longer be visible to the user.

Compared with notificationManager.cancel(id, label, callback), which includes the label parameter,this API does not pass in a label and will cancel the notification matching the specified ID.When a notification is published with a non-empty label, the`notificationManager.cancel(id, label, callback)` API must be used to cancel it.

**Since:** 9

<!--Device-notificationManager-function cancel(id: int, callback: AsyncCallback<void>): void--><!--Device-notificationManager-function cancel(id: int, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Notification ID, used to identify the target notification. This value is specified by the **id** field of NotificationRequest when a notification is published. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600007](../errorcode-notification.md#1600007-notification-not-found) | The notification does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// cancel callback
let cancelCallback = (err: BusinessError): void => {
  if (err) {
    console.error(`Failed to cancel notification. Code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`Succeeded in canceling notification.`);
  }
}
notificationManager.cancel(0, cancelCallback);

```


<a id="cancel-1"></a>
## cancel

```TypeScript
function cancel(id: number, label: string, callback: AsyncCallback<void>): void
```

Cancels a notification with the specified ID and label. This API uses an asynchronous callback to return the result.

After cancellation, the corresponding notification will be removed from the notification center, status bar, and other locations, and will no longer be visible to the user. This is suitable for scenarios where a specific notification with a particular tag needs to be precisely canceled.

Compared with notificationManager.cancel(id, callback), which only passes in the notification ID, this API additionally passes in the **label** parameter, allowing precise cancellation of notifications with different tags under the same ID.

**Since:** 9

<!--Device-notificationManager-function cancel(id: int, label: string, callback: AsyncCallback<void>): void--><!--Device-notificationManager-function cancel(id: int, label: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Notification ID, used to identify the target notification. This value is specified by the **id** field of NotificationRequest when a notification is published. |
| label | string | Yes | Notification tag, used to distinguish notifications with different tags under the same ID. This value is specified by the **label** field of NotificationRequest when a notification is published. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600007](../errorcode-notification.md#1600007-notification-not-found) | The notification does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// cancel callback
let cancelCallback = (err: BusinessError): void => {
  if (err) {
    console.error(`Failed to cancel notification. Code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`Succeeded in canceling notification.`);
  } 
}
notificationManager.cancel(0, "label", cancelCallback);

```


<a id="cancel-2"></a>
## cancel

```TypeScript
function cancel(id: number, label?: string): Promise<void>
```

Cancels a published notification based on the notification ID and label. If the label is empty, it cancels the published notification that matches the specified notification ID and has an empty label. This API uses a promise to return the result.

After cancellation, the corresponding notification will be removed from the notification center, status bar, and other locations, and will no longer be visible to the user.

**Since:** 9

<!--Device-notificationManager-function cancel(id: int, label?: string): Promise<void>--><!--Device-notificationManager-function cancel(id: int, label?: string): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Notification ID, used to identify the target notification. This value is specified by the id field of NotificationRequest when publishing a notification. |
| label | string | No | Notification label. This parameter is left empty by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600007](../errorcode-notification.md#1600007-notification-not-found) | The notification does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

notificationManager.cancel(0).then(() => {
  console.info(`Succeeded in canceling notification.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to cancel notification. Code is ${err.code}, message is ${err.message}`);
});

```

