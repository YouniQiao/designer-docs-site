# subscribeNotification

## subscribeNotification

```TypeScript
function subscribeNotification(subscriber: NotificationSubscriber): Promise<void>
```

订阅通知；订阅后，通过订阅者中的回调函数接收新消息。使用Promise异步回调。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.NOTIFICATION_SYSTEM_SUBSCRIBER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | 是 | 通知订阅者。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. Possible cause: 1.IPC communication failed.  2.Memory operation error. 3.The user does not exist. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let onConsumeCallback = (data: notificationSubscribe.SubscribeCallbackData) => {
  console.info(`Consume callback: ${JSON.stringify(data)}`);
}
let subscriber: notificationSubscribe.NotificationSubscriber = {
  onConsume: onConsumeCallback
};
notificationSubscribe.subscribeNotification(subscriber).then(() => {
  console.info("subscribeNotification success");
}).catch((err: BusinessError) => {
  console.error(`subscribeNotification failed, code is ${err.code}, message is ${err.message}`);
});

```

## subscribeNotification

```TypeScript
function subscribeNotification(subscriber: NotificationSubscriber, info: NotificationSubscribeInfo): Promise<void>
```

订阅通知；订阅后，通过订阅者中的回调函数接收新消息。使用Promise异步回调。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.NOTIFICATION_SYSTEM_SUBSCRIBER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | 是 | 通知订阅者。 |
| info | NotificationSubscribeInfo | 是 | 通知订阅信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. Possible cause: 1.IPC communication failed.  2.Memory operation error. 3.The user does not exist. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let onConsumeCallback = (data: notificationSubscribe.SubscribeCallbackData) => {
  console.info(`Consume callback: ${JSON.stringify(data)}`);
}
let subscriber: notificationSubscribe.NotificationSubscriber = {
  onConsume: onConsumeCallback
};
let subscribeInfo: notificationSubscribe.NotificationSubscribeInfo = {
  bundleNames: ["bundleName1", "bundleName2"],
}
notificationSubscribe.subscribeNotification(subscriber, subscribeInfo).then(() => {
  console.info("subscribeNotification success");
}).catch((err: BusinessError) => {
  console.error(`subscribeNotification failed, code is ${err.code}, message is ${err.message}`);
});

```

