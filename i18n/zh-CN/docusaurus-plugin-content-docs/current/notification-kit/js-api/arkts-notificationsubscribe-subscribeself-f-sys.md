# subscribeSelf

## subscribeSelf

```TypeScript
function subscribeSelf(subscriber: NotificationSubscriber): Promise<void>
```

订阅本应用的通知并指定订阅信息。使用Promise异步回调。

**起始版本：** 11

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
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let onConsumeCallback = (data: notificationSubscribe.SubscribeCallbackData) => {
  console.info(`Consume callback:  ${JSON.stringify(data)}`);
}
let subscriber: notificationSubscribe.NotificationSubscriber = {
  onConsume: onConsumeCallback
};
notificationSubscribe.subscribeSelf(subscriber).then(() => {
  console.info("subscribeSelf success");
}).catch((err: BusinessError) => {
  console.error(`subscribeSelf failed, code is ${err.code}, message is ${err.message}`);
});

```

