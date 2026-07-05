# getAllActiveNotifications

## getAllActiveNotifications

```TypeScript
function getAllActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void
```

获取当前未删除的所有通知（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getAllActiveNotifications

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;NotificationRequest>> | Yes | 获取活动通知回调函数。 |

## getAllActiveNotifications

```TypeScript
function getAllActiveNotifications(): Promise<Array<NotificationRequest>>
```

获取当前未删除的所有通知（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getAllActiveNotifications

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;NotificationRequest>> | 以Promise形式返回获取活动通知。 |

