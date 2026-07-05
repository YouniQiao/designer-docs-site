# isSupportTemplate

## Modules to Import

```TypeScript
import { notificationManager } from '@ohos.notificationManager';
```

## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void
```

Checks whether a specified template is supported before using [NotificationTemplate](arkts-notification-notificationtemplate-i.md#notificationtemplate) to publish a notification. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | Template name. Currently, only **downloadTemplate** is supported. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** indicates thatthe template is supported, and **false** indicates the opposite. If this API call fails, an error object isreturned. |

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

let templateName: string = 'downloadTemplate';
let isSupportTemplateCallback = (err: BusinessError, data: boolean): void => {
  if (err) {
    console.error(`isSupportTemplate failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`isSupportTemplate success, data: ${JSON.stringify(data)}`);
  }
}
notificationManager.isSupportTemplate(templateName, isSupportTemplateCallback);

```


## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string): Promise<boolean>
```

Checks whether a specified template is supported before using [NotificationTemplate](arkts-notification-notificationtemplate-i.md#notificationtemplate) to publish a notification. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | Template name. Currently, only **downloadTemplate** is supported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** means that the specifiedtemplate is supported, and **false** means the opposite. |

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

let templateName: string = 'downloadTemplate';
notificationManager.isSupportTemplate(templateName).then((data: boolean) => {
  console.info(`isSupportTemplate success, data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`isSupportTemplate failed, code is ${err.code}, message is ${err.message}`);
});

```

