# getSlot

## getSlot

```TypeScript
function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void
```

获取一个指定类型的通知通道（callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getSlot

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | SlotType | Yes | 通知渠道类型，目前分为社交通信、服务提醒、内容咨询和其他类型。 |
| callback | AsyncCallback&lt;NotificationSlot> | Yes | 表示被指定的回调方法。 |

## getSlot

```TypeScript
function getSlot(slotType: SlotType): Promise<NotificationSlot>
```

获取一个指定类型的通知通道（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getSlot

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | SlotType | Yes | 通知渠道类型，目前分为社交通信、服务提醒、内容咨询和其他类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NotificationSlot> | 以Promise形式返回获取一个通知通道。 |

