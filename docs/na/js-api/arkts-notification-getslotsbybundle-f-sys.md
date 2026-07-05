# getSlotsByBundle

## getSlotsByBundle

```TypeScript
function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void
```

获取指定应用的所有通知通道（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getSlotsByBundle

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |
| callback | AsyncCallback&lt;Array&lt;NotificationSlot>> | Yes | 获取通知通道回调函数。 |

## getSlotsByBundle

```TypeScript
function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>
```

获取指定应用的所有通知通道（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getSlotsByBundle

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;NotificationSlot>> | 以Promise形式返回获取指定应用的通知通道。 |

