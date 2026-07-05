# publish

## publish

```TypeScript
function publish(request: NotificationRequest, userId: int, callback: AsyncCallback<void>): void
```

发布通知给指定的用户。使用callback异步回调。

**Since:** 9

**Required permissions:** 

- API version9  to  17: ohos.permission.NOTIFICATION_CONTROLLER

- API version18 and later: ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | NotificationRequest | Yes | 用于设置要发布通知的内容和相关配置信息。 |
| userId | int | Yes | 用户ID。 |
| callback | AsyncCallback&lt;void> | Yes | 被指定的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | The device does not support geofencing. [since 23] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. |
| 1600005 | Notification slot disabled. |
| 1600007 | The notification does not exist. [since 11] |
| 1600008 | The user does not exist. |
| 1600009 | The notification sending frequency reaches the upper limit. |
| 1600012 | No memory space. |
| 1600014 | No permission. [since 11] |
| 1600015 | The current notification status does not support duplicate  configurations. [since 11] |
| 1600016 | The notification version for this update is too low. [since 11] |
| 1600020 | The application is not allowed to send notifications due to permission  settings. [since 18] |
| 1600025 | Geofencing disabled. [since 23] |
| 1600026 | The location switch is off. [since 23] |
| 1600027 | The "Awareness & suggestions" switch of the location-based service is  off. [since 23] |
| 2300007 | Network unreachable. [since 11] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// publish callback
let publishCallback = (err: BusinessError): void => {
    if (err) {
        console.error(`publish failed, code is ${err.code}, message is ${err.message}`);
    } else {
        console.info("publish success");
    }
}
// Use the actual user ID when calling the API.
let userId: number = 1;
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
notificationManager.publish(notificationRequest, userId, publishCallback);

```

## publish

```TypeScript
function publish(request: NotificationRequest, userId: int): Promise<void>
```

发布通知给指定的用户。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

- API version9  to  17: ohos.permission.NOTIFICATION_CONTROLLER

- API version18 and later: ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | NotificationRequest | Yes | 用于设置要发布通知的内容和相关配置信息。 |
| userId | int | Yes | 用户ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | The device does not support geofencing. [since 23] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. |
| 1600005 | Notification slot disabled. |
| 1600007 | The notification does not exist. [since 11] |
| 1600008 | The user does not exist. |
| 1600009 | The notification sending frequency reaches the upper limit. |
| 1600012 | No memory space. |
| 1600014 | No permission. [since 11] |
| 1600015 | The current notification status does not support duplicate  configurations. [since 11] |
| 1600016 | The notification version for this update is too low. [since 11] |
| 1600020 | The application is not allowed to send notifications due to permission  settings. [since 18] |
| 1600025 | Geofencing disabled. [since 23] |
| 1600026 | The location switch is off. [since 23] |
| 1600027 | The "Awareness & suggestions" switch of the location-based service is  off. [since 23] |
| 2300007 | Network unreachable. [since 11] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

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

// Use the actual user ID when calling the API.
let userId: number = 1;

notificationManager.publish(notificationRequest, userId).then(() => {
    console.info("publish success");
}).catch((err: BusinessError) => {
    console.error(`publish failed, code is ${err.code}, message is ${err.message}`);
});

```

