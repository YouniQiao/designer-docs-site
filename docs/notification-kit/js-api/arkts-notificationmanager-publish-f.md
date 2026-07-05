# publish

## publish

```TypeScript
function publish(request: NotificationRequest, callback: AsyncCallback<void>): void
```

发布通知。使用callback异步回调。 如果新发布通知与已发布通知的ID和标签都相同，则新通知将取代原有通知。

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | NotificationRequest | Yes | 设置发布通知的内容和相关配置信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当发布通知成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. |
| 1600005 | Notification slot disabled. |
| 1600007 | The notification does not exist. [since 11] |
| 1600009 | The notification sending frequency reaches the upper limit. |
| 1600012 | No memory space. |
| 1600014 | No permission. [since 11] |
| 1600015 | The current notification status does not support duplicate  configurations. [since 11] |
| 1600016 | The notification version for this update is too low. [since 11] |
| 1600020 | The application is not allowed to send notifications due to permission  settings. [since 12] |
| 2300007 | Network unreachable. [since 11] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// publish callback
let publishCallback = (err: BusinessError): void => {
  if (err) {
    console.error(`Failed to publish notification. Code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`Succeeded in publishing notification.`);
  }
}
// NotificationRequest object
let notificationRequest: notificationManager.NotificationRequest = {
  id: 1,
  content: {
    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
    normal: {
      title: "test_title",
      text: "test_text",
      additionalText: "test_additionalText"
    }
  }
};
notificationManager.publish(notificationRequest, publishCallback);

```

## publish

```TypeScript
function publish(request: NotificationRequest): Promise<void>
```

发布通知。使用Promise异步回调。 如果新发布通知与已发布通知的ID和标签都相同，则新通知将取代原有通知。

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | NotificationRequest | Yes | 设置发布通知的内容和相关配置信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. |
| 1600005 | Notification slot disabled. |
| 1600007 | The notification does not exist. [since 11] |
| 1600009 | The notification sending frequency reaches the upper limit. |
| 1600012 | No memory space. |
| 1600014 | No permission. [since 11] |
| 1600015 | The current notification status does not support duplicate  configurations. [since 11] |
| 1600016 | The notification version for this update is too low. [since 11] |
| 1600020 | The application is not allowed to send notifications due to permission  settings. [since 12] |
| 2300007 | Network unreachable. [since 11] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// NotificationRequest object
let notificationRequest: notificationManager.NotificationRequest = {
  id: 1,
  content: {
    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
    normal: {
      title: "test_title",
      text: "test_text",
      additionalText: "test_additionalText"
    }
  }
};
notificationManager.publish(notificationRequest).then(() => {
  console.info(`Succeeded in publishing notification.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to publish notification. Code is ${err.code}, message is ${err.message}`);
});


```

