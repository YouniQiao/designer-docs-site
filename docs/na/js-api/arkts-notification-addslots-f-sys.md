# addSlots

## addSlots

```TypeScript
function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void
```

创建多个通知通道（callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#addSlots

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slots | Array&lt;NotificationSlot> | Yes | 要创建的通知通道对象数组。 |
| callback | AsyncCallback&lt;void> | Yes | 表示被指定的回调方法。 |

## addSlots

```TypeScript
function addSlots(slots: Array<NotificationSlot>): Promise<void>
```

创建多个通知通道（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#addSlots

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slots | Array&lt;NotificationSlot> | Yes | 要创建的通知通道对象数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

