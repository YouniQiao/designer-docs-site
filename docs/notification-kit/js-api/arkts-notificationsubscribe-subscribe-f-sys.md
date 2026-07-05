# subscribe

## subscribe

```TypeScript
function subscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void
```

订阅当前用户下所有应用的通知。使用callback异步回调。

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** subscribeNotification

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | Yes | 通知订阅对象。 |
| callback | AsyncCallback&lt;void> | Yes | 订阅动作回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subscribeCallback = (err: BusinessError) => {
  if (err) {
    console.error(`subscribe failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info("subscribe success");
  }
}
let onConsumeCallback = (data: notificationSubscribe.SubscribeCallbackData) => {
  console.info(`Consume callback: ${JSON.stringify(data)}`);
}
let subscriber: notificationSubscribe.NotificationSubscriber = {
  onConsume: onConsumeCallback
};
notificationSubscribe.subscribe(subscriber, subscribeCallback);

```

## subscribe

```TypeScript
function subscribe(
    subscriber: NotificationSubscriber,
    info: NotificationSubscribeInfo,
    callback: AsyncCallback<void>
  ): void
```

订阅通知并指定订阅信息。使用callback异步回调。

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** subscribeNotification

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | Yes | 通知订阅对象。 |
| info | NotificationSubscribeInfo | Yes | 通知订阅信息。 |
| callback | AsyncCallback&lt;void> | Yes | 订阅动作回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// subscribe callback
let subscribeCallback = (err: BusinessError) => {
  if (err) {
    console.error(`subscribe failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info("subscribe success");
  }
}
let onConsumeCallback = (data: notificationSubscribe.SubscribeCallbackData) => {
  console.info(`Consume callback: ${JSON.stringify(data)}`);
}
let subscriber: notificationSubscribe.NotificationSubscriber = {
  onConsume: onConsumeCallback
};
// Bundle names are not verified. You need to determine the target bundle names.
let info: notificationSubscribe.NotificationSubscribeInfo = {
  bundleNames: ["bundleName1","bundleName2"]
};
notificationSubscribe.subscribe(subscriber, info, subscribeCallback);

```

## subscribe

```TypeScript
function subscribe(subscriber: NotificationSubscriber, info?: NotificationSubscribeInfo): Promise<void>
```

订阅通知并指定订阅信息。使用Promise异步回调。

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** subscribeNotification

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | Yes | 通知订阅对象。 |
| info | NotificationSubscribeInfo | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let onConsumeCallback = (data: notificationSubscribe.SubscribeCallbackData) => {
  console.info(`Consume callback: ${JSON.stringify(data)}`);
}
let subscriber: notificationSubscribe.NotificationSubscriber = {
  onConsume: onConsumeCallback
};
notificationSubscribe.subscribe(subscriber).then(() => {
  console.info("subscribe success");
}).catch((err: BusinessError) => {
  console.error(`subscribe failed, code is ${err.code}, message is ${err.message}`);
});

```

