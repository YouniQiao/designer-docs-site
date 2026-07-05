# publish

## publish

```TypeScript
function publish(request: NotificationRequest, userId: number, callback: AsyncCallback<void>): void
```

发布通知给指定的用户。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#publish

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | NotificationRequest | Yes | 用于设置要发布通知的内容和相关配置信息。 |
| userId | number | Yes | 用户ID。 |
| callback | AsyncCallback&lt;void> | Yes | 被指定的回调方法。 |

## publish

```TypeScript
function publish(request: NotificationRequest, userId: number): Promise<void>
```

发布通知给指定的用户。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#publish

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | NotificationRequest | Yes | 用于设置要发布通知的内容和相关配置信息。 |
| userId | number | Yes | 用户ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

