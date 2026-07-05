# getActiveNotificationCount

## getActiveNotificationCount

```TypeScript
function getActiveNotificationCount(callback: AsyncCallback<number>): void
```

获取当前应用未删除的通知数（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getActiveNotificationCount

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | Yes | 获取未删除通知数回调函数。 |

## getActiveNotificationCount

```TypeScript
function getActiveNotificationCount(): Promise<number>
```

获取当前应用未删除的通知数（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getActiveNotificationCount

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | 以Promise形式返回获取当前应用未删除通知数。 |

