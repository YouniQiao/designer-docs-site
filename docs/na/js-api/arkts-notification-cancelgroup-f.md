# cancelGroup

## cancelGroup

```TypeScript
function cancelGroup(groupName: string, callback: AsyncCallback<void>): void
```

取消本应用指定组下的通知（Callback形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#cancelGroup

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupName | string | Yes | 通知组名称，此名称需要在发布通知时通过  [NotificationRequest]notification.requestEnableNotification(callback: AsyncCallback)对象指定。 |
| callback | AsyncCallback&lt;void> | Yes | 取消本应用指定组下通知的回调函数。 |

## cancelGroup

```TypeScript
function cancelGroup(groupName: string): Promise<void>
```

取消本应用指定组下的通知（Promise形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#cancelGroup

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupName | string | Yes | 通知组名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

