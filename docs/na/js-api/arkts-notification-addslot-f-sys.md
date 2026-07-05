# addSlot

## addSlot

```TypeScript
function addSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void
```

创建通知渠道。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#addSlot

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slot | NotificationSlot | Yes | 要创建的通知渠道对象。 |
| callback | AsyncCallback&lt;void> | Yes | 表示被指定通道的回调方法。 |

## addSlot

```TypeScript
function addSlot(slot: NotificationSlot): Promise<void>
```

创建通知渠道。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#addSlot

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slot | NotificationSlot | Yes | 要创建的通知渠道对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

