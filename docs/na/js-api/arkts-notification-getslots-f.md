# getSlots

## getSlots

```TypeScript
function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void
```

获取此应用程序的所有通知通道（callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getSlots

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;NotificationSlot>> | Yes | 以callback形式返回获取此应用程序的所有通知通道的结果。 |

## getSlots

```TypeScript
function getSlots(): Promise<Array<NotificationSlot>>
```

获取此应用程序的所有通知通道（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getSlots

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;NotificationSlot>> | 以Promise形式返回获取此应用程序的所有通知通道的结果。 |

