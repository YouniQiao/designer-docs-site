# subscribe

## subscribe

```TypeScript
function subscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void
```

订阅当前用户下所有应用的通知。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#subscribe

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | Yes | 通知订阅对象。 |
| callback | AsyncCallback&lt;void> | Yes | 订阅动作回调函数。 |

## subscribe

```TypeScript
function subscribe(
    subscriber: NotificationSubscriber,
    info: NotificationSubscribeInfo,
    callback: AsyncCallback<void>
  ): void
```

订阅通知并指定订阅信息。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#subscribe

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

## subscribe

```TypeScript
function subscribe(subscriber: NotificationSubscriber, info?: NotificationSubscribeInfo): Promise<void>
```

订阅通知并指定订阅信息。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#subscribe

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

