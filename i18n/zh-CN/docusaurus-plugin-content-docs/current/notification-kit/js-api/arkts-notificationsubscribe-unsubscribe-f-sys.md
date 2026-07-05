# unsubscribe

## unsubscribe

```TypeScript
function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void
```

取消订阅。使用callback异步回调。

**起始版本：** 9

**需要权限：** 

- API版本9 - 19： ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | 是 | 通知订阅对象。 |
| callback | AsyncCallback&lt;void> | 是 | 取消订阅动作回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 9 - 19] |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let unsubscribeCallback = (err: BusinessError) => {
  if (err) {
    console.error(`unsubscribe failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info("unsubscribe success");
  }
}
let onDisconnectCallback = () => {
  console.info("subscribe disconnect");
}
let subscriber: notificationSubscribe.NotificationSubscriber = {
  onDisconnect: onDisconnectCallback
};
notificationSubscribe.unsubscribe(subscriber, unsubscribeCallback);

```

## unsubscribe

```TypeScript
function unsubscribe(subscriber: NotificationSubscriber): Promise<void>
```

取消订阅。使用Promise异步回调。

**起始版本：** 9

**需要权限：** 

- API版本9 - 19： ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | 是 | 通知订阅对象。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 9 - 19] |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let onDisconnectCallback = () => {
  console.info("subscribe disconnect");
}
let subscriber: notificationSubscribe.NotificationSubscriber = {
  onDisconnect: onDisconnectCallback
};
notificationSubscribe.unsubscribe(subscriber).then(() => {
  console.info("unsubscribe success");
}).catch((err: BusinessError) => {
  console.error(`unsubscribe fail: ${JSON.stringify(err)}`);
});

```

