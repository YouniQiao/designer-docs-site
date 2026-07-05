# unsubscribe

## unsubscribe

```TypeScript
function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void
```

取消订阅（callbcak形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#unsubscribe

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | Yes | 通知订阅对象。 |
| callback | AsyncCallback&lt;void> | Yes | 取消订阅动作回调函数。 |

## unsubscribe

```TypeScript
function unsubscribe(subscriber: NotificationSubscriber): Promise<void>
```

取消订阅（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#unsubscribe

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | Yes | 通知订阅对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

