# setBadgeNumber

## Modules to Import

```TypeScript
import { notificationManager } from '@ohos.notificationManager';
```

## setBadgeNumber

```TypeScript
function setBadgeNumber(badgeNumber: number, callback: AsyncCallback<void>): void
```

Sets the notification badge number. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| badgeNumber | number | Yes | Notification badge number to set. If **badgeNumber** is set to **0**, badges arecleared; if the value is greater than **99**, **99+** is displayed on the badge. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600012](../errorcode-notification.md#1600012-insufficient-memory-space) | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let setBadgeNumberCallback = (err: BusinessError): void => {
  if (err) {
    console.error(`Failed to set badge number. Code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`Succeeded in setting badge number.`);
  }
}
let badgeNumber: number = 10;
notificationManager.setBadgeNumber(badgeNumber, setBadgeNumberCallback);

```


## setBadgeNumber

```TypeScript
function setBadgeNumber(badgeNumber: number): Promise<void>
```

Sets the notification badge number. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| badgeNumber | number | Yes | Notification badge number to set. If **badgeNumber** is set to **0**, badges arecleared; if the value is greater than **99**, **99+** is displayed on the badge. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600012](../errorcode-notification.md#1600012-insufficient-memory-space) | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let badgeNumber: number = 10;
notificationManager.setBadgeNumber(badgeNumber).then(() => {
  console.info(`Succeeded in setting badge number.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to set badge number. Code is ${err.code}, message is ${err.message}`);
});

```

